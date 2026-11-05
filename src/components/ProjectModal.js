import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';

const ProjectModal = ({ show, onHide, project }) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="project-modal">
      <Modal.Header closeButton className="modal-header-custom">
        <div>
          <Modal.Title>{project.title}</Modal.Title>
          <small className="modal-role">{project.role} · {project.year}</small>
        </div>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <img
          src={project.images[0]}
          alt={project.title}
          className="modal-main-image"
        />

        <div className="modal-section">
          <h5>Description</h5>
          <p>{project.description}</p>
        </div>

        <div className="modal-section">
          <h5>Fonctionnalités principales</h5>
          <ul className="modal-features-list">
            {project.features.map((feat, i) => (
              <li key={i}>
                <FaCheckCircle className="feature-check" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h5>Technologies utilisées</h5>
          <div className="modal-tech-grid">
            {project.technologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div className="modal-tech-item" key={i}>
                  <Icon style={{ color: tech.color }} size={28} />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="modal-actions">
          {project.demoLink !== '#' && (
            <Button href={project.demoLink} target="_blank" className="btn-primary-custom">
              <FaExternalLinkAlt /> Voir la démo
            </Button>
          )}
          {project.githubLink !== '#' && (
            <Button href={project.githubLink} target="_blank" className="btn-secondary-custom">
              <FaGithub /> Code source
            </Button>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;