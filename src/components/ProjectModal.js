import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectModal = ({ show, onHide, project }) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="project-details">
        <div className="row">
          <div className="col-md-6">
            <img src={project.images[0]} alt={project.title} className="img-fluid mb-3" style={{ borderRadius: '8px' }} />
            {project.images.length > 1 && (
              <div className="row mt-2">
                {project.images.slice(1).map((img, idx) => (
                  <div className="col-4" key={idx}>
                    <img 
                      src={img} 
                      alt={`${project.title} ${idx+2}`} 
                      className="img-fluid" 
                      style={{ borderRadius: '5px', cursor: 'pointer' }}
                      onClick={(e) => {
                        const mainImg = e.target.closest('.row').previousElementSibling;
                        if (mainImg) mainImg.src = img;
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col-md-6">
            <h6>Description</h6>
            <p>{project.description}</p>
            <h6 className="mt-4">Fonctionnalités principales</h6>
            <ul className="mb-3">
              {project.features.map((feat, i) => <li key={i}>{feat}</li>)}
            </ul>
            <h6 className="mt-3">Technologies utilisées</h6>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, i) => (
                <span key={i} className="badge bg-primary">{tech}</span>
              ))}
            </div>
            <div className="mt-4">
              {project.demoLink !== '#' && (
                <Button href={project.demoLink} target="_blank" variant="primary" size="sm" className="me-2">
                  <FaExternalLinkAlt className="me-1" /> Voir la démo
                </Button>
              )}
              {project.githubLink !== '#' && (
                <Button href={project.githubLink} target="_blank" variant="outline-primary" size="sm">
                  <FaGithub className="me-1" /> Code source
                </Button>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;