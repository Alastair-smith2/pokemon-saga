import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { foundPokemonById, deleteFavouritePokemon } from "../../ducks/pokemon";
import AddComment from "../Comment/AddComment";
import Comment from "../Comment/Comment";

interface PokemonProps {
  id: number;
}
const FavouriteItem: React.FC<PokemonProps> = ({ id }): JSX.Element => {
  const pokemon = useSelector(foundPokemonById(id));
  const dispatch = useDispatch();
  return (
    <div className="pokemon-favourite-item">
      <p onClick={() => dispatch(deleteFavouritePokemon(id))}>
        Pokemon - {pokemon.name}
      </p>
      <AddComment id={id} />
      {pokemon.comments.map(commentId => (
        <Comment key={commentId} commentId={commentId} pokemonId={id} />
      ))}
    </div>
  );
};

export default FavouriteItem;
