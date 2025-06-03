import { useEffect } from 'react';
import './NavbarClassic.css';

const NavbarClassic = ({ theme, toggleTheme }) => {
  useEffect(() => {
    const anchors = document.querySelectorAll('#cubicle a');
    anchors.forEach(a => {
      const titleText = a.getAttribute('title');
      if (titleText) {
        a.setAttribute('data-title', titleText);
        a.removeAttribute('title');
      }
    });
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav id="cubicle" className="desktop-only navbar-container">
      <ul className="links">
        <li><a href="#hero" data-title="Inicio" onClick={(e) => handleNavClick(e, '#hero')}></a></li>
        <li><a href="#about" data-title="Sobre mí" onClick={(e) => handleNavClick(e, '#about')}></a></li>
        <li><a href="#work" data-title="Camino" onClick={(e) => handleNavClick(e, '#work')}></a></li>
        <li><a href="#blog" data-title="Estudios" onClick={(e) => handleNavClick(e, '#blog')}></a></li>
        <li><a href="#skills" data-title="Habilidades" onClick={(e) => handleNavClick(e, '#skills')}></a></li>
        <li><a href="#projects" data-title="Proyectos" onClick={(e) => handleNavClick(e, '#projects')}></a></li>
        <li><a href="#contact" data-title="Contacto" onClick={(e) => handleNavClick(e, '#contact')}></a></li>
      </ul>
    </nav>
  );
};

export default NavbarClassic;
