import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

// Layout wraps all pages that share the Navbar.
// <Outlet /> renders whichever child route matched.
function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
