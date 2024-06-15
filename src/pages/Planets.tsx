import RootLayout from "../layout/RootLayout";
import { useQuery } from "@tanstack/react-query";
import { StarWarsPlanetsAPIResponse } from "../types";
import PlanetCard from "../components/PlanetCard";
import { fetchPlanets } from "../api";

const Planets = () => {
  const {
    data: planets,
    isLoading,
    isError,
  } = useQuery<StarWarsPlanetsAPIResponse>({
    queryKey: ["planets"],
    queryFn: fetchPlanets,
  });

  console.log(planets, isLoading, isError);

  return (
    <RootLayout>
      <p className="text-3xl mb-6">Planets</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {planets &&
          planets.results.map((planet) => (
            <PlanetCard key={planet.name} planet={planet} />
          ))}
      </div>
    </RootLayout>
  );
};
export default Planets;
