import React from "react";
import "./Pokecard.css";
const poke_api = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
export default function Pokecard(prop) {
  const id = `00${prop.id}`.slice(-3);
  return (
    <>
      <div className="Pokecard">
        <h1 className="Pokecard-title">{prop.name}</h1>
        <img src={`${poke_api}${id}.png`} alt={prop.name} />
        <div className="Pokecard-data">Type:{prop.type}</div>
        <div className="Pokecard-data">Exp:{prop.exp}</div>
      </div>
    </>
  );
}
