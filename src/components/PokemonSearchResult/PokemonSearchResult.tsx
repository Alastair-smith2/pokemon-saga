import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { favouritePokemon, foundPokemonById } from "../../ducks/pokemon";

interface PokemonProps {
  id: number;
}
const Pokemon: React.FC<PokemonProps> = ({ id }): JSX.Element => {
  const pokemon = useSelector(foundPokemonById(id));
  const dispatch = useDispatch();
  return (
    <div className="pokemon-result">
      <p>Pokemon - {pokemon.name}</p>
      <p>ID - {pokemon.id}</p>
      {!pokemon.favourited && (
        <button onClick={() => dispatch(favouritePokemon(`${pokemon.id}`))}>
          Favourite
        </button>
      )}
    </div>
  );
};

export default Pokemon;
