import { Routes, Route } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import { ROUTES } from '../architecture/constants/routes';

// Nested route pattern (React Router v6):
// The parent Route holds <Layout> which has an <Outlet />.
// Child routes render inside that Outlet — Navbar renders only once.
function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Route>

      {/* NotFound is outside Layout so it renders full-screen */}
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
