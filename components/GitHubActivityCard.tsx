"use client";

import { useState, useEffect } from "react";
import { Sparkles, ExternalLink, Activity, Calendar } from "lucide-react";
import { activityData } from "@/content/activity";
import { profileData } from "@/content/profile";
import { fetchGitHubContributions, ContributionDay } from "@/lib/github";

// Vibrant Cyberpunk Emerald & Cyan active commit dots palette
const levelColors = [
  "bg-[#120a2a] border border-white/5",                                // Level 0: Empty day
  "bg-emerald-900/80 border border-emerald-500/40",                   // Level 1: Light activity
  "bg-emerald-600 border border-emerald-400/60 shadow-sm shadow-emerald-500/30", // Level 2: Medium activity
  "bg-emerald-400 border border-white shadow-md shadow-emerald-400/60",          // Level 3: High activity
  "bg-cyan-300 border border-white shadow-lg shadow-cyan-300/80 animate-pulse",   // Level 4: Peak active neon cyan flare
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
  } | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetchGitHubContributions(username).then((data) => {
      if (isMounted && data) {
        setStats(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [username]);

  // Fallback 16-week grid (~112 days)
  const days: ContributionDay[] = stats?.recentDays || Array.from({ length: 112 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (111 - i));
    const dateStr = d.toISOString().split("T")[0];
    return {
      date: dateStr,
      count: i % 4 === 0 ? (i % 8 === 0 ? 6 : 2) : 0,
      level: (i % 4 === 0 ? (i % 8 === 0 ? 3 : 1) : 0) as 0 | 1 | 2 | 3 | 4,
    };
  });

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
    <div className="w-full glass-card p-4 sm:p-5 rounded-2xl border border-fuchsia-500/30 shadow-2xl relative overflow-hidden group">
      {/* Accent top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity" />

      {/* Header Row: Live Pulse + Title + Profile Link */}
      <div className="flex items-center justify-between gap-3 mb-3 pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-fuchsia-300">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>BUILDING IN PUBLIC</span>
          </div>
        </div>

        <a
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[11px] font-mono text-cyan-300 hover:text-white transition-colors"
        >
          <span>@{username}</span>
          <ExternalLink className="w-3 h-3 text-cyan-400" />
        </a>
      </div>

      {/* Note Row: Currently Building */}
      <p className="text-xs font-mono text-gray-300 leading-relaxed mb-4">
        {activityData.currentlyBuilding}
      </p>

      {/* Contribution Grid with Month Headers & Stats */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-white/5">
        
        {/* Heatmap Grid with Month Headers */}
        <div className="overflow-x-auto max-w-full pb-1">
          {/* Month Labels Row */}
          <div className="flex gap-1.5 mb-1.5 text-[10px] font-mono text-gray-400 font-semibold h-4">
            {monthLabels.map((month, idx) => (
              <div key={idx} className="w-2.5 text-center shrink-0">
                {month && <span className="text-cyan-300 -ml-1">{month}</span>}
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
        </div>

        {/* Live Stat & Month Summary Badge */}
        <div className="flex flex-col gap-1.5 shrink-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#070510] border border-emerald-500/30 text-xs font-mono shadow-sm shadow-emerald-500/20">
            <Activity className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            {stats ? (
              <span className="text-gray-300">
                <strong className="text-emerald-400">{stats.totalCommits}+</strong> commits &bull; <span className="text-cyan-300">{stats.activeDays}</span> active days
              </span>
            ) : (
              <span className="text-emerald-400 font-medium">Active GitHub Contributor</span>
            )}
          </div>

          <div className="flex items-center justify-end gap-1.5 text-[10px] font-mono text-gray-400">
            <Calendar className="w-3 h-3 text-fuchsia-400" />
            <span>Hover dots for exact date &amp; commits</span>
          </div>
        </div>

      </div>
    </div>
  );
}
