import React from "react";
import "../style/notification.css";

const urgencyColors = {
  vert: "#28a745",
  orange: "#ff9800",
  rouge: "#dc3545",
};

const Notification = ({ titre, date, description, urgence }) => {
  return (
    <a
    href=""
      className="notification-container"
      style={{ borderLeft: `8px solid ${urgencyColors[urgence] || "#28a745"}` }}
    >
      <div className="notification-header">
        <span className="notification-title">{titre}</span>
        <span className="notification-date">{date}</span>
      </div>
      <div className="notification-description">{description}</div>
      <span
        className="notification-urgency"
        style={{ color: urgencyColors[urgence] || "#28a745" }}
      >
        {urgence.charAt(0).toUpperCase() + urgence.slice(1)}
      </span>
    </a>
  );
};

export default Notification;