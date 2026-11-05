import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGraduationCap, FaCertificate, FaSchool } from 'react-icons/fa';

const Education = () => {
  const educationItems = [
    {
      type: 'diploma',
      icon: <FaGraduationCap />,
      title: 'Master 2 en Informatique',
      subtitle: 'IS IESI',
      period: '2026 - Aujourd\'hui',
      status: 'En cours',
      description: 'Approfondissement en développement logiciel, bases de données, systèmes d\'information et programmation avancée. Cours le samedi.',
    },
    {
      type: 'certification',
      icon: <FaCertificate />,
      title: 'Attestation - Automatisation du Traitement des Données',
      subtitle: 'Orange Digital Center Madagascar',
      period: 'Août 2026',
      status: 'Certification',
      description: 'Analyse de données avec Python et développement des compétences essentielles pour exploiter efficacement des jeux de données.',
    },
    {
      type: 'diploma',
      icon: <FaGraduationCap />,
      title: 'Master 1 en Informatique',
      subtitle: 'IS IESI',
      period: '2025 - 2026',
      status: 'Obtenu',
      description: 'Approfondissement en développement logiciel, bases de données, systèmes d\'information et programmation avancée.',
    },
    {
      type: 'diploma',
      icon: <FaGraduationCap />,
      title: 'Licence en Informatique',
      subtitle: 'Oniversity FJKM Ravelojaona, Ampandrana',
      period: '2022 - 2025',
      status: 'Obtenu',
      description: 'Formation en développement web, programmation, bases de données, systèmes et support IT.',
    },
    {
      type: 'diploma',
      icon: <FaSchool />,
      title: 'Baccalauréat série OSE',
      subtitle: 'Lycée Ambohimanambola, Antananarivo',
      period: '2021 - 2022',
      status: 'Obtenu',
      description: 'Option Série OSE (Sciences Sociales).',
    },
    {
      type: 'certification',
      icon: <FaCertificate />,
      title: 'Certification Microsoft 365',
      subtitle: 'Groupe FAMENO Madagascar',
      period: '2021',
      status: 'Certification',
      description: 'Formation complète sur Word, Excel et PowerPoint (Microsoft 365).',
    },
  ];

  const experiences = [
    {
      title: 'Stage - Conception & Développement Web',
      company: 'Ministère de la Population et des Solidarités',
      period: 'Mars 2025 – Juillet 2025',
      description: 'Conception et développement d\'une application web de gestion des infrastructures avec Symfony 7 et MySQL.',
      results: 'Centralisation et suivi efficace du parc d\'infrastructures du ministère.',
    },
  ];

  return (
    <section id="formation" className="section-education">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Mon parcours</span>
          <h2 className="section-heading">Formation & Expériences</h2>
        </div>

        <div className="education-grid">
          {educationItems.map((item, idx) => (
            <div
              className={`edu-card ${item.type}`}
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 60}
            >
              <div className="edu-card-top">
                <div className="edu-icon">{item.icon}</div>
                <span className={`edu-status ${item.status === 'En cours' ? 'in-progress' : ''}`}>
                  {item.status}
                </span>
              </div>
              <h4 className="edu-title">{item.title}</h4>
              <p className="edu-subtitle">{item.subtitle}</p>
              <p className="edu-period">{item.period}</p>
              <p className="edu-description">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="section-header mt-5" data-aos="fade-up">
          <h2 className="section-heading">Expériences professionnelles</h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div className="exp-card" key={idx} data-aos="fade-up">
              <div className="exp-timeline-dot" />
              <div className="exp-content">
                <span className="exp-period">{exp.period}</span>
                <h4>{exp.title}</h4>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-description">{exp.description}</p>
                <p className="exp-result">
                  <strong>Résultat :</strong> {exp.results}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;