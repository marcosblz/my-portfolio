import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Tamagotchi Java',
      description: 'Simulación completa de un tamagotchi programado en Java.',
    },
    // Puedes agregar más proyectos aquí
  ];

  return (
    <section id="projects" className="projects-section"> {/* 💡 Añadido el id */}
      <h2 className="projects-title">Mis proyectos</h2>
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">Imagen</div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
