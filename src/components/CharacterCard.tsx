import { Character } from "../types";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="px-6 py-5 bg-zinc-700 rounded-md">
      <p className="text-[25px] text-yellow-300">{character.name}</p>
    </div>
  );
};
export default CharacterCard;
