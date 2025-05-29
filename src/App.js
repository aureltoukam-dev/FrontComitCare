import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Register from "./pages/register";
import Connexion from "./pages/connexion";
import Home from "./pages/home";
import  Rappel from "./pages/rappels";
import Chatbot from "./component/chatbot";
import Parametres from "./pages/parametres";
import Footer from "./component/footer";
import Dossier from "./pages/dossier";
import Profil from "./pages/profil";
// Import des autres pages
// ...importe les autres pages...

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/" element={<Home/>} />
        <Route  path="/dossier" element={<Dossier/>} />
        <Route path="/rappels" element={<Rappel/>} />
        <Route path="/parametres" element={<Parametres/>} />
        <Route path='/profil' element={<Profil/>}/>
        {/* Ajoute ici les autres routes */}  
      </Routes>
    
      <Chatbot/>
      <Footer/>
    </>
  );
}

export default App;