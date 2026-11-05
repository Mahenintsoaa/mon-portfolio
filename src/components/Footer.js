import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn, FaFacebook, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <Container>
        <Row className="g-4">
          <Col md={5}>
            <div className="footer-brand">
              <span className="brand-bracket">&lt;</span>
              <span className="brand-text">Mahenintsoa</span>
              <span className="brand-bracket">/&gt;</span>
            </div>
            <p className="footer-description">
              Développeur Full-Stack Junior passionné, spécialisé en Symfony, React et PHP.
              Je crée des applications web modernes et performantes.
            </p>
          </Col>
          <Col md={3}>
            <h5 className="footer-heading">Navigation</h5>
            <ul className="footer-links">
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#apropos">À propos</a></li>
              <li><a href="#competences">Compétences</a></li>
              <li><a href="#portfolio">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="footer-heading">Suivez-moi</h5>
            <div className="footer-socials">
              <a href="https://github.com/Mahenintsoaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mahenintsoa-ranaivoarilalao-603841389/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://www.facebook.com/ma.henintsoa.3" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="mailto:mahenintsoatrade@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
            <p className="footer-contact">
              <FaEnvelope /> mahenintsoatrade@gmail.com
            </p>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>© {year} RANAIVOARILALAO Mahenintsoa. Tous droits réservés.</p>
          <p>Développé avec <FaHeart className="heart-icon" /> et beaucoup de ☕</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;