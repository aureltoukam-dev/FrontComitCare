import React from "react";
import { Home, User, Settings, Info, LogOut,Bell } from "lucide-react"; // Import des icônes Lucide
import "../style/navbar.css"; // Assurez-vous de créer ce fichier pour le style
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" >
          <Home className="icon" />
          <span>Accueil</span>
          </Link>

        </li>


        <li className="navbar-item">
          <Link to="/dossier" className="navbar-link">  
          <User className="icon" />
          <span>Dossier</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/rappels" className="navbar-link">
          <Settings className="icon" />
          <span>Rappels</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/profil" className="navbar-link">
          <LogOut className="icon" />
          <span>Profil</span>
          </Link>
        </li>
      </ul>
        <div className="navbar-notification"   >
        <Bell className="icon" />
      </div>
    </div>
  );
};

export default Navbar;