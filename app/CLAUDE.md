# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, TypeScript, and Vite. It showcases Antoine Famibelle's work experience, education, and projects through an animated, interactive interface with dark/light theme support.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (runs TypeScript compiler then Vite build)
- `npm run lint` - Run ESLint with TypeScript support
- `npm run preview` - Preview production build locally

## Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom animations and shadcn/ui components
- **State Management**: Zustand with persistence
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion + custom UI components
- **Particles**: TSParticles for visual effects

### Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (shadcn/ui + custom)
│   └── custom/       # Application-specific components
├── pages/            # Route components (Homepage, 404Page)
├── layout/           # Layout components (navbar, main layout)
├── context/          # React contexts (theme, auth, loading)
├── store/            # Zustand store configuration
├── lib/
│   ├── types/        # TypeScript type definitions
│   └── utils/        # Utility functions (cn, isDark)
├── constants/        # Application constants
└── assets/           # Static assets (images, icons)
```

### Key Architectural Patterns

**Theme System**: Uses React Context with localStorage persistence. Theme can be "light", "dark", or "system" (follows OS preference). The `isDark()` utility function handles theme detection.

**Component Organization**: 
- UI components follow shadcn/ui patterns with Tailwind CSS
- Custom components are organized by feature in `components/custom/`
- Layout components handle routing and shared UI elements

**State Management**: Zustand store with persistence middleware. Currently manages user authentication state (though this appears to be a legacy from a previous project iteration).

**Styling Approach**: 
- Tailwind CSS with custom configuration for portfolio-specific animations
- CSS variables for theme colors defined in index.css
- Custom background patterns and animations via Tailwind plugins

**Asset Management**: All images are optimized and stored in `src/assets/` with organized subdirectories for icons and project screenshots.

## Important Configuration

- **Path Aliases**: `@/` maps to `src/` directory (configured in both Vite and TypeScript)
- **Strict Mode**: TypeScript strict mode is disabled in tsconfig.json
- **Node Version**: Requires Node.js >= 20 (specified in package.json engines)

## Development Notes

- The project uses ESLint with TypeScript and React-specific rules
- Tailwind CSS includes custom plugins for grid and dot background patterns
- Components follow the shadcn/ui design system patterns
- The application has a loading screen with multi-step loader animation
- Portfolio content is hardcoded in the Homepage component (education, projects data)

## Component Patterns

When creating new components:
1. Use the `cn()` utility from `@/lib/utils` for conditional class names
2. Follow the shadcn/ui component structure and prop patterns
3. Use TypeScript interfaces for component props
4. Implement theme-aware styling using the `useTheme` hook and `isDark` utility
5. Place reusable UI components in `components/ui/` and feature-specific ones in `components/custom/`