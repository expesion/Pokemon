import React from "react";
import Pokecard from "./Pokecard";
import styled from "styled-components";

function Pokedex({ pokemon }) {
  const PokedexCard = styled.div`
    display: flex;
    justify-context: space-evenly;
    flex-wrap: wrap;
  `;
  return (
    <div className="Pokedex">
      <PokedexCard>
        {pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </PokedexCard>
    </div>
  );
}

export default Pokedex;
