import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDownload, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-count'));
          const duration = 1800;
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

    countersRef.current.forEach(c => { if (c) observer.observe(c); });
    return () => observer.disconnect();
  }, []);

  const infoItems = [
    { icon: <FaEnvelope />, label: 'Email', value: 'mahenintsoatrade@gmail.com', href: 'mailto:mahenintsoatrade@gmail.com' },
    { icon: <FaPhone />, label: 'Téléphone', value: '+261 34 70 949 97', href: 'tel:+261347094997' },
    { icon: <FaMapMarkerAlt />, label: 'Localisation', value: 'Antananarivo, Madagascar' },
    { icon: <FaGraduationCap />, label: 'Formation', value: 'Master 2 Informatique (en cours)' },
    { icon: <FaCheckCircle />, label: 'Disponibilité', value: 'Immédiate' },
  ];

  return (
    <section id="apropos" className="section-about">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Découvrez-moi</span>
          <h2 className="section-heading">À propos de moi</h2>
        </div>

        <Row className="align-items-center g-5">
          <Col lg={5} data-aos="fade-right">
            <div className="about-image-wrapper">
              <div className="about-image-ring" />
              <div className="about-image">
                <img src="/photo.jpg" alt="Mahenintsoa" />
              </div>
              <div className="about-experience-badge">
                <span className="exp-number">5+</span>
                <span className="exp-label">Projets réalisés</span>
              </div>
            </div>
          </Col>

          <Col lg={7} data-aos="fade-left">
            <h3 className="about-title">Développeur Full-Stack passionné & créatif</h3>
            <p className="about-description">
              Passionné par l'informatique et les nouvelles technologies, je mets mes compétences
              en développement web et support technique au service des utilisateurs. Actuellement
              en <strong>Master 2 Informatique</strong>, je maîtrise la création d'applications
              web modernes avec Symfony et React, ainsi que la maintenance des systèmes et réseaux.
            </p>
            <p className="about-description">
              Mon objectif : apporter des solutions techniques efficaces, adaptées aux besoins
              des utilisateurs, tout en continuant à apprendre et évoluer.
            </p>

            <div className="info-grid">
              {infoItems.map((item, idx) => (
                <div className="info-item" key={idx}>
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <span className="info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="info-value">{item.value}</a>
                    ) : (
                      <span className="info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a href="/pdf/CV Mahenintsoa.pdf" className="btn-primary-custom mt-4" download>
              <FaDownload /> Télécharger mon CV
            </a>
          </Col>
        </Row>

        <Row className="stats-row" data-aos="fade-up">
          {[
            { count: 5, label: 'Projets réalisés' },
            { count: 15, label: 'Technologies maîtrisées' },
            { count: 4, label: "Années d'études" },
            { count: 2, label: 'Projets en cours' },
          ].map((stat, idx) => (
            <Col xs={6} md={3} key={idx}>
              <div className="stat-card">
                <div
                  className="stat-number"
                  data-count={stat.count}
                  ref={el => countersRef.current[idx] = el}
                >
                  0
                </div>
                <p className="stat-label">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;