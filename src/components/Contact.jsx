import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-title reveal">
        <span className="subtitle">Get In Touch</span>
        <h2>Let's Work <span className="highlight">Together</span></h2>
      </div>
      <div className="contact-container glass reveal">
        <form action="https://formsubmit.co/hareemrana522@gmail.com" method="POST" className="contact-form">
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="input-group">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
