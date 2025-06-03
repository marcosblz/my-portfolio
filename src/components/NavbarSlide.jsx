import { useEffect, useState } from 'react';
import './NavbarSlide.css';
import ThemeToggle from './ThemeToggle';

const NavbarSlide = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button
        className="hamburger mobile-only"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú de navegación"
      >
        ☰
      </button>

      <nav id="mobile-nav" className={`mobile-only ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Inicio</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>Sobre mí</a></li>
          <li><a href="#work" onClick={(e) => handleNavClick(e, '#work')}>Camino</a></li>
          <li><a href="#blog" onClick={(e) => handleNavClick(e, '#blog')}>Estudios</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Habilidades</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Proyectos</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contacto</a></li>
        </ul>

        <div className="mobile-theme-toggle">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </nav>
    </>
  );
};

export default NavbarSlide;
