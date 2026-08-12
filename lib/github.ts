export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export async function fetchGitHubContributions(username: string) {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);

    if (!res.ok) return null;

    const data = await res.json();
    if (!data || !data.contributions) return null;

    const allDays: ContributionDay[] = data.contributions;
    const recentDays = allDays.slice(-112); // Last 16 weeks

    const totalCommits = allDays.reduce((sum, d) => sum + d.count, 0);
    const activeDays = recentDays.filter((d) => d.count > 0).length;

    return {
      recentDays,
      totalCommits,
      activeDays,
    };
  } catch (err) {
    console.error("Error fetching GitHub contributions:", err);
    return null;
  }
}
