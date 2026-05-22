import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });

    const counters = countersRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-count'));
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, 16);
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="apropos" className="about">
      <Container>
        <h2 className="section-title" data-aos="fade-up">À propos de moi</h2>
        <Row className="align-items-center">
          <Col md={4} data-aos="fade-right">
            <div className="text-center mb-4">
              <div className="profile-img-container">
                <div className="profile-img">
                  <div className="profile-img-content">
                    <img 
                      src="/photo.jpg" 
                      alt="Mahenintsoa" 
                      style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={8} data-aos="fade-left">
          
            <h3>Bonjour, je suis RANAIVOARILALAO Mahenintsoa</h3>
            <p>
              Je suis un étudiant en informatique passionné par le développement web et les nouvelles technologies.
              Actuellement en Master 1 Informatique (en cours), je me spécialise dans les technologies front-end et back-end pour créer des
              applications web modernes et performantes.
            </p>
            <div className="mt-4">
              <Row>
                <Col sm={6}>
                  <p><strong>Nom:</strong> RANAIVOARILALAO Mahenintsoa</p>
                  <p><strong>Téléphone:</strong> +261 34 70 949 97 / +261 32 99 516 57</p>
                  <p><strong>Ville:</strong> Antananarivo</p>
                </Col>
                <Col sm={6}>
                  <p><strong>Email:</strong> mahenintsoatrade@email.com</p>
                  <p><strong>Formation:</strong> Master 1 Informatique (en cours)</p>
                  <p><strong>Disponibilité:</strong> Immédiate</p>
                </Col>
              </Row>
            </div>
            <a href="/pdf/CV Mahenintsoa.pdf" className="btn btn-primary mt-3" download>
              Télécharger mon CV
            </a>
          </Col>
        </Row>
        <Row className="mt-5" data-aos="fade-up">
          <Col md={3} xs={6}>
            <div className="counter-item">
              <div className="counter" data-count="5" ref={el => countersRef.current[0] = el}>0</div>
              <p>Projets réalisés</p>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="counter-item">
              <div className="counter" data-count="8" ref={el => countersRef.current[1] = el}>0</div>
              <p>Technologies maîtrisées</p>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="counter-item">
              <div className="counter" data-count="4" ref={el => countersRef.current[2] = el}>0</div>
              <p>Années d'études</p>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="counter-item">
              <div className="counter" data-count="2" ref={el => countersRef.current[3] = el}>0</div>
              <p>Projets en cours</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;