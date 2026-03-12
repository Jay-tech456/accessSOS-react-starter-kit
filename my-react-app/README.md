# my-react-app

A React + TypeScript application built with Vite.

## Stack

- React 19
- TypeScript 5.9 (strict mode)
- Vite 7
- React Router v6

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  architecture/
    types/          # Shared TypeScript interfaces (User, ApiResponse, prop types)
    constants/      # App-wide constants (ROUTES)
    hooks/          # Custom hooks (useLocalStorage)
    context/        # React Context providers (ThemeContext)
    utils/          # Pure utility functions (formatters)
    services/       # API/fetch layer (api.get, api.post)
  components/
    common/         # Reusable UI components (Button, Navbar, Layout)
    features/       # Domain-specific components (UserCard)
  pages/            # One file per route (Home, About, Dashboard, NotFound)
  router/           # Route configuration (AppRouter)
  main.tsx          # App entry point — providers live here
  App.tsx           # Thin shell — delegates to AppRouter
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## Environment Variables

Create a `.env` file in the project root:

```
VITE_API_URL=https://jsonplaceholder.typicode.com
```

## Key Patterns

- **Routing**: React Router v6 with nested Layout route (`<Outlet />`)
- **Context**: `ThemeContext` — consumed via `useTheme()` hook, never the raw context
- **Types**: `import type { ... }` for type-only imports (required by `verbatimModuleSyntax`)
- **API**: Generic `api.get<T>()` and `api.post<T>()` wrappers in `services/api.ts`
