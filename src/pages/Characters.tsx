import { fetchCharacters } from "../api";
import CharacterCard from "../components/CharacterCard";
import RootLayout from "../layout/RootLayout";
import { useQuery } from "@tanstack/react-query";

const Characters = () => {
  const {
    data: characters,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

  console.log(characters, isLoading, isError);

  return (
    <RootLayout>
      <p className="text-3xl mb-6">Characters</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {characters?.results.map((character) => (
          <CharacterCard key={character.name} character={character} />
        ))}
      </div>
    </RootLayout>
  );
};
export default Characters;
