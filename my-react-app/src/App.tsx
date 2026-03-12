import AppRouter from './router';

// App is intentionally thin — it delegates to the router.
// All provider wrapping lives in main.tsx.
function App() {
  return <AppRouter />;
}

export default App;
