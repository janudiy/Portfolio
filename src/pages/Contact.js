import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Let's Connect</h2>
      <p>Feel free to drop a message! I’ll try to respond as soon as possible.</p>

      <h3>
        <a href="mailto:janudiyatagampitiya@gmail.com" className="email-link"> janudiyatagampitiya@gmail.com</a>
      </h3>

      <form>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Write your message here..." rows="6" required></textarea>

        <button type="submit" disabled>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
