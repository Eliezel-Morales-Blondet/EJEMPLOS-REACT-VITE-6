import { useState } from "react";
import type Persona from "./Persona.models";

export default function Tabla(){
    const personasFuente: Persona[] = [
        {id:1 , nombre: 'Felipe', departamento: 'Ingenieria'},
        {id:2 , nombre: 'Çlaudia', departamento: 'Recursos Humanos'},
        {id:3 , nombre: 'Roberto', departamento: 'Contabilidad'},
        {id:4 , nombre: 'Francisca', departamento: 'Contabilidad'},
        {id:5 , nombre: 'Jose', departamento: 'Operaciones'},
        {id:6 , nombre: 'Estephany', departamento: 'Ingenieria'},
        {id:7 , nombre: 'Norberto', departamento: 'Recursos Humanos'},
    ];

    const [personas, setPersonas] = useState(personasFuente);

    const removerPersona = (persona: Persona) => {
        setPersonas(
            personas.filter(p => p.id !== persona.id)
        )
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Departamento</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {personas.map(p => 
                    <tr key={p.id}>
                        <th>{p.nombre}</th>
                        <th>{p.departamento}</th>
                        <th>
                            <button onClick={() => removerPersona(p)}>Remover</button>
                        </th>
                    </tr>
                )}
            </tbody>
        </table>
    )
}