import React, { useState, useEffect } from "react";
import '../style/home.css';
import Navbar from "../component/navbar";
import Actuality from "../component/actuality";
import { ChevronLeft, ChevronRight } from "lucide-react";

const actualityList = [
  {
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    text: "Découvrez notre nouvelle actualité santé du jour !"
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    text: "Conseils bien-être pour les salariés."
  },
  {
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80",
    text: "Nouvelles offres partenaires CE."
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    text: "Prévention santé en entreprise."
  },
  {
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    text: "Événement bien-être à venir !"
  }
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  // Scroll automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % actualityList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent(current === 0 ? actualityList.length - 1 : current - 1);
  const next = () => setCurrent((current + 1) % actualityList.length);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home">
        <h1 className="home-title">Bienvenue sur Commitcare</h1>
        <div className="home-main-section">
          <div className="home-content">
            <p>
              Nous sommes une plateforme de mise en relation entre les comités d'entreprise et les entreprises de services.
            </p>
            <div className="home-buttons">
              <button className="connexion">Connexion</button>
              <button className="inscription">Inscription</button>
            </div>
          </div>
          <div className="home-image">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Accueil" />
          </div>
        </div>
        <div>
          <h2>Actualité</h2>
        </div>
        <div className="actuality-carousel">
          <button className="carousel-arrow" onClick={prev}>
            <ChevronLeft size={32} />
          </button>
          <Actuality img={actualityList[current].img} text={actualityList[current].text} />
          <button className="carousel-arrow" onClick={next}>
            <ChevronRight size={32} />
          </button>
        </div>
        <div className="">
          <h2>Conseils  sante</h2>
                  <div className="actuality-carousel">
          <button className="carousel-arrow" onClick={prev}>
            <ChevronLeft size={32} />
          </button>
          <Actuality img={actualityList[current].img} text={actualityList[current].text} />
          <button className="carousel-arrow" onClick={next}>
            <ChevronRight size={32} />
          </button>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Home;