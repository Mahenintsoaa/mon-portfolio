import React from 'react';
import { Container } from 'react-bootstrap';

const Education = () => {
  return (
    <section id="formation" className="education">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Formation & Certification</h2>
        <div className="timeline">

        <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Master 2 en Informatique (en cours - cours le samedi uniquement) </h4>
              <p className="text-muted">IS IESI | 2025 - 2026</p>
              <p>Approfondissement en développement logiciel, bases de données, systèmes d'information et programmation avancée.</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Attestation de Fin de Formation </h4>
              <p className="text-muted">Orange Digital Center Madagascar | 24 au 28 Aout 2026</p>
              <p>Automatisation des traitements des données. Cette formation permet de l'analyse de données avec Python et de développer les compétences essentielles pour exploiter efficacement des jeux de données.  </p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Master 1 en Informatique</h4>
              <p className="text-muted">IS IESI | 2025 - 2026</p>
              <p>Approfondissement en développement logiciel, bases de données, systèmes d'information et programmation avancée.</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Licence Informatique</h4>
              <p className="text-muted">Oniversity FJKM Ravelojaona Ampandrana | 2022 - 2025</p>
              <p>Formation en développement web, programmation, bases de données, systèmes et support IT.</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Baccalauréat série OSE</h4>
              <p className="text-muted">Lycée Ambohimanambola, Antananarivo | 2021-2022</p>
              <p>Option Série OSE.</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Certification</h4>
              <p className="text-muted">Groupe FAMENO Madagascar | 2021</p>
              <p>Formation de traitement en Word, Excel, PowerPoint.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Education;