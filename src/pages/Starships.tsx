import { fetchStarships } from "../api";
import StarshipCard from "../components/StarshipCard";
import RootLayout from "../layout/RootLayout";
import { useQuery } from "@tanstack/react-query";

const Starships = () => {
  const {
    data: starships,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["starships"],
    queryFn: fetchStarships,
  });

  console.log(starships, isLoading, isError);
  return (
    <RootLayout>
      <p className="text-3xl mb-6">Starships</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {starships?.results.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </RootLayout>
  );
};
export default Starships;
