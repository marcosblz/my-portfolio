import './Hero.css';
import marcosImg from '../assets/marcos.png';

const Hero = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`hero ${isDark ? 'dark' : 'light'}`}>
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

          <a href="#projects" className="cta-button">Ver mis proyectos</a>

          <div className="social-links">
            <a href="mailto:marcos@example.com" target="_blank" rel="noopener noreferrer">📧</a>
            <a href="https://linkedin.com/in/marcosbaeza" target="_blank" rel="noopener noreferrer">💼</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;