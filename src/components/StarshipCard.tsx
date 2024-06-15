import { Link } from "react-router-dom";
import { Starship } from "../types";

interface StarshipCardProps {
  starship: Starship;
}

const StarshipCard: React.FC<StarshipCardProps> = ({ starship }) => {
  return (
    <div className="px-6 py-3 bg-zinc-700 rounded-md">
      <p className="text-[25px] text-yellow-300">{starship.name}</p>
      <p className="mb-1">{starship.model}</p>
      <p>Crew - {starship.crew}</p>
      <div className="flex justify-end items-center gap-1">
        <Link to="/">Read More</Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 text-yellow-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};
export default StarshipCard;
