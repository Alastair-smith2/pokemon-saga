export interface UIState {
  pokemonLoading: boolean;
  pokemonError: boolean;
}

export interface ReducerState {
  ui: UIState;
}
