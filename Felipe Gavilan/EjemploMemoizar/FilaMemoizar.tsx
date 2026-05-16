import { memo } from "react";
import type Persona from "../Persona.models";


const FilaMemoizar = memo(function FilaMemoizar({persona, remover}: FilaProps){
    console.log(`Cargar fila de ${persona.nombre}`);
    if (persona.nombre === 'Roberto'){
        throw Error();
    }
    return(
        <tr>
            <th>{persona.nombre}</th>
            <th>{persona.departamento}</th>
            <th>
                <button onClick={() => remover(persona)}>Remover</button>
            </th>
        </tr>
    )
});
interface FilaProps{
    persona: Persona;  
    remover: (p: Persona) => void;
}

export default FilaMemoizar;