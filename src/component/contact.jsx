import React from "react";
import "../style/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Nous contacter</h2>
        <p>
          Une question, une suggestion ou besoin d’aide ?<br />
          N’hésitez pas à nous écrire via ce formulaire, nous vous répondrons rapidement.
        </p>
      </div>
      <div className="contact-right">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <button type="submit" className="contact-btn">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;