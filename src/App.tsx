import { Route, Routes } from "react-router-dom";
import Planets from "./pages/Planets";
import Characters from "./pages/Characters";
import Starships from "./pages/Starships";
import PlanetDetails from "./pages/PlanetDetails";
import StarshipDetails from "./pages/StarshipDetails";
import CharacterDetails from "./pages/CharacterDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Planets />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/starships" element={<Starships />} />
      <Route path="/planets/:id" element={<PlanetDetails />} />
      <Route path="/starships/:id" element={<StarshipDetails />} />
      <Route path="/characters/:id" element={<CharacterDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
