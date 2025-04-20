import './ProjectCard.css';
import { DiJava, DiHtml5, DiDatabase } from 'react-icons/di';

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="card-top">
        <h3 className="card-title">Tamagotchi Java</h3>
        <p className="card-subtitle">Proyecto final de DAM</p>
      </div>
      <div className="card-icons">
        <DiJava title="Java" />
        <DiHtml5 title="HTML" />
        <DiDatabase title="SQLite" />
      </div>
      <div className="card-description">
        Simulación funcional de un tamagotchi desarrollado con Java, SQLite y HTML. Lógica, estado y emociones.
      </div>
      <div className="card-footer">
        <button className="expand-button">Ver más</button>
      </div>
    </div>
  );
};

export default ProjectCard;
