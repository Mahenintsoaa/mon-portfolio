import React, { useContext, useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navigation = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#accueil" onClick={(e) => scrollToSection(e, 'accueil')}>
          <span>&lt;</span>Portfolio<span>/&gt;</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#accueil" 
              onClick={(e) => scrollToSection(e, 'accueil')}
              className={activeLink === 'accueil' ? 'active' : ''}
            >
              Accueil
            </Nav.Link>
            <Nav.Link 
              href="#apropos" 
              onClick={(e) => scrollToSection(e, 'apropos')}
              className={activeLink === 'apropos' ? 'active' : ''}
            >
              À propos
            </Nav.Link>
            <Nav.Link 
              href="#competences" 
              onClick={(e) => scrollToSection(e, 'competences')}
              className={activeLink === 'competences' ? 'active' : ''}
            >
              Compétences
            </Nav.Link>
            <Nav.Link 
              href="#portfolio" 
              onClick={(e) => scrollToSection(e, 'portfolio')}
              className={activeLink === 'portfolio' ? 'active' : ''}
            >
              Projets
            </Nav.Link>
            <Nav.Link 
              href="#formation" 
              onClick={(e) => scrollToSection(e, 'formation')}
              className={activeLink === 'formation' ? 'active' : ''}
            >
              Formation
            </Nav.Link>
            <Nav.Link 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className={activeLink === 'contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <Button variant="link" className="theme-toggle" onClick={toggleTheme} aria-label="Changer le thème">
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;