import { createSelector } from "reselect";
import { CommentActions, CommentActionList } from "./types/comment-types";
import { deleteEntity } from "./base";
import {
  PokemonActions,
  PokemonFailure,
  PokemonFavourite,
  PokemonDeleteFavourite,
  PokemonFetch,
  PokemonSearch,
  PokemonSuccess,
  PokemonInterface,
  PokemonResponse,
  PokemonActionList,
  PokemonState,
  PokemonReducerState
} from "./types/pokemon-types";

export const loadingPokemon = (): PokemonFetch => {
  return {
    type: PokemonActions.FETCH
  };
};

export const searchForPokemon = (data: string): PokemonSearch => {
  return {
    type: PokemonActions.SEARCH,
    data
  };
};

export const pokemonResult = (data: PokemonInterface): PokemonSuccess => {
  return {
    type: PokemonActions.SUCCESS,
    data
  };
};

export const pokemonFetchFail = (): PokemonFailure => {
  return {
    type: PokemonActions.FAILURE
  };
};

export const favouritePokemon = (data: string): PokemonFavourite => {
  return {
    type: PokemonActions.FAVOURITE,
    data
  };
};

export const deleteFavouritePokemon = (
  data: number
): PokemonDeleteFavourite => {
  return {
    type: PokemonActions.DELETE_FAVOURITE,
    data
  };
};

const initialState: PokemonState = {
  byId: {},
  allIds: [],
  searchId: null
};

const addFavourite = (id: string, state: PokemonState): PokemonState => {
  return {
    ...state,
    byId: {
      ...state.byId,
      [id]: {
        ...state.byId[id],
        favourited: true
      }
    }
  };
};

const addPokemon = (
  pokemon: PokemonResponse,
  state: PokemonState
): PokemonState => {
  if (state.byId[pokemon.id]) {
    return {
      ...state,
      searchId: pokemon.id
    };
  }
  return {
    byId: {
      ...state.byId,
      [pokemon.id]: {
        ...pokemon,
        favourited: false,
        comments: []
      }
    },
    allIds: [...state.allIds, pokemon.id],
    searchId: pokemon.id
  };
};

const addPokemonComment = (
  pokemonId: number,
  commentId: number,
  state: PokemonState
): PokemonState => {
  return {
    ...state,
    byId: {
      ...state.byId,
      [pokemonId]: {
        ...state.byId[pokemonId],
        comments: [...state.byId[pokemonId].comments, commentId]
      }
    }
  };
};

const deletePokemonComment = (
  pokemonId: number,
  commentId: number,
  state: PokemonState
): PokemonState => {
  return {
    ...state,
    byId: {
      ...state.byId,
      [pokemonId]: {
        ...state.byId[pokemonId],
        comments: state.byId[pokemonId].comments.filter(id => id !== commentId)
      }
    }
  };
};

const deleteFavourite = (
  pokemonId: number,
  state: PokemonState
): PokemonState => {
  return {
    ...state,
    byId: {
      ...state.byId,
      [pokemonId]: {
        ...state.byId[pokemonId],
        favourited: false
      }
    }
  };
};

const pokemonReducer = (
  state = initialState,
  action: PokemonActionList | CommentActionList
): PokemonState => {
  switch (action.type) {
    case PokemonActions.SUCCESS:
      return addPokemon(action.data, state);
    case PokemonActions.FAVOURITE:
      return addFavourite(action.data, state);
    case PokemonActions.DELETE:
      return deleteEntity<PokemonInterface, PokemonState>(action.data, state);
    case PokemonActions.DELETE_FAVOURITE:
      return deleteFavourite(action.data, state);
    case CommentActions.ADD:
      return addPokemonComment(action.data.pokemon, action.data.id, state);
    case CommentActions.DELETE:
      return deletePokemonComment(
        action.data.pokemonId,
        action.data.commentId,
        state
      );
    case PokemonActions.FAILURE:
      return {
        ...state,
        searchId: null
      };
    default:
      return state;
  }
};

const selectPokemonById = (state: PokemonReducerState) => state.pokemon.byId;
const selectPokemonIds = (state: PokemonReducerState) => state.pokemon.allIds;

export const normalisedData = () =>
  createSelector(
    selectPokemonById,
    selectPokemonIds,
    (pokemonById, ids) => ids.map(id => pokemonById[id])
  );

export const favouritedPokemon = createSelector(
  selectPokemonById,
  selectPokemonIds,
  (pokemonById, ids) =>
    ids.reduce((accum: PokemonInterface[], id) => {
      const pokemon = pokemonById[id];
      if (pokemon.favourited) {
        accum.push(pokemon);
      }
      return accum;
    }, [])
);

export const foundPokemonById = (id: number) =>
  createSelector(
    selectPokemonById,
    pokemon => pokemon[id]
  );

export default pokemonReducer;
