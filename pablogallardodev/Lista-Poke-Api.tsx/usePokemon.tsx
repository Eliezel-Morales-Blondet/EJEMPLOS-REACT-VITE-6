import {useState, useEffect} from 'react'

type PokemonItem = {
    name: string;
    url: string;
};

const usePokemon = (url: string) => {
    const [pokemon, setPokemon] = useState<PokemonItem[]>([]);
    const [anterior, setAnterior] = useState<string | null>(null);
    const [siguiente, setSiguiente] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        fetch(url).then((response) => response.json())
        .then((data) => {
            setPokemon(data.results);
            setAnterior(data.previous);
            setSiguiente(data.next);
            setLoading(false);
        });
    },[url]);
    
    return { pokemon, loading, anterior, siguiente}
}

export default usePokemon;