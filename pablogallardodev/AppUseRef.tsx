import Pokemones from "./Lista-Poke-Api.tsx/Pokemones";
import Referencia from "./Referencia";
import UseEffect from "./UseEffect";
import ListaDeNombres from "./lista-nombres";
import Contador from "./use-state"

export default function App(){

    return(
        <>
            <UseEffect />
            <br />
            <Contador />
            <br />
            <ListaDeNombres />
            <br />
            <Pokemones />
            <br />
            <Referencia />
        </>
    )
}