import React from 'react';
import { Container } from 'react-bootstrap';
import useTypingEffect from '../hooks/useTypingEffect';

const Hero = () => {
  const typingText = useTypingEffect(
    ["Développeur Front-End", "Étudiant en Informatique", "Passionné de React", "Amateur de UI/UX Design"],
    100, 50, 2000
  );

  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="hero">
      <div className="floating-elements"></div>
      <Container className="hero-content">
        <h1>
          Je suis <span className="typewriter">RANAIVOARILALAO Mahenintsoa</span>
        </h1>
        <div className="typing-container">
          <div className="typing-text">{typingText}</div>
        </div>
        <p>Étudiant en informatique & Développeur Web Full Stack</p>
        <button className="btn btn-primary me-3" onClick={() => scrollTo('portfolio')}>
          Voir mes projets
        </button>
        <button className="btn btn-outline-primary" onClick={() => scrollTo('contact')}>
          Me contacter
        </button>
      </Container>
    </section>
  );
};

export default Hero;