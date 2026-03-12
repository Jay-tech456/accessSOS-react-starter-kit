import { Link } from 'react-router-dom';
import { ROUTES } from '../architecture/constants/routes';

function NotFound() {
  return (
    <div className="page page-centered">
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to={ROUTES.HOME}>Go Home</Link>
    </div>
  );
}

export default NotFound;
