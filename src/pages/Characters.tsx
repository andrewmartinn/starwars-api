import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { fetchCharacters } from "../api";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import RootLayout from "../layout/RootLayout";
import Loading from "../components/Loading";

const Characters = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const {
    data: characters,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["characters", currentPage],
    queryFn: () => fetchCharacters(currentPage),
  });
  const resultsCount = characters?.count ?? 0;
  return (
    <RootLayout>
      <p className="text-3xl mb-6">Characters</p>
      {isLoading && <Loading />}
      {isError && (
        <div className="min-h-[50vh] flex justify-center items-center">
          <p className="text-2xl md:text-3xl lg:text-3xl">
            Error fetching data!
          </p>
        </div>
      )}
      {characters && (
        <>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mb-[8rem] mb-[3rem]">
            {characters?.results.map((character) => (
              <CharacterCard key={character.name} character={character} />
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
export default Characters;
