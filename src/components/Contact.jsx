import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus(''), 5000);
    })
    .catch(error => {
      setStatus('error');
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-title reveal">
        <span className="subtitle">Get In Touch</span>
        <h2>Let's Work <span className="highlight">Together</span></h2>
      </div>
      <div className="contact-container glass reveal">
        <form action="https://formsubmit.co/hareemrana522@gmail.com" method="POST" className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="input-group">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" rows="5" required></textarea>
          
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
          </button>
          
          {status === 'success' && <p style={{ color: '#27c93f', marginTop: '1rem', textAlign: 'center' }}>Thanks! Your message has been sent.</p>}
          {status === 'error' && <p style={{ color: '#ff5f56', marginTop: '1rem', textAlign: 'center' }}>Oops! Something went wrong.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
