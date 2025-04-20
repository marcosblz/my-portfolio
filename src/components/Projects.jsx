import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Mis proyectos</h2>
      <div className="projects-grid">
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="project-card" key={i}>
            <div className="project-image">Imagen</div>
            <div className="project-info">
              <h3 className="project-name">Proyecto {i + 1}</h3>
              <p className="project-desc">Descripción breve del proyecto {i + 1}.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
