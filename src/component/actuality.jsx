import React from "react";
import "../style/actuality.css";

const Actuality = ({ img, text }) => {
  return (
    <div className="actuality-container">
      <img
        src={img}
        alt="actualité"
        className="actuality-img"
      />
      <div className="actuality-content">
        <p className="actuality-text">{text}</p>
        <button className="actuality-btn">Voir plus</button>
      </div>
    </div>
  );
};

export default Actuality;