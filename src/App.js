import Connexion from "./pages/connexion";
import './App.css';
import Register from "./pages/register";
import Home from "./pages/home";
import Rappels from "./pages/rappels";

const App = () => {
  return (
    <div>
      {/* <Connexion /> */}
      <Register />
      {/* <Rappels /> */}
      {/* Vous pouvez commenter/décommenter les lignes ci-dessus pour afficher la page souhaitée */}
    </div>
  );
};

export default App;