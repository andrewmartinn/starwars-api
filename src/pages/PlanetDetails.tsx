import { Link, useParams } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { useQuery } from "@tanstack/react-query";
import { fetchPlanetById } from "../api";
import PlanetSvg from "../assets/planet.svg";

const PlanetDetails = () => {
  const { id } = useParams();

  const {
    data: planet,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["planet", id],
    queryFn: (key) => fetchPlanetById(key.queryKey[1]),
  });

  console.log(planet, isLoading, isError);

  return (
    <RootLayout>
      {planet && (
        <div className="flex justify-center items-center">
          <div className="bg-zinc-700 p-8 rounded-md w-[50%]">
            <Link to="/planets" className="flex items-center gap-3">
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
              <p>Back to Planets</p>
            </Link>
            <img src={PlanetSvg} className="mx-auto h-[250px] my-5" alt="" />
            <p className="text-4xl text-yellow-300 text-center">
              {planet.name}
            </p>
            <div className="divide-y-2 divide-gray-500">
              <div className="flex justify-between items-center mt-10 pb-2">
                <p className="text-xl text-gray-300">Climate</p>
                <p className="text-xl text-gray-300">{planet.climate}</p>
              </div>
              <div className="flex justify-between items-center pt-4 pb-2">
                <p className="text-xl text-gray-300">Terrain</p>
                <p className="text-xl text-gray-300">{planet.terrain}</p>
              </div>
              <div className="flex justify-between items-center pt-4 pb-2">
                <p className="text-xl text-gray-300">Population</p>
                <p className="text-xl text-gray-300">{planet.population}</p>
              </div>
              <div className="flex justify-between items-center pt-4 pb-2">
                <p className="text-xl text-gray-300">Orbital Period</p>
                <p className="text-xl text-gray-300">{planet.orbital_period}</p>
              </div>
              <div className="flex justify-between items-center pt-4 pb-2">
                <p className="text-xl text-gray-300">Gravity</p>
                <p className="text-xl text-gray-300">{planet.gravity}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </RootLayout>
  );
};
export default PlanetDetails;
