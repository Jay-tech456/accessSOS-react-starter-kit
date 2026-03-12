import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../architecture/constants/routes';
import { useTheme } from '../../architecture/context/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-brand">MyApp</div>
      <ul className="navbar-links">
        {/* NavLink auto-applies "active" class when the URL matches */}
        <li><NavLink to={ROUTES.HOME} end>Home</NavLink></li>
        <li><NavLink to={ROUTES.ABOUT}>About</NavLink></li>
        <li><NavLink to={ROUTES.DASHBOARD}>Dashboard</NavLink></li>
      </ul>
      <button className="btn btn-secondary" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
}

export default Navbar;
