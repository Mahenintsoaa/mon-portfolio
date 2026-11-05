import React, { useContext, useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('accueil');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
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
    setExpanded(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const links = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'competences', label: 'Compétences' },
    { id: 'portfolio', label: 'Projets' },
    { id: 'formation', label: 'Formation' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand
          href="#accueil"
          onClick={(e) => scrollToSection(e, 'accueil')}
          className="brand-logo"
        >
          <span className="brand-bracket">&lt;</span>
          <span className="brand-text">Mahenintsoa</span>
          <span className="brand-bracket">/&gt;</span>
        </Navbar.Brand>
        <div className="d-flex align-items-center gap-2 order-lg-last">
          <Button
            variant="link"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Changer le thème"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>
          <Navbar.Toggle aria-controls="navbarNav" className="custom-toggler">
            {expanded ? <FiX /> : <FiMenu />}
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto nav-links">
            {links.map(link => (
              <Nav.Link
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`nav-item-link ${activeLink === link.id ? 'active' : ''}`}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;