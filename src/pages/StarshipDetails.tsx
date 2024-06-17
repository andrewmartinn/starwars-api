import Loading from "../components/Loading";
import RootLayout from "../layout/RootLayout";
import StarshipSvg from "../assets/starship.svg";
import { fetchStarshipById } from "../api";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const StarshipDetails = () => {
  const { id } = useParams() as { id: string };
  const {
    data: starship,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["starship", id],
    queryFn: () => fetchStarshipById(id),
  });

  if (isLoading) {
    return (
      <RootLayout>
        <Loading />
      </RootLayout>
    );
  }

  if (isError) {
    return (
      <RootLayout>
        <div className="min-h-[50vh] flex justify-center items-center">
          <p className="text-2xl md:text-3xl lg:text-3xl">
            Error fetching data!
          </p>
        </div>
      </RootLayout>
    );
  }
  return (
    <RootLayout>
      {starship && (
        <div className="flex justify-center items-center">
          <div className="bg-zinc-700 p-8 rounded-md w-[50%]">
            <Link to="/starships" className="flex items-center gap-3">
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
              <p>Back to Starships</p>
            </Link>
            <img src={StarshipSvg} className="mx-auto h-[250px] my-5" alt="" />
            <p className="text-4xl text-yellow-300 text-center">
              {starship.name}
            </p>
            <div className="divide-y-2 divide-gray-500">
              <div className="flex justify-between items-center mt-10 pb-2">
                <p className="text-xl text-gray-300">Model</p>
                <p className="text-xl text-gray-300">{starship.model}</p>
              </div>
              <div className="flex justify-between items-center pt-4 pb-2">
                <p className="text-xl text-gray-300">Starship Class</p>
                <p className="text-xl text-gray-300">
                  {starship.starship_class}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4 pb-2">
                <p className="text-xl text-gray-300">Passengers</p>
                <p className="text-xl text-gray-300">{starship.passengers}</p>
              </div>
              <div className="flex justify-between items-center pt-4 pb-2">
                <p className="text-xl text-gray-300">Crew</p>
                <p className="text-xl text-gray-300">{starship.crew}</p>
              </div>
              <div className="flex justify-between items-center pt-4 pb-2">
                <p className="text-xl text-gray-300">Hyperdrive Rating</p>
                <p className="text-xl text-gray-300">
                  {starship.hyperdrive_rating}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </RootLayout>
  );
};
export default StarshipDetails;
