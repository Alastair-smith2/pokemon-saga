import { PokemonActionList, PokemonActions } from "./types/pokemon-types";
import { UIState, ReducerState as UIReducerState } from "./types/ui-types";
// refactor UI state out
const initialState: UIState = {
  pokemonLoading: false,
  pokemonError: false
};

const pokemonReducer = (
  state = initialState,
  action: PokemonActionList
): UIState => {
  switch (action.type) {
    case PokemonActions.FETCH:
      return {
        pokemonLoading: true,
        pokemonError: false
      };
    case PokemonActions.SUCCESS:
      return {
        pokemonLoading: false,
        pokemonError: false
      };
    case PokemonActions.FAILURE:
      return {
        pokemonLoading: false,
        pokemonError: true
      };
    default:
      return state;
  }
};

export const selectLoading = (state: UIReducerState) => state.ui.pokemonLoading;
export const selectError = (state: UIReducerState) => state.ui.pokemonError;

export default pokemonReducer;
