import React from "react";
import { Home, User, Settings, Info, LogOut,Bell } from "lucide-react"; // Import des icônes Lucide
import "../style/navbar.css"; // Assurez-vous de créer ce fichier pour le style

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Home className="icon" />
          <span>Accueil</span>
        </li>
        <li className="navbar-item">
          <User className="icon" />
          <span>Dossier</span>
        </li>
        <li className="navbar-item">
          <Settings className="icon" />
          <span>Rappels</span>
        </li>
        <li className="navbar-item">
          <Info className="icon" />
          <span>profil</span>
        </li>
        <li className="navbar-item">
          <LogOut className="icon" />
          <span>Déconnexion</span>
        </li>
      </ul>
        <div className="navbar-notification"   >
        <Bell className="icon" />
      </div>
    </div>
  );
};

export default Navbar;