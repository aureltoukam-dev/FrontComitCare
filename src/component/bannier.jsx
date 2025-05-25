import React from "react";
import "../style/bannier.css";

const Bannier = () => {
  return (
    <div className="bannier-container">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        alt="Bannière"
        className="bannier-img"
      />
      <div className="bannier-text">
        <h2>Bienvenue sur Commitcare</h2>
        <p>La plateforme dédiée au bien-être et à la santé en entreprise.</p>
      </div>
    </div>
  );
};

export default Bannier;