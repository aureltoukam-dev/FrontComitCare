import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/register.css";

const Register = () => {
  // const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   age: "",
  //   residence: "",
  //   phone: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Formulaire soumis :", formData);
  //   // Ajoutez ici la logique pour envoyer les données au backend
  // };

  return (
    <div >
      <form className="register-form" >
        <h2>Inscription</h2>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Âge</label>
          <input
            type="number"
            id="age"
            name="age"
            // value={formData.age}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="residence">Résidence</label>
          <input
            type="text"
            id="residence"
            name="residence"
            // value={formData.residence}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            // value={formData.phone}
            // onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">S'inscrire</button>
        <p className="redirect">
          Déjà un compte ?{" "}
          {/* <span onClick={() => navigate("/login")} className="login-link">
            Se connecter
          </span> */}
        </p>
      </form>
    </div>
  );
};

export default Register;