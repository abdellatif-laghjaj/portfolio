import { NextRequest, NextResponse } from 'next/server';

export interface GitHubStats {
  followers: number;
  stars: number;
  repos: number;
  forks: number;
  languages: number;
}

export async function GET(request: NextRequest) {
  try {
    // Fetch user data
    const userResponse = await fetch('https://api.github.com/users/abdellatif-laghjaj', {
      headers: {
        'User-Agent': 'Portfolio-Website',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData = await userResponse.json();

    // Fetch repositories data
    const reposResponse = await fetch('https://api.github.com/users/abdellatif-laghjaj/repos', {
      headers: {
        'User-Agent': 'Portfolio-Website',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repositories data');
    }

    const reposData = await reposResponse.json();

    // Calculate aggregated stats
    const stars = reposData.reduce(
      (acc: number, repo: any) => acc + repo.stargazers_count,
      0,
    );
    const forks = reposData.reduce(
      (acc: number, repo: any) => acc + repo.forks_count,
      0,
    );
    const languages = new Set(
      reposData.map((repo: any) => repo.language).filter(Boolean),
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