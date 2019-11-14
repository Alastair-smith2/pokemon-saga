import React from "react";
import { useSelector } from "react-redux";
import { favouritedPokemon } from "../../ducks/pokemon";
import FavouriteItem from "./FavouriteItem";

const FavouriteList: React.FC = (): JSX.Element => {
  const favouritePokemon = useSelector(favouritedPokemon);
  return (
    <>
      {favouritePokemon.map(favourite => (
        <FavouriteItem key={favourite.id} id={favourite.id} />
      ))}
    </>
  );
};

export default FavouriteList;
