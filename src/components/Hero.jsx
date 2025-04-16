import './Hero.css';
import marcosImg from '../assets/marcos.png';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="hero" className={`hero ${isDark ? 'dark' : 'light'}`}>
      <div className="hero-wrapper">
        <div className="hero-img-container">
          <img src={marcosImg} alt="Marcos Baeza" className="hero-avatar" />
        </div>

        <div className="hero-content">
          <h1>Marcos Baeza</h1>
          <h2>Fullstack Developer con enfoque backend</h2>
          <p>Construyendo soluciones digitales desde el código hasta la nube.</p>

          <div className="availability-badge">
            <span className="dot" /> Disponible para nuevos proyectos
          </div>

          <a href="#projects" className="cta-button">Ver mi último proyecto</a>

          <div className="social-links">
            <a
              href="mailto:marcosbaezalopez@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Correo electrónico"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/marcos-baeza-952080244/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;