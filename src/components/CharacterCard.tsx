import { Character } from "../types";
import { Link } from "react-router-dom";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Link
      to={`/characters/${character.url.split("/")[5]}`}
      className="px-6 py-5 bg-zinc-700 rounded-md"
    >
      <p className="text-[25px] text-yellow-300">{character.name}</p>
    </Link>
  );
};
export default CharacterCard;
