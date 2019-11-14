import React from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Pokemon from "./components/PokemonSearchResult/PokemonSearchResult";
import Favourites from "./components/Favourites/FavouritePokemon";
import { useSelector } from "react-redux";
import { StoreState } from "./ducks/index";
import Login from "./components/User/Login";
import { selectUser } from "./ducks/user";

const App: React.FC = () => {
  const { searchId } = useSelector((state: StoreState) => state.pokemon);
  const { authenticated } = useSelector(selectUser);
  return (
    <div className="grid">
      <div className="favourites">
        <Favourites />
      </div>
      <div className="search">
        <Search />
        {searchId && <Pokemon id={searchId} />}
      </div>
      <div className="user">
        <Login />
        <p>{authenticated ? "Logged In" : "Not logged in "}</p>
      </div>
    </div>
  );
};

export default App;
