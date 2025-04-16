import './ProjectCard.css';
import { DiJava, DiHtml5, DiDatabase } from 'react-icons/di';

const ProjectCard = () => {
  return (
    <div className="card-system">
      <article className="deconstructed-card text-card">
        <div className="card-layer card-background">
          <div className="bg-grid">
            <div className="grid-line horizontal" style={{ top: '25%' }}></div>
            <div className="grid-line horizontal" style={{ top: '50%' }}></div>
            <div className="grid-line horizontal" style={{ top: '75%' }}></div>
            <div className="grid-line vertical" style={{ left: '33.33%' }}></div>
            <div className="grid-line vertical" style={{ left: '66.66%' }}></div>
          </div>

          <div className="bg-objects">
            <DiJava className="tech-icon tech-0" />
            <DiHtml5 className="tech-icon tech-1" />
            <DiDatabase className="tech-icon tech-2" />
          </div>
        </div>

        <div className="card-layer card-frame">
          <svg viewBox="0 0 300 400" preserveAspectRatio="none">
            <path className="frame-path" d="M 20,20 H 280 V 380 H 20 Z" />
          </svg>
        </div>

        <div className="card-layer card-content">
          <div className="content-fragment fragment-meta text-align-right">
            <span className="meta-text">PROYECTO</span>
            <div className="meta-line"></div>
          </div>

          <div className="content-fragment fragment-heading">
            <h2 className="content-text align-right">Tamagotchi</h2>
            <h3 className="content-subtext align-right">Vida, lógica y mascota</h3>
          </div>

          <div className="content-fragment fragment-body text-align-center">
            <p className="content-text">
              Simulación completa de un tamagotchi programado en Java con HTML y SQLite.
            </p>
          </div>

          <div className="content-fragment fragment-cta text-align-right">
            <a href="#" className="cta-link">
              <div className="cta-box"></div>
              <span className="cta-text">Ver más</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
