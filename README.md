# accessSOS React Starter Kit

A React + TypeScript interview starter kit with a production-style project structure, routing, and a built-in interview prep guide.

## What's Inside

```
accessSOS-react-starter-kit/
└── my-react-app/         # Main React + TypeScript application
```

## Stack

- **React 19** + **TypeScript 5.9** (strict mode)
- **Vite 7** for fast dev server and production builds
- **React Router v6** with nested layout routes

## Getting Started

```bash
cd my-react-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
my-react-app/src/
  architecture/
    types/        # Shared TypeScript interfaces
    constants/    # Route path constants (ROUTES)
    hooks/        # Custom hooks (useLocalStorage)
    context/      # React Context providers (ThemeContext)
    utils/        # Pure utility functions (formatters)
    services/     # API fetch wrappers (api.get<T>, api.post<T>)
  components/
    common/       # Reusable UI (Button, Navbar, Layout)
    features/     # Domain components (UserCard)
  pages/          # Home, About, Dashboard, NotFound
  router/         # Route configuration (AppRouter)
```

## Key Patterns

| Pattern | Location |
|---------|----------|
| Generic custom hook | `architecture/hooks/useLocalStorage.ts` |
| Context + custom hook | `architecture/context/ThemeContext.tsx` |
| Generic fetch wrapper | `architecture/services/api.ts` |
| Nested layout route | `router/index.tsx` |
| TypeScript interfaces | `architecture/types/index.ts` |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |

## Interview Prep

See [`my-react-app/INTERVIEW_PREP.md`](my-react-app/INTERVIEW_PREP.md) for a full cheatsheet covering:
- Core hooks (useState, useEffect, useRef, useMemo, useReducer)
- TypeScript patterns for React
- React Router v6 API
- Common live coding patterns
- Things that trip people up
