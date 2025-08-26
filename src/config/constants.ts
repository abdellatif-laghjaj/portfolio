// Centralized configuration constants for the portfolio application

export const CONFIG = {
  // Performance settings
  GITHUB_STATS_CACHE_DURATION: 3600, // 1 hour in seconds
  
  // Animation settings
  BLUR_FADE_DELAY: 0.02, // Imported from DATA.BLUR_FADE_DELAY
  AGE_UPDATE_INTERVAL: 50, // milliseconds for age calculation updates
  
  // Birthday confetti settings
  CONFETTI_DURATION: 30 * 1000, // 30 seconds
  CONFETTI_COLORS: ["#a786ff", "#fd8bbc", "#ffb220", "#f36d23"],
  
  // API endpoints
  GITHUB_API: {
    USER_URL: "https://api.github.com/users/abdellatif-laghjaj",
    REPOS_URL: "https://api.github.com/users/abdellatif-laghjaj/repos",
    USER_AGENT: "Portfolio-Website",
  },
  
  // Asset paths (organized structure)
  PATHS: {
    IMAGES: "/images",
    LOGOS: "/logos", 
    PROJECTS: "/projects",
    HACKATHONS: "/hackathons",
  },
} as const;