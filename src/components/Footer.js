import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '', // Added a message field
  });

  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormMessage('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormMessage('Please enter a valid email address.');
      return;
    }

    if (!/^\d+$/.test(formData.phone)) {
      setFormMessage('Phone number should contain only digits.');
      return;
    }

    emailjs
      .send(
        'service_4p8trbp', // Replace with your EmailJS Service ID
        'template_749scqd', // Replace with your EmailJS Template ID
        formData, // Send form data
        'rWgXSa0KbpaavWPFC' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setFormMessage('Thank you! Your message has been sent.');
          setFormData({ name: '', email: '', phone: '', message: '' }); // Clear the form
        },
        (error) => {
          console.error('Error:', error.text);
          setFormMessage('Error sending message. Please try again.');
        }
      );
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="footer-title">Let's make something amazing together</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="form-title">
            Start by <span className="highlight">saying hi</span>
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="form-input"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="form-button">
            Send
          </button>
        </form>

        {formMessage && <p className="form-message">{formMessage}</p>}

        <div className="footer-logo">
          <h3 className="font-raleway">
            <span className="logo-primary">Harshil</span>
            <span className="logo-secondary">Patel</span>
          </h3>
        </div>
      </div>

      <div className="footer-right">
        <div className="contact-info">
          <p className="info-label">Information</p>
          <h6 className="info-address">Vadodara, Gujarat, India</h6>
          <h3 className="info-email">hps92544@gmail.com</h3>
          <h3 className="info-phone">+91 6358274310</h3>
        </div>
        <div className="social-icons">
          <a
            href="https://linkedin.com/in/harshil-patel-75730b21b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/HP1120"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:hps92544@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
