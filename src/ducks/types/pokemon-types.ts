export enum PokemonActions {
  FETCH = "POKEMON_FETCH",
  SUCCESS = "POKEMON_SUCCESS",
  FAILURE = "POKEMON_FAILURE",
  DELETE = "POKEMON_DELETE",
  SEARCH = "POKEMON_SEARCH",
  FAVOURITE = "POKEMON_FAVOURITE",
  DELETE_FAVOURITE = "DELETE_POKEMON_FAVOURITE"
}

export interface PokemonTypeItem {
  name: string;
  url: string;
}

export interface PokemonTypes {
  slot: number;
  type: PokemonTypeItem;
}

export interface PokemonResponse {
  id: number;
  name: string;
  types: [PokemonTypes];
}

export interface PokemonInterface extends PokemonResponse {
  favourited?: boolean;
  comments: number[];
}

export interface PokemonSearch {
  type: PokemonActions.SEARCH;
  data: string;
}

export interface PokemonFetch {
  type: PokemonActions.FETCH;
}
export interface PokemonSuccess {
  type: PokemonActions.SUCCESS;
  data: PokemonInterface;
}
export interface PokemonFailure {
  type: PokemonActions.FAILURE;
}
export interface PokemonDelete {
  type: PokemonActions.DELETE;
  data: number;
}

export interface PokemonDeleteFavourite {
  type: PokemonActions.DELETE_FAVOURITE;
  data: number;
}

export interface PokemonFavourite {
  type: PokemonActions.FAVOURITE;
  data: string;
}

export type PokemonActionList =
  | PokemonFetch
  | PokemonSuccess
  | PokemonFailure
  | PokemonDelete
  | PokemonSearch
  | PokemonFavourite
  | PokemonDeleteFavourite;

export interface PokemonState {
  byId: {
    [key: string]: PokemonInterface;
  };
  allIds: number[];
  searchId: number | null;
}

export interface PokemonReducerState {
  pokemon: PokemonState;
}
