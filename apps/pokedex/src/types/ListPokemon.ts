export interface PokemonList {
  count: number;
  next: string;
  previous: null;
  results: OnePokemonType[];
}

export interface OnePokemonType {
  name: string;
  url: string;
}
