import React, { useState } from "react";
import "../style/rappels.css";
import Notification from "../component/notification";
import  Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import  Footer from "../component/footer";
// Données de notifications pour chaque catégorie

const notificationsData = {
  rdv: [
    {
      titre: "Rendez-vous",
date: "2025-06-28T15:00",
      description: "Rendez-vous chez le dentiste.",
      urgence: "orange",
    },
    {
      titre: "Rendez-vous",
date: "2025-05-28T15:00",
      description: "Consultation médicale.",
      urgence: "orange",
    },
  ],
  medicaments: [
    {
      titre: "Médicament",
date: "2025-06-2T15:00",
      description: "Prendre le médicament A.",
      urgence: "rouge",
    },
    {
      titre: "Médicament",
date: "2025-02-28T15:00",
      description: "Prendre le médicament B.",
      urgence: "rouge",
    },
  ],
  parametres: [
    {
      titre: "Paramètres",
date: "2025-01-28T15:00",
      description: "Votre tension est normale.",
      urgence: "vert",
    },
    {
      titre: "Paramètres",
date: "2025-10-28T15:00",
      description: "Pensez à enregistrer votre glycémie aujourd'hui.",
      urgence: "vert",
    },
  ],
};



  
const Rappels = () => {
  const [selected, setSelected] = useState("rdv");
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Filtrer les notifications pour la date sélectionnée
  const notificationsForDate = notificationsData[selected].filter(notif =>
    notif.date && new Date(notif.date).toDateString() === selectedDate.toDateString()
  );

  return (
    <section className="rappels-container">
      <h2 className="rappels-title">Mes rappels</h2>
      <div className="rappels-buttons">
        <button
          className={selected === "rdv" ? "active" : ""}
          onClick={() => setSelected("rdv")}
        >
          JOURNALIER
        </button>
        <button
          className={selected === "medicaments" ? "active" : ""}
          onClick={() => setSelected("medicaments")}
        >
          Médicaments
        </button>
        <button
          className={selected === "parametres" ? "active" : ""}
          onClick={() => setSelected("parametres")}
        >
          Paramètres
        </button>
      </div>
      {/* ...boutons... */}
      <Calendar 
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date, view }) => {
          // Affiche un point si une notification existe ce jour-là
          const hasNotif = notificationsData[selected].some(
            notif => notif.date && new Date(notif.date).toDateString() === date.toDateString()
          );
          return hasNotif ? <div style={{color:'#007bff',fontSize:18}}>•</div> : null;
        }}
      />
      <div className="rappels-notifications">
        <h3>
          Notifications du {selectedDate.toLocaleDateString()} ({selected})
        </h3>
        {notificationsForDate.length === 0 && <p>Aucune notification ce jour.</p>}
        {notificationsForDate.map((notif, idx) => (
          <Notification
            key={idx}
            titre={notif.titre}
            date={notif.date}
            description={notif.description}
            urgence={notif.urgence}
          />
        ))}
      </div>
      <Footer/>
    </section>
  );
}
export default Rappels;