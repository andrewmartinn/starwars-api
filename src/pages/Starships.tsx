import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { fetchStarships } from "../api";
import Pagination from "../components/Pagination";
import StarshipCard from "../components/StarshipCard";
import RootLayout from "../layout/RootLayout";
import Loading from "../components/Loading";

const Starships = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const {
    data: starships,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["starships", currentPage],
    queryFn: () => fetchStarships(currentPage),
  });
  const resultsCount = starships?.count ?? 0;
  return (
    <RootLayout>
      <p className="text-3xl mb-6">Starships</p>
      {isLoading && <Loading />}
      {isError && (
        <div className="min-h-[50vh] flex justify-center items-center">
          <p className="text-2xl md:text-3xl lg:text-3xl">
            Error fetching data!
          </p>
        </div>
      )}
      {starships && (
        <>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {starships?.results.map((starship) => (
              <StarshipCard key={starship.name} starship={starship} />
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
export default Starships;
