import React from "react";
import Pokedex from "./Pokedex";
import styled from "styled-components";
const pokemon = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];
function Pokegame() {
  let Winner = styled.span`
    color: green;
  `;
  let Looser = styled.span`
    color: red;
  `;
  let hand1 = [];
  let hand2 = [...pokemon];
  while (hand1.length < hand2.length) {
    let ranIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(ranIdx, 1)[0];
    hand1.push(randPokemon);
  }
  let exp1 = hand1.reduce((score, pokemon) => {
    return (score += pokemon.base_experience);
  }, 0);
  let exp2 = hand2.reduce(
    (score, pokemon) => score + pokemon.base_experience,
    0
  );
  console.log(exp1, exp2);
  return (
    <div>
      <h1 style={{ textAlign: "-webkit-center" }}>
        {exp1 > exp2 ? (
          <Winner>Thaha is the winnner</Winner>
        ) : (
          <Looser>Thaha is the looser</Looser>
        )}
      </h1>
      <Pokedex pokemon={hand1} />
      <h1 style={{ textAlign: "-webkit-center" }}>
        {exp2 > exp1 ? (
          <Winner>You are the winnner</Winner>
        ) : (
          <Looser>You are the looser</Looser>
        )}
      </h1>
      <Pokedex pokemon={hand2} />
    </div>
  );
}

export default Pokegame;
