import React from "react";
import "../style/footer.css";

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Commitcare. Tous droits réservés.</p>
  </footer>
);

export default Footer;