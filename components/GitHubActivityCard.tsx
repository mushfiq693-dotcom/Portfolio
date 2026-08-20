"use client";

import { useState, useEffect } from "react";
import { Sparkles, ExternalLink, Activity, Calendar, Flame } from "lucide-react";
import { activityData } from "@/content/activity";
import { profileData } from "@/content/profile";
import { fetchGitHubContributions, ContributionDay } from "@/lib/github";

// Minimalist Pure Obsidian & Emerald active commit dots palette
const levelColors = [
  "bg-[#18181b] border border-white/[0.04]",                                // Level 0: Empty day
  "bg-emerald-950/80 border border-emerald-500/25",                         // Level 1: Light activity
  "bg-emerald-700/90 border border-emerald-400/40 shadow-sm shadow-emerald-500/20", // Level 2: Medium activity
  "bg-emerald-500 border border-emerald-300/80 shadow-md shadow-emerald-500/40",    // Level 3: High activity
  "bg-emerald-400 border border-white shadow-lg shadow-emerald-400/60 animate-pulse", // Level 4: Peak active flare
];

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatMonth(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "";
  return monthNames[d.getMonth()];
}

function formatDateFull(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function GitHubActivityCard() {
  const username = activityData.username;
  const [stats, setStats] = useState<{
    recentDays: ContributionDay[];
    totalCommits: number;
    activeDays: number;
    streak: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchGitHubContributions(username).then((data) => {
      if (isMounted) {
        if (data) {
          setStats(data);
        }
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [username]);

  // Use real fetched days array
  const days: ContributionDay[] = stats?.recentDays || [];

  // Chunk days into weeks (columns of 7 days)
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  // Calculate Month labels per week column
  let lastMonth = "";
  const monthLabels = weeks.map((week) => {
    if (!week[0] || !week[0].date) return "";
    const currentMonth = formatMonth(week[0].date);
    if (currentMonth !== lastMonth) {
      lastMonth = currentMonth;
      return currentMonth;
    }
    return "";
  });

  return (
    <div className="w-full glass-card p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
      {/* Accent top titanium gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-zinc-500 via-white to-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Header Row: Live Pulse + Title + Profile Link */}
      <div className="flex items-center justify-between gap-3 mb-3 pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>LIVE GITHUB ACTIVITY</span>
          </div>
        </div>

        <a
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white transition-colors"
        >
          <span>@{username}</span>
          <ExternalLink className="w-3 h-3 text-zinc-400" />
        </a>
      </div>

      {/* Note Row: Currently Building */}
      <p className="text-xs font-mono text-zinc-300 leading-relaxed mb-4">
        {activityData.currentlyBuilding}
      </p>

      {/* Contribution Grid with Month Headers & Stats */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-white/5">
        
        {/* Heatmap Grid */}
        <div className="overflow-x-auto max-w-full pb-0 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
          {loading ? (
            <div className="h-28 flex items-center justify-center font-mono text-xs text-zinc-400 gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-400 animate-ping" />
              <span>Fetching Real GitHub Activity...</span>
            </div>
          ) : (
            <>
              {/* Month Labels Row */}
              <div className="flex gap-1.5 mb-1.5 text-[10px] font-mono text-zinc-400 font-semibold h-4">
                {monthLabels.map((month, idx) => (
                  <div key={idx} className="w-2.5 text-center shrink-0">
                    {month && <span className="text-zinc-300 -ml-1">{month}</span>}
                  </div>
                ))}
              </div>

              {/* Grid Columns */}
              <div className="flex gap-1.5">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        title={`${day.count} commits on ${formatDateFull(day.date)}`}
                        className={`w-2.5 h-2.5 rounded-sm transition-all duration-200 hover:scale-150 cursor-pointer ${
                          levelColors[day.level] || levelColors[0]
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Live Stat Badge including Active Streak */}
        <div className="flex flex-col gap-1.5 shrink-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#000000] border border-white/10 text-xs font-mono shadow-sm">
            <Activity className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-zinc-300 flex items-center gap-1.5">
              <span className="text-amber-400 font-bold flex items-center gap-0.5">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 inline" />
                {stats ? stats.streak : 0}-day streak
              </span>
              <span>&bull;</span>
              <strong className="text-emerald-400">{stats ? stats.totalCommits : 0}+</strong> commits
            </span>
          </div>

          <div className="flex items-center justify-end gap-1.5 text-[10px] font-mono text-zinc-500">
            <Calendar className="w-3 h-3 text-zinc-400" />
            <span>Hover dots for exact date &amp; commits</span>
          </div>
        </div>

      </div>
    </div>
  );
}
