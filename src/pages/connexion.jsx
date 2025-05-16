import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/connexion.css"; // Assurez-vous de créer ce fichier pour le style
import { Mail, Lock } from "lucide-react"; 

const Connexion = () => {
  // const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Connexion soumise :", formData);
  //   // Ajoutez ici la logique pour vérifier les identifiants
  // };

  return (
    <div className="  connexion-page">
      <form className="connexion-form">
        <h1  >Connexion</h1>  
        <div className="form-group">
            <Mail className="icon" />
          <input type="email" id="email" name="email" placeholder="email" required  />
        </div>


        <div className="form-group">
          <Lock className="icon" />
          <input type="password" id="password" name="password" placeholder="password" required />
        </div>


        <div className="form-group">
          <button type="submit">Se connecter</button>
        </div>

        <div className="form-group">
          <p>Pas encore de compte ? <a href="/register">Inscrivez-vous</a></p>
        </div>
        <div className="form-group">
          <p>Mot de passe oublié ? <a href="/reset-password">Réinitialiser</a></p>
        </div>
        </form>
    </div>
  );
};

export default Connexion;