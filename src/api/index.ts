import {
    Character, Planet, Starship, StarWarsCharactersAPIResponse, StarWarsPlanetsAPIResponse,
    StarWarsStarshipsAPIResponse
} from "../types";

export const fetchCharacters = async (
  pageNumber: number
): Promise<StarWarsCharactersAPIResponse> => {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?page=${pageNumber}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch characters data!");
    }

    return response.json();
  } catch (error) {
    console.log("Error fetching data!", error);
    throw Error;
  }
};

export const fetchPlanets = async (
  pageNumber: number
): Promise<StarWarsPlanetsAPIResponse> => {
  try {
    const response = await fetch(
      `https://swapi.dev/api/planets/?page=${pageNumber}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch planets data!");
    }
    return response.json();
  } catch (error) {
    console.log("Failed to fetch data!", error);
    throw Error;
  }
};

export const fetchStarships = async (
  pageNumber: number
): Promise<StarWarsStarshipsAPIResponse> => {
  try {
    const response = await fetch(
      `https://swapi.dev/api/starships/?page=${pageNumber}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch planets data!");
    }
    return response.json();
  } catch (error) {
    console.log("Failed to fetch data!", error);
    throw Error;
  }
};

export const fetchPlanetById = async (id: string): Promise<Planet> => {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch planet data!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Failed to fetch data!", error);
    throw Error;
  }
};

export const fetchStarshipById = async (id: string): Promise<Starship> => {
  try {
    const response = await fetch(`https://swapi.dev/api/starships/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch starship data!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data!", error);
    throw Error;
  }
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    if (!response.ok) {
      throw new Error("Failed to get character data!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data!", error);
    throw Error;
  }
};
