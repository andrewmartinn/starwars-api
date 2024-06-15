import { Route, Routes } from "react-router-dom";
import Planets from "./pages/Planets";
import Characters from "./pages/Characters";
import Starships from "./pages/Starships";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Planets />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/starships" element={<Starships />} />
    </Routes>
  );
}

export default App;
