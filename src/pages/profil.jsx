import React, { useState } from "react";
import { User, Mail, Phone, Edit2, Lock, LogOut } from "lucide-react";
import "../style/profil.css";

const initialData = {
  nom: "Dupont",
  prenom: "Jean",
  email: "jean.dupont@email.com",
  phone: "+33 6 12 34 56 78",
  age: 34,
  adresse: "12 rue de la Santé, Paris",
};

const Profil = () => {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(initialData);
  const [passwordMode, setPasswordMode] = useState(false);
  const [password, setPassword] = useState({ old: "", new: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setData(d => ({ ...d, [name]: value }));
  };

  const handlePasswordChange = e => {
    const { name, value } = e.target;
    setPassword(p => ({ ...p, [name]: value }));
  };

  const handleSave = e => {
    e.preventDefault();
    setEdit(false);
    // Appel API pour sauvegarder les données
    alert("Profil mis à jour !");
  };

  const handlePasswordSave = e => {
    e.preventDefault();
    setPasswordMode(false);
    setPassword({ old: "", new: "" });
    // Appel API pour changer le mot de passe
    alert("Mot de passe modifié !");
  };

  const handleLogout = () => {
    // Déconnexion
    alert("Déconnexion !");
  };

  return (
    <div className="profil-container app-container">
      <div className="profil-header">
        <User size={48} className="profil-avatar" />
        <div>
          <h2>{data.prenom} {data.nom}</h2>
          <span className="profil-email"><Mail size={16} /> {data.email}</span>
        </div>
        <button className="profil-edit-btn" onClick={() => setEdit(!edit)}>
          <Edit2 size={18} /> {edit ? "Annuler" : "Modifier"}
        </button>
      </div>

      <form className="profil-form" onSubmit={handleSave}>
        <div className="profil-fields">
          <label>
            Prénom :
            <input
              type="text"
              name="prenom"
              value={data.prenom}
              onChange={handleChange}
              disabled={!edit}
            />
          </label>
          <label>
            Nom :
            <input
              type="text"
              name="nom"
              value={data.nom}
              onChange={handleChange}
              disabled={!edit}
            />
          </label>
          <label>
            Email :
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              disabled={!edit}
            />
          </label>
          <label>
            Téléphone(whatsapp) :
            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              disabled={!edit}
            />
          </label>
          <label>
            Année de naissance :
            <input
              type="number"
              name="age"
              value={data.age}
              onChange={handleChange}
              disabled={!edit}
              min={0}
            />
          </label>
          <label>
            Lieu de residence :
            <input
              type="text"
              name="adresse"
              value={data.adresse}
              onChange={handleChange}
              disabled={!edit}
            />
          </label>
        </div>
        {edit && (
          <button type="submit" className="profil-save-btn">
            Sauvegarder
          </button>
        )}
      </form>

      <div className="profil-actions">
        <button className="profil-action-btn" onClick={() => setPasswordMode(!passwordMode)}>
          <Lock size={18} /> Modifier le mot de passe
        </button>
        <button className="profil-action-btn logout" onClick={handleLogout}>
          <LogOut size={18} /> Déconnexion
        </button>
      </div>

      {passwordMode && (
        <form className="profil-password-form" onSubmit={handlePasswordSave}>
          <label>
            Ancien mot de passe :
            <input
              type="password"
              name="old"
              value={password.old}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <label>
            Nouveau mot de passe :
            <input
              type="password"
              name="new"
              value={password.new}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <button type="submit" className="profil-save-btn">
            Valider
          </button>
        </form>
      )}
    </div>
  );
};

export default Profil;