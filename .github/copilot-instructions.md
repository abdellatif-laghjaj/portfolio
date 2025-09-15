# AI Coding Agent Instructions for Portfolio

## Architecture Overview

This is a Next.js 15 portfolio website showcasing AI/ML projects and professional experience. The architecture follows a component-driven design with centralized data management.

### Key Architectural Patterns

- **Centralized Data Source**: All content lives in `src/data/resume.tsx` as a single constant export `DATA`
- **Dynamic Component Loading**: Main page uses Next.js `dynamic()` imports for optimal SSR performance
- **View-Based Organization**: UI sections are organized as views in `src/components/views/`
- **Animation-First Design**: Framer Motion powers all animations via custom `BlurFade` components

## Essential Data Structure

The `DATA` constant in `src/data/resume.tsx` is the heart of the application:

```typescript
export const DATA = {
  name: "ABDELLATIF LAGHJAJ",
  BLUR_FADE_DELAY: 0.02, // Animation timing constant
  skills: {
    /* categorized with icons */
  },
  work: [
    /* experience objects */
  ],
  projects: [
    /* project objects with links/images */
  ],
  // ... other profile data
};
```

**Critical**: Always update this central data source when modifying content, never hardcode values in components.

## Development Workflows

### Adding New Content

1. **Projects**: Add to `DATA.projects` array with required fields: `title`, `description`, `technologies`, `links`, `image`
2. **Experience**: Update `DATA.work` with `company`, `title`, `description`, `start`/`end` dates
3. **Skills**: Extend `DATA.skills` categories, always include React icon components

### Blog System

- MDX files in `/content/` directory
- Frontmatter: `title`, `publishedAt`, `summary`, `image?`
- Processing via unified/remark pipeline in `src/data/blog.ts`
- Syntax highlighting with `rehype-pretty-code` (min-light/min-dark themes)

### Special Behaviors

- **Birthday Detection**: Page shows confetti animation on August 11th
- **Dynamic Imports**: All view components loaded via `dynamic()` for performance
- **Theme System**: next-themes with light/dark mode toggle

## Tech Stack Specifics

### UI Components

- **shadcn/ui**: New York style, configured in `components.json`
- **Radix UI**: Headless components (Avatar, Tooltip, Separator)
- **Tailwind CSS v4**: With custom CSS variables and animations
- **Magic UI**: Custom animation components (`BlurFade`, `Marquee`, etc.)

### Development Tools

- **Bun**: Package manager and runtime (see `bun.lockb`)
- **Turbopack**: Dev server (`npm run dev --turbopack`)
- **TypeScript**: Strict mode with Next.js types

## Project Conventions

### File Organization

```
src/
├── app/           # Next.js App Router
├── components/
│   ├── views/     # Page sections (Hero, About, Projects, etc.)
│   ├── magicui/   # Custom animation components
│   └── ui/        # shadcn/ui components
├── data/          # Central data source
└── lib/           # Utilities (cn function, etc.)
```

### Component Patterns

- **BlurFade Animations**: Wrap content with `<BlurFade delay={DATA.BLUR_FADE_DELAY * index}>`
- **Icon Usage**: Import from `react-icons` packages, stored in DATA with JSX
- **Responsive Design**: Mobile-first with `sm:`, `md:` breakpoints

### CSS/Styling

- **Utility-First**: Use Tailwind classes, avoid custom CSS
- **CSS Variables**: Theme colors defined in `globals.css`
- **Font**: Merriweather with custom weights (300, 400, 700)

## Integration Points

### External Services

- **GitHub**: Project links and source code references
- **Vercel**: Deployment platform (URL in `DATA.url`)
- **Social Media**: Contact links in `DATA.contact.social`

### Performance Optimizations

- **Image Optimization**: Next.js Image component for avatars/project images
- **Bundle Splitting**: Dynamic imports prevent large initial bundles
- **CSS Issues**: Custom webpack config disables CSS optimization (build fix)

## Critical Implementation Notes

1. **Animation Consistency**: Always use `DATA.BLUR_FADE_DELAY` for timing
2. **Type Safety**: Leverage `as const` assertion on DATA object
3. **Icon Libraries**: Mix of react-icons (Fa*, Si*, Tb\*) and custom Icons component
4. **Responsive Layout**: Max width 2xl, centered with padding
5. **Error Handling**: Custom 404 page in `[...not_found]/page.tsx`

## Common Tasks

### Adding a New Project

```typescript
// In src/data/resume.tsx, add to DATA.projects:
{
  title: "Project Name",
  description: "Brief description with tech focus",
  technologies: ["Tech1", "Tech2"], // String array
  links: [{ type: "Source", href: "url", icon: <Icons.source /> }],
  image: "/projects/project-name.png", // Place in public/
  dates: "2024 - Present",
  active: true
}
```

### Updating Skills

Add to appropriate category in `DATA.skills` with React icon component.

### Blog Post Creation

Create `.mdx` file in `content/` with required frontmatter, content processed automatically.
