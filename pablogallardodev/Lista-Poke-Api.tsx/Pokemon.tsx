import React, { useState } from "react";
import usePokemon from "./usePokemon";

export default function Pokemon(){

    const [actual, setActual] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
    const { pokemon, loading, anterior, siguiente} = usePokemon(actual);
    
    return(
        <>
        <p>Lista de Pokemon</p>
        <ul>
            {
                pokemon.map((pokemon, index) =>{
                    return <li key={index}>{pokemon.name}</li>
                })
            }
        </ul>
        <button onClick={() => {
            if (anterior) setActual(anterior);
        }}>Anteriores</button>
        <button onClick={() => siguiente != null && setActual(siguiente)}>Siguientes</button>
        </>
    )
}