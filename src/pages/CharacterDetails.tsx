import { Link, useParams } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacterById, fetchPlanetById } from "../api";
import CharacterSvg from "../assets/character.svg";

const CharacterDetails = () => {
  const { id } = useParams();
  const {
    data: character,
    isLoading: chacterDataLoading,
    isError: characterDataError,
  } = useQuery({
    queryKey: ["character", id],
    queryFn: (key) => fetchCharacterById(key.queryKey[1]),
  });

  const {
    data: homeworld,
    isLoading: homeworldDataLoading,
    isError: homeworldDataError,
  } = useQuery({
    queryKey: ["homeworld", character?.homeworld.split("/")[5]],
    queryFn: (key) => fetchPlanetById(key.queryKey[1]),
    enabled: !!character?.homeworld,
  });

  return (
    <RootLayout>
      {character && (
        <div className="flex justify-center items-center">
          <div className="bg-zinc-700 p-8 rounded-md w-[50%]">
            <Link to="/characters" className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <p>Back to Characters</p>
            </Link>
            <img src={CharacterSvg} className="mx-auto h-[250px] my-5" alt="" />
            <p className="text-4xl text-yellow-300 text-center">
              {character.name}
            </p>
            <div className="divide-y-2 divide-gray-500">
              <div className="flex justify-between items-center mt-10 pb-2">
                <p className="text-xl text-gray-300">Gender</p>
                <p className="text-xl text-gray-300">{character.gender}</p>
              </div>
              <div className="flex justify-between items-center pt-4 pb-2">
                <p className="text-xl text-gray-300">Birth Year</p>
                <p className="text-xl text-gray-300">{character.birth_year}</p>
              </div>
              <div className="flex justify-between items-center pt-4 pb-2">
                <p className="text-xl text-gray-300">Height</p>
                <p className="text-xl text-gray-300">{character.height}</p>
              </div>
              <div className="flex justify-between items-center pt-4 pb-2">
                <p className="text-xl text-gray-300">Homeworld</p>
                <p className="text-xl text-gray-300">{homeworld?.name}</p>
              </div>
              <div className="flex justify-between items-center pt-4 pb-2">
                <p className="text-xl text-gray-300">Mass</p>
                <p className="text-xl text-gray-300">{character.mass}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </RootLayout>
  );
};
export default CharacterDetails;
