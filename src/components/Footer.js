import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <Container className="text-center">
        <div className="social-links">
          <a href="https://github.com/Mahenintsoaa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/mahenintsoa-ranaivoarilalao-603841389/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.facebook.com/ma.henintsoa.3" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="mailto:mahenintsoatrade@email.com"><FaEnvelope /></a>
        </div>
        <p className="code-font">&copy; 2026 RANAIVOARILALAO Mahenintsoa. Tous droits réservés.</p>
        <p className="code-font">Développé avec ❤️ et beaucoup de ☕</p>
      </Container>
    </footer>
  );
};

export default Footer;