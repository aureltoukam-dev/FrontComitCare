import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../style/connexion.css";
import { Mail, Lock } from "lucide-react";

const Connexion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu ajoutes la logique de vérification des identifiants
    // Si connexion OK :
    navigate("/"); // ou "/" selon ta route home
  };

  return (
    <section>
      <div className="connexion-bg">
        <form className="connexion-form" onSubmit={handleSubmit}>
          <h1>Connexion</h1>
          <div className="form-group">
            <Mail className="icon" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <Lock className="icon" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Se connecter</button>
          </div>
          <div className="form-group">
            <p>
              Pas encore de compte ? <Link to="/register">Inscrivez-vous</Link>
            </p>
          </div>
          <div className="form-group">
            <p>
              Mot de passe oublié ? <Link to="/reset-password">Réinitialiser</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Connexion;