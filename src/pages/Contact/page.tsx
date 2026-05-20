import React, { useState } from 'react';
import emailIcon from '../../assets/icon-email.svg';
import clockIcon from '../../assets/icon-clock.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can add your showAlert logic here
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: 'general', message: '' });
  };

  return (
    <div className="page flex-center">
      <div className="section-hero pt-32-pb-16">
        <span className="badge">Contact Us</span>
        <h1>Get in <span className="color-brand-primary">Touch</span></h1>
        <p>Have a question or feedback? We'd love to hear from you.</p>
      </div>

      <div className="form-container" style={{ maxWidth: '540px', width: '100%' }}>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" id="name" placeholder="Jane Smith" required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" id="email" placeholder="you@university.edu" required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <div className="select-container">
              <select 
                id="subject" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              >
                <option value="general">General Inquiry</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" placeholder="Write your message here..." rows={5} required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          <div className="mt-20">
            <button type="submit" className="lg-button w-full flex-center">Send Message</button>
          </div>
        </form>
      </div>

      {/* CONTACT INFO CARDS */}
      <div className="card-container mt-40" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="card card-centered">
          <h3>
            <img src={emailIcon} alt="Email" width="28" height="28" style={{ display: 'block', margin: '0 auto 12px' }} />
            Email
          </h3>
          <p>support@aigpacalc.edu</p>
        </div>
        <div className="card card-centered">
          <h3>
            <img src={clockIcon} alt="Clock" width="28" height="28" style={{ display: 'block', margin: '0 auto 12px' }} />
            Response Time
          </h3>
          <p>Within 24–48 hours on business days.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;