import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
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
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSending(true);

    // Remplacez par vos identifiants EmailJS
    const serviceID = 'service_27fjege';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'SIiS7U-A08crb8rZv';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        alert('Message envoyé avec succès ! Je vous répondrai dès que possible.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      })
      .catch((error) => {
        alert('Erreur lors de l\'envoi. Veuillez réessayer plus tard.');
        console.error(error);
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="contact">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Contactez-moi</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="contact-form animated" id="contactFormElement">
              <Form ref={form} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} data-aos="fade-right">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid" className="d-block">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6} data-aos="fade-left">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid" className="d-block">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <div data-aos="fade-up" data-aos-delay="100">
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={handleChange}
                    isInvalid={!!errors.subject}
                  />
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors.subject}
                  </Form.Control.Feedback>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors.message}
                  </Form.Control.Feedback>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <Button type="submit" variant="primary" disabled={sending}>
                    {sending ? 'Envoi...' : 'Envoyer le message'}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;