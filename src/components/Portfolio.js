import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filters = [
    { key: 'all', label: 'Tous les projets' },
    { key: 'web', label: 'Web' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'design', label: 'Design' },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-portfolio">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Mon travail</span>
          <h2 className="section-heading">Projets réalisés</h2>
          <p className="section-description">
            Une sélection de projets démontrant mes compétences en développement web
          </p>
        </div>

        <div className="portfolio-filters" data-aos="fade-up">
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <Row className="g-4">
          {filteredProjects.map((project, index) => (
            <Col md={6} lg={4} key={project.id} data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img src={project.images[0]} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <button
                      className="project-view-btn"
                      onClick={() => { setSelectedProject(project); setShowModal(true); }}
                    >
                      Voir les détails
                    </button>
                  </div>
                  <span className="project-year">{project.year}</span>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-role">{project.role}</p>
                  <p className="project-description">
                    {project.description.substring(0, 90)}...
                  </p>
                  <div className="project-techs">
                    {project.technologies.slice(0, 4).map((tech, i) => {
                      const Icon = tech.icon;
                      return (
                        <span className="tech-pill" key={i} title={tech.name}>
                          <Icon style={{ color: tech.color }} size={14} />
                        </span>
                      );
                    })}
                  </div>
                  <div className="project-actions">
                    <button
                      className="project-btn-primary"
                      onClick={() => { setSelectedProject(project); setShowModal(true); }}
                    >
                      Détails
                    </button>
                    {project.githubLink !== '#' && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn-icon"
                        aria-label="GitHub"
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.demoLink !== '#' && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn-icon"
                        aria-label="Démo"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <ProjectModal show={showModal} onHide={() => setShowModal(false)} project={selectedProject} />
    </section>
  );
};

export default Portfolio;