import React, { useEffect, useState } from "react";

type PokemonItem = {
    name: string;
};

export default function Pokemones(){

    const [pokemon, setPokemon] = useState<PokemonItem[]>([]);
    const [anterior, setAnterior] = useState<string | null>(null);
    const [siguiente, setSiguiente] = useState<string | null>(null);
    const [actual, setActual] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");

    useEffect(() => {
        async function obtenerPokemones() {
            const response = await fetch(actual);

            const data = await response.json();

            setPokemon(data.results);
            setAnterior(data.previous);
            setSiguiente(data.next);
        }
        obtenerPokemones();
    },[actual]);
    
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