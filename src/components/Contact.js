import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.subject.trim()) newErrors.subject = 'Le sujet est requis';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setSending(true);
    const serviceID = 'service_27fjege';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'SIiS7U-A08crb8rZv';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        alert('Message envoyé avec succès ! Je vous répondrai dès que possible.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      })
      .catch((error) => {
        console.error(error);
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
      })
      .finally(() => setSending(false));
  };

  const contactInfos = [
    { icon: <FaEnvelope />, label: 'Email', value: 'mahenintsoatrade@gmail.com', href: 'mailto:mahenintsoatrade@gmail.com' },
    { icon: <FaPhone />, label: 'Téléphone', value: '+261 34 70 949 97', href: 'tel:+261347094997' },
    { icon: <FaMapMarkerAlt />, label: 'Localisation', value: 'Antananarivo, Madagascar' },
  ];

  return (
    <section id="contact" className="section-contact">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Restons en contact</span>
          <h2 className="section-heading">Travaillons ensemble</h2>
          <p className="section-description">
            Une question, un projet ou une opportunité ? N'hésitez pas à me contacter.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          <Col lg={5} data-aos="fade-right">
            <div className="contact-info-panel">
              <h3>Discutons de votre projet</h3>
              <p className="contact-info-text">
                Je suis disponible pour des missions freelance, des collaborations ou
                tout simplement pour échanger autour du développement web.
              </p>

              <div className="contact-info-list">
                {contactInfos.map((info, idx) => (
                  <div className="contact-info-item" key={idx}>
                    <div className="contact-info-icon">{info.icon}</div>
                    <div>
                      <span className="contact-info-label">{info.label}</span>
                      {info.href ? (
                        <a href={info.href} className="contact-info-value">{info.value}</a>
                      ) : (
                        <span className="contact-info-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-socials">
                <a href="https://github.com/Mahenintsoaa" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/mahenintsoa-ranaivoarilalao-603841389/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>

          <Col lg={7} data-aos="fade-left">
            <div className="contact-form-card">
              <Form ref={form} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Votre nom</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder=""
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                        className="custom-input"
                      />
                      <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Votre email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder=""
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        className="custom-input"
                      />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Sujet</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={handleChange}
                    isInvalid={!!errors.subject}
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Décrivez votre projet ou votre demande..."
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" className="btn-primary-custom w-100" disabled={sending}>
                  {sending ? 'Envoi en cours...' : <><FaPaperPlane /> Envoyer le message</>}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;