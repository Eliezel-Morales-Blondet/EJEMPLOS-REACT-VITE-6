import type Persona from "./Persona.models";

export default function Fila(props: FilaProps){
    return(
        <tr>
            <th>{props.persona.nombre}</th>
            <th>{props.persona.departamento}</th>
            <th>
                <button onClick={() => props.remover(props.persona)}>Remover</button>
            </th>
        </tr>
    )
}
/* 
export default function Fila(persona, remover: FilaProps){
    return(
        <tr>
            <th>{persona.nombre}</th>
            <th>{persona.departamento}</th>
            <th>
                <button onClick={() => remover(persona)}>Remover</button>
            </th>
        </tr>
    )
}
*/
interface FilaProps{
    persona: Persona;  
    remover: (p: Persona) => void;
}