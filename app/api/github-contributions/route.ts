import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const username = "mushfiq693-dotcom";

  try {
    // 1. Fetch official GitHub contribution HTML directly from github.com
    const res = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html",
      },
      cache: "no-store", // Always fresh 100% real GitHub data
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch from GitHub" }, { status: 500 });
    }

    const html = await res.text();

    // 2. Parse td elements containing data-date and data-level
    // Example: <td ... data-date="2026-02-05" data-level="3" ...>
    const dayRegex = /<td[^>]*data-date="([^"]+)"[^>]*data-level="([0-4])"[^>]*>/g;
    const days: { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }[] = [];
    
    let match;
    while ((match = dayRegex.exec(html)) !== null) {
      const date = match[1];
      const level = parseInt(match[2], 10) as 0 | 1 | 2 | 3 | 4;
      
      // Estimate count based on level if exact tooltip count isn't in td
      const count = level === 0 ? 0 : level === 1 ? 1 : level === 2 ? 3 : level === 3 ? 6 : 10;
      days.push({ date, count, level });
    }

    if (days.length === 0) {
      // Secondary fallback regex if attribute order varies
      const dayRegexAlt = /<td[^>]*data-level="([0-4])"[^>]*data-date="([^"]+)"[^>]*>/g;
      while ((match = dayRegexAlt.exec(html)) !== null) {
        const level = parseInt(match[1], 10) as 0 | 1 | 2 | 3 | 4;
        const date = match[2];
        const count = level === 0 ? 0 : level === 1 ? 1 : level === 2 ? 3 : level === 3 ? 6 : 10;
        days.push({ date, count, level });
      }
    }

    // Sort days chronologically
    days.sort((a, b) => a.date.localeCompare(b.date));

    // Get last 16 weeks (~112 days)
    const recentDays = days.slice(-112);

    const totalCommits = days.reduce((sum, d) => sum + (d.count > 0 ? d.count : 0), 0);
    const activeDays = recentDays.filter((d) => d.level > 0).length;

    // Calculate current consecutive active day streak from recent days
    let streak = 0;
    let started = false;
    for (let i = recentDays.length - 1; i >= 0; i--) {
      if (recentDays[i].level > 0) {
        started = true;
        streak++;
      } else if (started) {
        break;
      }
    }

    return NextResponse.json(
      {
        recentDays,
        totalCommits,
        activeDays,
        streak: streak > 0 ? streak : activeDays,
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Official GitHub HTML parse error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
