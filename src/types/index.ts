export interface Planet {
  climate: string;
  diameter: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface Character {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface Starship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: [];
  starship_class: string;
  url: string;
}

export interface StarWarsPlanetsAPIResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Planet[];
}

export interface StarWarsCharactersAPIResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Character[];
}

export interface StarWarsStarshipsAPIResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Starship[];
}
