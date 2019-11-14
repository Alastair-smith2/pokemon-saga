import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchForPokemon } from "../../ducks/pokemon";
import LoadingStatus from "../PokemonSearchResult/Loading";

const Search: React.FC = (): JSX.Element => {
  const [searchValue, updateValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="search-container">
      <h1>Search for a pokemon</h1>
      <input value={searchValue} onChange={e => updateValue(e.target.value)} />
      <button onClick={() => dispatch(searchForPokemon(searchValue))}>
        Search
      </button>
      <LoadingStatus />
    </div>
  );
};

export default Search;
