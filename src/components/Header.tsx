import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto py-6 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-yellow-300 ">
          Starwars API
        </Link>
        <div className="flex items-center gap-10">
          <Link to="/planets">Planets</Link>
          <Link to="/starships">Starships</Link>
          <Link to="/characters">Characters</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
