export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export async function fetchGitHubContributions(username: string) {
  try {
    const res = await fetch(`/api/github-contributions`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    if (!data || !data.recentDays || data.recentDays.length === 0) return null;

    return {
      recentDays: data.recentDays as ContributionDay[],
      totalCommits: data.totalCommits as number,
      activeDays: data.activeDays as number,
      streak: data.streak as number,
    };
  } catch (err) {
    console.error("Error fetching GitHub contributions via internal API:", err);
    return null;
  }
}

