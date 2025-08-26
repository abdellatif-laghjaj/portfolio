"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import StatCard from "@/components/stat-card";
import type { GitHubStats } from "@/app/api/github-stats/route";

const calculateAge = (birthDate: Date) => {
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(
    ageDate.getUTCFullYear() -
      1970 +
      ageDate.getUTCMonth() / 12 +
      ageDate.getUTCDate() / 365,
  );
};

const birthDate = new Date(DATA.birthDate);

export function MyStats({ className }: { className?: string }) {
  const [age, setAge] = useState(calculateAge(birthDate));
  const [githubData, setGithubData] = useState<GitHubStats>({
    followers: 0,
    stars: 0,
    repos: 0,
    forks: 0,
    languages: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setAge(calculateAge(birthDate));
    }, 50);

    // Fetch GitHub stats from our API route
    fetch("/api/github-stats")
      .then((response) => response.json())
      .then((data: GitHubStats) => {
        setGithubData(data);
      })
      .catch((error) => {
        console.error("Failed to fetch GitHub stats:", error);
        setGithubData({
          followers: 0,
          stars: 0,
          repos: 0,
          forks: 0,
          languages: 0,
        });
      });

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      name: "My age",
      value: age.toFixed(2),
      icon: <Icons.birthday />,
      color: "#00C9A7",
    },
    {
      name: "GitHub Followers",
      value: githubData.followers.toString(),
      icon: <Icons.followers />,
      color: "#1E86FF",
    },
    {
      name: "GitHub Stars",
      value: githubData.stars.toString(),
      icon: <Icons.stars />,
      color: "#FFB800",
    },
    {
      name: "GitHub Repos",
      value: githubData.repos.toString(),
      icon: <Icons.repository />,
      color: "#8A2BE2",
    },
    {
      name: "GitHub Forks",
      value: githubData.forks.toString(),
      icon: <Icons.fork />,
      color: "#FF4500",
    },
    {
      name: "Languages Used",
      value: githubData.languages.toString(),
      icon: <Icons.source />,
      color: "#32CD32",
    },
  ];

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((item, idx) => (
          <StatCard {...item} key={idx} />
        ))}
      </div>
    </div>
  );
}
