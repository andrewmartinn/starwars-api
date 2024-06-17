import { Route, Routes } from "react-router-dom";

import CharacterDetails from "./pages/CharacterDetails";
import Characters from "./pages/Characters";
import NotFound from "./pages/NotFound";
import PlanetDetails from "./pages/PlanetDetails";
import Planets from "./pages/Planets";
import StarshipDetails from "./pages/StarshipDetails";
import Starships from "./pages/Starships";

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
