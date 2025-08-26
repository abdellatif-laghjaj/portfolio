import { NextRequest, NextResponse } from 'next/server';
import { CONFIG } from '@/config/constants';

export interface GitHubStats {
  followers: number;
  stars: number;
  repos: number;
  forks: number;
  languages: number;
}

interface GitHubUser {
  followers: number;
  public_repos: number;
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export async function GET(request: NextRequest) {
  try {
    // Fetch user data
    const userResponse = await fetch(CONFIG.GITHUB_API.USER_URL, {
      headers: {
        'User-Agent': CONFIG.GITHUB_API.USER_AGENT,
      },
      next: { revalidate: CONFIG.GITHUB_STATS_CACHE_DURATION },
    });

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData: GitHubUser = await userResponse.json();

    // Fetch repositories data
    const reposResponse = await fetch(CONFIG.GITHUB_API.REPOS_URL, {
      headers: {
        'User-Agent': CONFIG.GITHUB_API.USER_AGENT,
      },
      next: { revalidate: CONFIG.GITHUB_STATS_CACHE_DURATION },
    });

    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repositories data');
    }

    const reposData: GitHubRepo[] = await reposResponse.json();

    // Calculate aggregated stats
    const stars = reposData.reduce(
      (acc: number, repo: GitHubRepo) => acc + repo.stargazers_count,
      0,
    );
    const forks = reposData.reduce(
      (acc: number, repo: GitHubRepo) => acc + repo.forks_count,
      0,
    );
    const languages = new Set(
      reposData.map((repo: GitHubRepo) => repo.language).filter(Boolean),
    ).size;

    const stats: GitHubStats = {
      followers: userData.followers,
      stars,
      repos: userData.public_repos,
      forks,
      languages,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    
    // Return fallback data on error
    const fallbackStats: GitHubStats = {
      followers: 0,
      stars: 0,
      repos: 0,
      forks: 0,
      languages: 0,
    };

    return NextResponse.json(fallbackStats);
  }
}