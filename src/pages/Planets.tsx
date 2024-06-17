import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import PlanetCard from "../components/PlanetCard";
import RootLayout from "../layout/RootLayout";
import { fetchPlanets } from "../api";
import { StarWarsPlanetsAPIResponse } from "../types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Planets = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const {
    data: planets,
    isLoading,
    isError,
  } = useQuery<StarWarsPlanetsAPIResponse>({
    queryKey: ["planets", currentPage],
    queryFn: () => fetchPlanets(currentPage),
  });
  const resultsCount = planets?.count ?? 0;
  return (
    <RootLayout>
      <p className="text-3xl mb-6">Planets</p>
      {isLoading && <Loading />}
      {isError && (
        <div className="min-h-[50vh] flex justify-center items-center">
          <p className="text-2xl md:text-3xl lg:text-3xl">
            Error fetching data!
          </p>
        </div>
      )}
      {planets && (
        <>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {planets &&
              planets.results.map((planet) => (
                <PlanetCard key={planet.name} planet={planet} />
              ))}
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalResultsCount={resultsCount}
          />
        </>
      )}
    </RootLayout>
  );
};
export default Planets;
