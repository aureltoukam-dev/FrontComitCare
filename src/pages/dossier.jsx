import React, { useState } from "react";
import { ChevronRight, UserPlus } from "lucide-react";
import "../style/dossier.css";

const membresInit = [
  { id: 1, nom: "Jean Dupont" },
  { id: 2, nom: "Marie Claire" },
  { id: 3, nom: "Ali Ben" }
];

const sections = [
  {
    titre: "Facteurs socio-economiques",
    items: ["Consultations", "Vaccins"]
  },
  {
    titre: "Environnement physique",
    items: ["Ordonnances", "Analyses", "Imagerie"]
  },
  {
    titre: "Habitudes de sante",
    items: ["Paramètres", "Rappels"]
  },
    {
    titre: "Soins de sante",
    items: ["Paramètres", "Rappels"]
  }

];

const Dossier = () => {
  const [membres, setMembres] = useState(membresInit);

  const ajouterMembre = () => {
    const nom = prompt("Nom du nouveau membre :");
    if (nom) setMembres([...membres, { id: Date.now(), nom }]);
  };

  return (
    <div className="dossier-container">
      {/* Section gauche */}
      <aside className="dossier-sidebar">
        <h3>Dossier</h3>
        <ul>
          {membres.map(m => (
            <li key={m.id} className="membre-item">
              <span>{m.nom}</span>
            </li>
          ))}
        </ul>
        <button className="ajouter-membre-btn" onClick={ajouterMembre}>
          <UserPlus size={18} /> Ajouter un membre
        </button>
      </aside>

      {/* Section droite */}
      <main className="dossier-main">
        {sections.map(section => (
          <div className="dossier-section" key={section.titre}>
            <h4>{section.titre}</h4>
            <div className="dossier-items">
              {section.items.map(item => (
                <div className="dossier-item" key={item} tabIndex={0}>
                  <span>{item}</span>
                  <ChevronRight size={22} />
                </div>
              ))}
            </div>
          </div>
        ))}

        
      </main>
    </div>
  );
};

export default Dossier;