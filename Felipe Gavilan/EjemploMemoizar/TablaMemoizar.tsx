import { memo, useCallback, useState } from "react";
import type Persona from "../Persona.models";
import FilaMemoizar from "./FilaMemoizar";
import { ErrorBoundary } from "react-error-boundary";

const TablaMemoizar = memo(function TablaMemoizar(){
    console.log("Reenderizando");
    const personasFuente: Persona[] = [
        {id:1 , nombre: 'Felipe', departamento: 'Ingenieria'},
        {id:2 , nombre: 'Claudia', departamento: 'Recursos Humanos'},
        {id:3 , nombre: 'Roberto', departamento: 'Contabilidad'},
        {id:4 , nombre: 'Francisca', departamento: 'Contabilidad'},
        {id:5 , nombre: 'Jose', departamento: 'Operaciones'},
        {id:6 , nombre: 'Estephany', departamento: 'Ingenieria'},
        {id:7 , nombre: 'Norberto', departamento: 'Recursos Humanos'},
    ];

    const [personas, setPersonas] = useState(personasFuente);

    const removerPersona = useCallback((persona: Persona) => {
        setPersonas(
            estadoActual => estadoActual.filter(p => p.id !== persona.id)
        )
    }, []);

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
                <ErrorBoundary key={p.id} fallback={
                    <>
                        <tr>
                            <td colSpan={3} style={{color: 'red'}}>--Error: {p.nombre}</td>
                        </tr>
                    </>
                }>
                    <FilaMemoizar persona={p} remover={removerPersona} />
                </ErrorBoundary>
                
                )};
            </tbody>
        </table>
    );
});

export default TablaMemoizar;