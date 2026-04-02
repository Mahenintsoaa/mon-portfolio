import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';

const Skills = () => {
  const skillBarsRef = useRef([]);

  useEffect(() => {
    AOS.init();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute('data-width');
          bar.style.width = width;
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });

    skillBarsRef.current.forEach(bar => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="competences" className="skills">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Mes compétences</h2>
        <Row>
          <Col md={6}>
            <div className="skill-item" data-aos="fade-right">
              <div className="skill-name">
                <span>HTML/CSS</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" data-width="90%" ref={el => skillBarsRef.current[0] = el}></div>
              </div>
            </div>
            <div className="skill-item" data-aos="fade-right" data-aos-delay="100">
              <div className="skill-name">
                <span>JavaScript</span>
                <span>65%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" data-width="65%" ref={el => skillBarsRef.current[1] = el}></div>
              </div>
            </div>
            <div className="skill-item" data-aos="fade-right" data-aos-delay="200">
              <div className="skill-name">
                <span>React</span>
                <span>70%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" data-width="70%" ref={el => skillBarsRef.current[2] = el}></div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="skill-item" data-aos="fade-left" data-aos-delay="400">
              <div className="skill-name">
                <span>PHP/MySQL</span>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" data-width="75%" ref={el => skillBarsRef.current[3] = el}></div>
              </div>
            </div>
            <div className="skill-item" data-aos="fade-left" data-aos-delay="500">
              <div className="skill-name">
                <span>Python</span>
                <span>50%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" data-width="50%" ref={el => skillBarsRef.current[4] = el}></div>
              </div>
            </div>
            <div className="skill-item" data-aos="fade-right">
              <div className="skill-name">
                <span>Symfony</span>
                <span>68%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" data-width="68%" ref={el => skillBarsRef.current[5] = el}></div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} data-aos="fade-up">
            <div className="code-snippet">
              <span className="code-keyword">const</span> <span className="code-function">developer</span> = {'{'}
              <br />
              &nbsp;&nbsp;name: <span className="code-string">"RANAIVOARILALAO Mahenintsoa"</span>,<br />
              &nbsp;&nbsp;title: <span className="code-string">"Étudiant en Informatique"</span>,<br />
              &nbsp;&nbsp;skills: [<span className="code-string">"Symfony"</span>, <span className="code-string">"React"</span>, <span className="code-string">"PHP"</span>],<br />
              &nbsp;&nbsp;passion: <span className="code-string">"Créer des applications web innovantes"</span><br />
              {'};'}<br />
              <br />
              <br />
              <span className="code-comment">{'// Toujours en apprentissage'}</span><br />
              <span className="code-keyword">while</span>(coding) {'{'}<br />
              &nbsp;&nbsp;learnNewTech();<br />
              &nbsp;&nbsp;buildProjects();<br />
              {'}'}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;