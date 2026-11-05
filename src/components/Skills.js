import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { skillCategories, technologies } from '../data/skillsData';

const Skills = () => {
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute('data-width');
          setTimeout(() => { bar.style.width = width; }, 100);
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });

    barsRef.current.forEach(bar => { if (bar) observer.observe(bar); });
    return () => observer.disconnect();
  }, []);

  let barIndex = 0;

  return (
    <section id="competences" className="section-skills">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Ce que je maîtrise</span>
          <h2 className="section-heading">Mes compétences</h2>
        </div>

        <Row className="g-4">
          {skillCategories.map((category, catIdx) => (
            <Col lg={6} key={catIdx} data-aos="fade-up" data-aos-delay={catIdx * 100}>
              <div className="skill-category-card">
                <div className="skill-category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-list">
                  {category.skills.map((skill, idx) => {
                    const IconComponent = skill.icon;
                    const currentIndex = barIndex++;
                    return (
                      <div className="skill-row" key={idx}>
                        <div className="skill-info">
                          <div className="skill-name-icon">
                            <IconComponent style={{ color: skill.color }} size={20} />
                            <span>{skill.name}</span>
                          </div>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-progress">
                          <div
                            className="skill-progress-bar"
                            data-width={`${skill.level}%`}
                            ref={el => barsRef.current[currentIndex] = el}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="tech-marquee-wrapper" data-aos="fade-up">
          <h3 className="tech-marquee-title">Technologies avec lesquelles je travaille</h3>
          <div className="tech-marquee">
            <div className="tech-marquee-track">
              {[...technologies, ...technologies].map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div className="tech-badge" key={idx}>
                    <Icon style={{ color: tech.color }} size={24} />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;