import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import useTypingEffect from '../hooks/useTypingEffect';

const Hero = () => {
  const typingText = useTypingEffect(
    ['Développeur Full-Stack Junior', 'Étudiant en Master 2 Informatique', 'Passionné de UI/UX Design'],
    80, 40, 1800
  );

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="hero-section">
      <div className="hero-bg-grid" />
      <div className="hero-gradient-blob blob-1" />
      <div className="hero-gradient-blob blob-2" />

      <Container className="hero-container">
        <Row className="align-items-center">
          <Col lg={7} className="hero-text" data-aos="fade-right">
            <div className="hero-badge">
              <span className="status-dot" />
              Disponible immédiatement
            </div>
            <h1 className="hero-title">
              Bonjour, je suis <br />
              <span className="hero-name">RANAIVOARILALAO Mahenintsoa</span>
            </h1>
            <div className="hero-typing">
              <span className="typing-prefix">{'>'}_ </span>
              <span className="typing-text">{typingText}</span>
              <span className="typing-cursor">|</span>
            </div>
            <p className="hero-description">
              Je conçois et développe des applications web modernes, performantes et centrées
              sur l'utilisateur. Spécialisé en <strong>Symfony</strong>, <strong>React</strong> et
              <strong> PHP/MySQL</strong>, avec une solide expérience en support IT.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary-custom" onClick={() => scrollTo('portfolio')}>
                Voir mes projets
              </button>
              <button className="btn-secondary-custom" onClick={() => scrollTo('contact')}>
                Me contacter
              </button>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/Mahenintsoaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mahenintsoa-ranaivoarilalao-603841389/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:mahenintsoatrade@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </Col>

          <Col lg={5} className="hero-visual" data-aos="fade-left">
            <div className="code-card">
              <div className="code-card-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="code-filename">developer.js</span>
              </div>
              <pre className="code-card-body">
                <code>
{`const `}<span className="c-kw">developer</span>{` = {
  `}<span className="c-kw">name</span>{`: `}<span className="c-str">'Mahenintsoa'</span>{`,
  `}<span className="c-kw">role</span>{`: `}<span className="c-str">'Full-Stack Dev'</span>{`,
  `}<span className="c-kw">stack</span>{`: [`}<span className="c-str">'Symfony'</span>{`, `}<span className="c-str">'React'</span>{`],
  `}<span className="c-kw">location</span>{`: `}<span className="c-str">'Antananarivo'</span>{`,
  `}<span className="c-kw">passion</span>{`: `}<span className="c-str">'Clean Code'</span>{`,
  `}<span className="c-kw">available</span>{`: `}<span className="c-bool">true</span>{`
};`}
                </code>
              </pre>
            </div>
            <div className="scroll-indicator" onClick={() => scrollTo('apropos')}>
              <FaArrowDown />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;