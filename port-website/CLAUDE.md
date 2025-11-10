# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

```bash
# Development
npm run dev                # Start dev server (Turbopack disabled for compatibility)
npm run build             # Build for production
npm run start             # Start production server
npm run lint              # Run ESLint

# Development server runs on http://localhost:3000
```

## Architecture Overview

### Next.js 16 App Router with Internationalization

This codebase uses Next.js 16 App Router with a custom internationalization implementation:

- **Routing Structure**: `src/app/[locale]/` dynamic routes for vi/en localization
- **Proxy Middleware**: `src/proxy.ts` handles locale detection and redirects
- **Translation System**: `src/lib/i18n.ts` provides type-safe translations

### Key Architecture Patterns

#### Internationalization Flow
1. `src/proxy.ts` intercepts requests and detects locale from URL or Accept-Language header
2. Redirects to `/[locale]/path` format and sets `x-locale` header
3. Root layout (`src/app/layout.tsx`) reads locale from header for `<html lang>`
4. Locale layout (`src/app/[locale]/layout.tsx`) validates locale and passes to components
5. Components use `getTranslations(locale)` from `src/lib/i18n.ts`

#### Layout Structure
- **Root Layout**: Handles `<html>`, `<body>`, global styles, metadata, and Toaster
- **Locale Layout**: Validates locale params and wraps with main Layout component
- **Main Layout**: (`src/components/layout/Layout.tsx`) Contains Header/Footer structure

#### Component Architecture
- **Header Component**: Uses shadcn/ui NavigationMenu and Sheet for mobile
- **UI Components**: Located in `src/components/ui/` using Radix UI primitives
- **Page Components**: All pages are in `src/app/[locale]/` without Layout wrappers

### Important Implementation Details

#### Middleware/Proxy Configuration
- Uses `src/proxy.ts` instead of `middleware.ts` (Next.js 16 convention)
- Excludes static assets with regex: `.*\\.[a-zA-Z0-9]+$`
- Sets locale headers for server components

#### CSS and Styling
- Tailwind CSS 4 with custom theme in `src/app/globals.css`
- Custom CSS variables for shadcn/ui components
- Navigation menu styling overrides in header section
- Removed unused variables (chart, sidebar) for cleaner codebase

#### Dependencies
- **UI**: shadcn/ui components built on Radix UI primitives
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Heroicons React
- **Styling**: Tailwind CSS 4 with tw-animate-css
- **Notifications**: React Hot Toast

### File Structure Notes

```
src/
├── app/
│   ├── [locale]/           # Localized pages (vi, en)
│   │   ├── layout.tsx     # Locale validation and Layout wrapper
│   │   ├── page.tsx       # Home page
│   │   ├── about/         # About section pages
│   │   ├── contact/       # Contact page
│   │   ├── products/      # Products page
│   │   └── news/          # News page
│   ├── layout.tsx         # Root layout with metadata
│   ├── globals.css        # Global styles and CSS variables
│   ├── sitemap.ts         # Auto-generated sitemap
│   └── robots.ts          # SEO robots configuration
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Main navigation with i18n
│   │   ├── Footer.tsx     # Site footer
│   │   └── Layout.tsx     # Main layout wrapper
│   ├── ui/                # Reusable UI components (shadcn/ui)
│   └── Loading.tsx        # Loading component for Suspense
├── hooks/
│   └── use-mobile.ts      # Mobile detection hook
├── lib/
│   └── i18n.ts            # Translation system
└── proxy.ts               # Middleware for locale handling
```

### Translation System Usage

```typescript
// In server components with locale from params
import { getTranslations, type Locale } from '@/lib/i18n'

function Component({ locale }: { locale: Locale }) {
  const t = getTranslations(locale)
  return <h1>{t.nav.home}</h1>
}

// Add new translations in src/lib/i18n.ts
export const translations = {
  vi: { nav: { newKey: 'Tiếng Việt' } },
  en: { nav: { newKey: 'English' } }
}
```

### Important Notes

- All page components should NOT import/wrap with Layout component (handled by locale layout)
- Use `locale` prop passed from layout params, never detect locale in components
- Static assets are excluded from proxy middleware to prevent serving issues
- Navigation menu uses shadcn/ui with custom CSS overrides for dark theme
- Language switcher preserves current path when switching locales