import './Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Mis proyectos</h2>
        <p>Acá verás algunos de los trabajos que he realizado o experimentos que he construido.</p>

        <div className="projects-grid">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
