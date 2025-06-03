import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Background from './components/Background';
import NavbarClassic from './components/NavbarClassic';
import NavbarSlide from './components/NavbarSlide';
import useTheme from './hooks/useTheme';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="App">
      <Background theme={theme} />
      <Hero theme={theme} />
      <Projects />

      {/* Menú lateral para móvil */}
      <NavbarSlide theme={theme} toggleTheme={toggleTheme} />

      {/* Navbar tipo cubicle para escritorio */}
      <NavbarClassic />

      {/* Toggle solo en escritorio */}
      <div className="theme-toggle-container">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
