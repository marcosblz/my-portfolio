import { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
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

  return (
    <nav id="cubicle">
      <ul className="links">
        <li><a href="#hero" data-title="Inicio"></a></li>
        <li><a href="#about" data-title="Sobre mi"></a></li>
        <li><a href="#work" data-title="Camino"></a></li>
        <li><a href="#blog" data-title="Estudios"></a></li>
        <li><a href="#skills" data-title="Habilidades"></a></li>
        <li><a href="#projects" data-title="Proyectos"></a></li>
        <li><a href="#contact" data-title="Contacto"></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
