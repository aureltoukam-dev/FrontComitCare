import React, { useState } from "react";
import "../style/parametres.css";

const steps = [
  "Informations personnelles",
  "Antécédents médicaux",
  "Habitudes de vie",
  "Résumé"
];

const Parametres = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    sexe: "",
    age: "",
    maladies: [],
    allergies: [],
    fumeur: false,
    alcool: false,
    sport: "",
    notes: ""
  });

  const maladiesOptions = ["Diabète", "Hypertension", "Asthme"];
  const allergiesOptions = ["Pollen", "Arachides", "Lactose"];

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && allergiesOptions.includes(value)) {
      setForm(f => ({
        ...f,
        allergies: checked
          ? [...f.allergies, value]
          : f.allergies.filter(a => a !== value)
      }));
    } else if (type === "checkbox" && maladiesOptions.includes(value)) {
      setForm(f => ({
        ...f,
        maladies: checked
          ? [...f.maladies, value]
          : f.maladies.filter(m => m !== value)
      }));
    } else if (type === "checkbox") {
      setForm(f => ({ ...f, [name]: checked }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  const handleSubmit = e => {
    e.preventDefault();
    alert("Formulaire envoyé !");
    // Ici, tu peux envoyer les données au backend
  };

  return (
    <div className="multi-step-form">
      <div className="steps-bar">
        {steps.map((label, idx) => (
          <div key={label} className={`step ${step === idx ? "active" : ""} ${step > idx ? "done" : ""}`}>
            <span>{idx + 1}</span>
            <p>{label}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {step === 0 && (
          <div className="form-step">
            <label>
              Nom :
              <input type="text" name="nom" value={form.nom} onChange={handleChange} required />
            </label>
            <label>
              Prénom :
              <input type="text" name="prenom" value={form.prenom} onChange={handleChange} required />
            </label>
            <label>
              Sexe :
              <select name="sexe" value={form.sexe} onChange={handleChange} required>
                <option value="">Sélectionner</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Autre">Autre</option>
              </select>
            </label>
            <label>
              Âge :
              <input type="number" name="age" value={form.age} onChange={handleChange} required min="0" />
            </label>
          </div>
        )}
        {step === 1 && (
          <div className="form-step">
            <label>Maladies connues :</label>
            <div className="checkbox-group">
              {maladiesOptions.map(opt => (
                <label key={opt}>
                  <input
                    type="checkbox"
                    name="maladies"
                    value={opt}
                    checked={form.maladies.includes(opt)}
                    onChange={handleChange}
                  />
                  {opt}
                </label>
              ))}
            </div>
            <label>Allergies :</label>
            <div className="checkbox-group">
              {allergiesOptions.map(opt => (
                <label key={opt}>
                  <input
                    type="checkbox"
                    name="allergies"
                    value={opt}
                    checked={form.allergies.includes(opt)}
                    onChange={handleChange}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="form-step">
            <label>
              Fumeur :
              <input
                type="checkbox"
                name="fumeur"
                checked={form.fumeur}
                onChange={handleChange}
              />
            </label>
            <label>
              Consommation d'alcool :
              <input
                type="checkbox"
                name="alcool"
                checked={form.alcool}
                onChange={handleChange}
              />
            </label>
            <label>
              Pratique sportive :
              <select name="sport" value={form.sport} onChange={handleChange}>
                <option value="">Sélectionner</option>
                <option value="Jamais">Jamais</option>
                <option value="Parfois">Parfois</option>
                <option value="Régulièrement">Régulièrement</option>
              </select>
            </label>
            <label>
              Notes complémentaires :
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} />
            </label>
          </div>
        )}
        {step === 3 && (
          <div className="form-step">
            <h3>Résumé</h3>
            <pre>{JSON.stringify(form, null, 2)}</pre>
          </div>
        )}
        <div className="form-nav">
          {step > 0 && (
            <button type="button" onClick={prev} className="btn-secondary">
              Précédent
            </button>
          )}
          {step < steps.length - 1 ? (
            <button type="button" onClick={next} className="btn-primary">
              Suivant
            </button>
          ) : (
            <button type="submit" className="btn-primary">
              Envoyer
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Parametres;