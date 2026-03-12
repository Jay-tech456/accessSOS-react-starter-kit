import { Link } from 'react-router-dom';
import { ROUTES } from '../architecture/constants/routes';
import Button from '../components/common/Button';

const features = [
  {
    title: 'Architecture',
    description: 'Global architecture folder with types, hooks, context, services, and utils — all in one place.',
    icon: '🏗️',
  },
  {
    title: 'Routing',
    description: 'React Router v6 with nested layout routes, NavLink active states, and a 404 fallback.',
    icon: '🗺️',
  },
  {
    title: 'TypeScript',
    description: 'Strict mode, generic hooks, discriminated unions, and import type — interview-ready patterns.',
    icon: '🔷',
  },
  {
    title: 'Context',
    description: 'ThemeContext with a custom useTheme hook. Toggle dark/light mode from the navbar.',
    icon: '⚙️',
  },
];

function Home() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">React + TypeScript Scaffold</div>
        <h1 className="hero-title">
          Built for the<br />
          <span className="hero-accent">interview room.</span>
        </h1>
        <p className="hero-subtitle">
          A clean, production-style React scaffold with routing, global architecture,
          TypeScript best practices, and an interview prep guide.
        </p>
        <div className="hero-actions">
          <Link to={ROUTES.DASHBOARD}>
            <Button label="View Dashboard →" onClick={() => {}} variant="primary" />
          </Link>
          <Link to={ROUTES.ABOUT}>
            <Button label="About" onClick={() => {}} variant="secondary" />
          </Link>
        </div>
      </section>

      {/* Feature cards */}
      <section className="features">
        {features.map((f) => (
          <div key={f.title} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
