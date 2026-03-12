import { useTheme } from '../architecture/context/ThemeContext';

function About() {
  const { theme } = useTheme();

  return (
    <div className="page">
      <h1>About</h1>
      <p>This app demonstrates a clean React + TypeScript architecture.</p>
      <p>Current theme: <strong>{theme}</strong></p>
    </div>
  );
}

export default About;
