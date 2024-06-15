import {
  StarWarsCharactersAPIResponse,
  StarWarsPlanetsAPIResponse,
  StarWarsStarshipsAPIResponse,
} from "../types";

export const fetchCharacters =
  async (): Promise<StarWarsCharactersAPIResponse> => {
    try {
      const response = await fetch("https://swapi.dev/api/people");
      if (!response.ok) {
        throw new Error("Failed to fetch characters data!");
      }

      return response.json();
    } catch (error) {
      console.log("Error fetching data!", error);
      throw Error;
    }
  };

export const fetchPlanets = async (): Promise<StarWarsPlanetsAPIResponse> => {
  try {
    const response = await fetch("https://swapi.dev/api/planets");
    if (!response.ok) {
      throw new Error("Failed to fetch planets data!");
    }
    return response.json();
  } catch (error) {
    console.log("Failed to fetch data!", error);
    throw Error;
  }
};

export const fetchStarships =
  async (): Promise<StarWarsStarshipsAPIResponse> => {
    try {
      const response = await fetch("https://swapi.dev/api/starships");
      if (!response.ok) {
        throw new Error("Failed to fetch planets data!");
      }
      return response.json();
    } catch (error) {
      console.log("Failed to fetch data!", error);
      throw Error;
    }
  };
