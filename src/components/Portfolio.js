import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filters = [
    { key: 'all', label: 'Tous' },
    { key: 'web', label: 'Web' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'design', label: 'Design' }
  ];

  // Mapping des projets avec catégories (vous pouvez les définir dans projectsData)
  const projects = [
    { id: 1, category: 'web', ...projectsData[1] },
    { id: 2, category: 'web', ...projectsData[2] },
    { id: 3, category: 'web', ...projectsData[3] },
    { id: 4, category: 'web', ...projectsData[4] },
    { id: 5, category: 'web', ...projectsData[5] }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section id="portfolio" className="portfolio">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Mes projets</h2>
        <div className="portfolio-filters" data-aos="fade-up">
          {filters.map(f => (
            <Button
              key={f.key}
              variant="outline-primary"
              className={filter === f.key ? 'active' : ''}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </Button>
          ))}
        </div>
        <Row id="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <Col md={4} key={project.id} className="portfolio-card" data-category={project.category}>
              <div className="portfolio-item" data-aos="zoom-in" data-aos-delay={200 + index * 100}>
                <div className="portfolio-img">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    style={{ width: '95%', height: '95%', objectFit: 'cover' }} 
                  />
                  <div className="portfolio-overlay">
                    <Button variant="light" onClick={() => handleViewProject(project)}>Voir les détails</Button>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p>{project.description.substring(0, 80)}...</p>
                  <div className="portfolio-tech">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <Button variant="primary" size="sm" className="mt-3" onClick={() => handleViewProject(project)}>
                    Voir le projet
                  </Button>
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