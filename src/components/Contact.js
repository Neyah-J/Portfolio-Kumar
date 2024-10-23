import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');
    // You can add actual form submission logic here
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
