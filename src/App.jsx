import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Background from './components/Background';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import useTheme from './hooks/useTheme'; // 👈 importa el hook correctamente

function App() {
  const { theme, toggleTheme } = useTheme(); // 👈 inicializa tema

  return (
    <div className="App">
      <Hero theme={theme} />
      <Projects />
      <Background theme={theme} />
      <div className="theme-toggle-container">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
