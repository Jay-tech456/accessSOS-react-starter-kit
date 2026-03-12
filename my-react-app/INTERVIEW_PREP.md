# Interview Prep — React + TypeScript Live Coding

## Before You Start Coding

1. **Read the entire prompt** before writing a single line.
2. **Say what you plan to do** before doing it — talk through your approach.
3. **Start with the data shape** (TypeScript interface) before the UI.
4. **Build outside-in**: define the component signature first, then fill in the logic.
5. **Ask questions**: "Should I handle error states?" "Is this happy-path only?"
6. Talk through trade-offs — interviewers care about your reasoning more than perfect code.

---

## The Core Hooks (know these cold)

### useState

- Triggers a re-render when state changes
- Updates are **asynchronous** — reading state right after setState gives the old value
- Use functional form when new state depends on old: `setCount(prev => prev + 1)`
- Never mutate state directly: `setItems([...items, newItem])` not `items.push(...)`

### useEffect

```tsx
useEffect(() => { ... });           // runs after EVERY render
useEffect(() => { ... }, []);       // runs once on mount
useEffect(() => { ... }, [userId]); // runs when userId changes

// Cleanup — runs before next effect or on unmount
useEffect(() => {
  const timer = setInterval(tick, 1000);
  return () => clearInterval(timer);
}, []);

// Async inside useEffect — define and call, never async directly
useEffect(() => {
  async function load() { const data = await api.get("/users"); setUsers(data); }
  load();
}, []);
```

### useRef

Two uses:
1. Access a DOM element: `const ref = useRef<HTMLInputElement>(null); ref.current?.focus();`
2. Mutable value that survives renders but does NOT trigger re-renders (e.g. timer ID)

### useMemo / useCallback

- `useMemo` — memoize a **value**: `const sorted = useMemo(() => [...items].sort(), [items]);`
- `useCallback` — memoize a **function**: `const fn = useCallback(() => doIt(id), [id]);`
- Do not overuse — add overhead. Mainly useful to prevent child re-renders.

### useReducer

Use over useState when logic is complex or multiple values update together.
```tsx
type Action = { type: "inc" } | { type: "reset"; payload: number };
function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "inc": return state + 1;
    case "reset": return action.payload;
  }
}
const [count, dispatch] = useReducer(reducer, 0);
dispatch({ type: "inc" });
```

---

## TypeScript Patterns for React

### Prop Interfaces
Always suffix with `Props`: `ButtonProps`, `UserCardProps`, `ModalProps`.

### import type (REQUIRED in this project)
```tsx
// verbatimModuleSyntax is ON — use "import type" for type-only imports
import type { User } from "../architecture/types";
import type { ReactNode } from "react";
```

### Event Types
```tsx
onClick: React.MouseEvent<HTMLButtonElement>
onChange: React.ChangeEvent<HTMLInputElement>
onSubmit: React.FormEvent<HTMLFormElement>
```

### Discriminated Unions (interview favorite)
```tsx
type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

if (state.status === "success") {
  console.log(state.data); // TypeScript narrows — knows .data exists
}
```

### "as const" pattern
```tsx
const ROUTES = { HOME: "/", ABOUT: "/about" } as const;
// ROUTES.HOME is type "/" not string — useful for route constants
```

---

## React Router v6 Key APIs

```tsx
const navigate = useNavigate();
navigate("/dashboard");      // go to route
navigate(-1);                 // go back

const { id } = useParams();   // /users/:id

const [searchParams] = useSearchParams();
const q = searchParams.get("q"); // /search?q=hello
```

- **NavLink** — adds `active` class automatically, use for nav menus
- **Link** — use for content links
- **Outlet** — renders child route inside a layout

---

## Context Pattern (end to end)

```tsx
// 1. Interface
interface ThemeContextValue { theme: string; toggleTheme: () => void; }

// 2. Create
const ThemeContext = createContext<ThemeContextValue | null>(null);

// 3. Provider
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

// 4. Custom hook — throws if outside Provider
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
```

---

## Common Live Coding Patterns

### Fetch on mount with loading/error

```tsx
const [data, setData] = useState<User[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  fetch("/api/users")
    .then(res => { if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.json(); })
    .then(setData)
    .catch((err: unknown) => setError(err instanceof Error ? err.message : "Unknown error"))
    .finally(() => setLoading(false));
}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
```

### Controlled form

```tsx
const [form, setForm] = useState({ name: "", email: "" });
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); /* submit */ };
```

### Filter/search list

```tsx
const filtered = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
```

### Toggle

```tsx
const [isOpen, setIsOpen] = useState(false);
<button onClick={() => setIsOpen(prev => !prev)}>Toggle</button>
{isOpen && <Modal />}
```

---

## Things That Trip People Up

1. **Stale closure in useEffect**: a `[]` effect captures the initial state value forever. Add state to deps, or use a ref.
2. **Object in deps array**: `{} !== {}` every render → infinite loop. useMemo the object or use primitives.
3. **Wrong key prop**: never use array index as key if the list can be filtered/reordered. Use `item.id`.
4. **Memory leak**: set state after component unmounts. Use a `mounted` flag or AbortController in the cleanup.
5. **Conditional hooks**: never call hooks inside if/for. Hooks must always be called in the same order.
6. **Mutating state directly**: `items.push(x)` then `setItems(items)` — same reference, no re-render.

---

## Questions to Ask the Interviewer

- Should I handle error/loading/empty states or focus on the happy path first?
- Are there specific patterns this team uses (Redux, Zustand, React Query)?
- Is there an existing design system or should I write basic styles?
- How much do you care about accessibility (aria labels, keyboard nav)?
- Should I write tests, or is this UI-only?

---

## Quick Reference

| Hook | Use for |
|------|---------|
| `useState` | Simple local state |
| `useEffect` | Side effects (fetch, timers, subscriptions) |
| `useRef` | DOM access or mutable value without re-render |
| `useMemo` | Expensive computed value |
| `useCallback` | Stable function reference for memoized children |
| `useReducer` | Complex state or multiple related values |
| `useContext` | Consume context (via custom hook) |

| Router | Use for |
|--------|---------|
| `<Link>` | Content links |
| `<NavLink>` | Nav menus (auto active class) |
| `useNavigate()` | Programmatic navigation |
| `useParams()` | URL path params |
| `useSearchParams()` | Query strings |
| `<Outlet />` | Render child route in layout |
