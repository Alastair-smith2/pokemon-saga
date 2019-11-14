import { call, put, takeEvery } from "redux-saga/effects";
import {
  loadingPokemon,
  pokemonResult,
  pokemonFetchFail
} from "../ducks/pokemon";
import { PokemonActions } from "../ducks/types/pokemon-types";

const fetchJson = async (url: string) => {
  let resp;
  try {
    let data = await fetch(url);
    resp = { responseData: await data.json() };
  } catch (e) {
    resp = { err: e.message };
  }
  return resp;
};

export function* fetchPokemon({
  data
}: {
  type: PokemonActions.SEARCH;
  data: string;
}) {
  yield put(loadingPokemon());
  try {
    const { responseData, err } = yield call(
      fetchJson,
      `https://pokeapi.co/api/v2/pokemon/${data}`
    );

    if (err) {
      yield put(pokemonFetchFail());
    }
    yield put(pokemonResult(responseData));
  } catch (error) {
    yield put(pokemonFetchFail());
  }
}

export function* watchSearch() {
  yield takeEvery(PokemonActions.SEARCH, fetchPokemon);
}

// single entry point to start all Sagas at once
