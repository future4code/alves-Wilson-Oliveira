import axios from "axios";
import { useEffect, useState } from "react";

function PokeCard(props) {
  const [pokemon,setpokemon] = useState("")
  
  const pegaPokemon=(pokeName)=>{
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setpokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(()=> {
    pegaPokemon(props.pokeName);
  }, [props.pokeName])
  
  return (
    <figure>
      <strong>{pokemon.name&&pokemon.name.toUpperCase()}</strong>
      <p>Peso: {pokemon.weight} Kg</p>
      <p>Tipo: {pokemon.types&&pokemon.types.map((item,index)=>{
        return <strong key={index} > {item.type.name} </strong>
      })} </p>
      {pokemon.sprites&& (
        <img src={pokemon.sprites.front_default} alt={"Nome do Pokémon"} />
      )}
    </figure>
  );
};

export default PokeCard;
