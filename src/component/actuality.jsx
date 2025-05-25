import React from "react";
import "../style/actuality.css";

const Actuality = ({ img, text ,lien}) => {
  return (
    <div className="actuality-container">
      <img
        src={img}
        alt="actualité"
        className="actuality-img"
      />
      <div className="actuality-content">
        <p className="actuality-text">{text}</p>
        <a href= {lien} className="actuality-btn">Voir plus</a>
      </div>
    </div>
  );
};

export default Actuality;