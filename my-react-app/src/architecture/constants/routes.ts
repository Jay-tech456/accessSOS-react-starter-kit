// Single source of truth for all route paths.
// Import this wherever you use <Link to={}> or navigate().
// "as const" makes values literal types (e.g. '/' not string).
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  DASHBOARD: '/dashboard',
  NOT_FOUND: '*',
} as const;
