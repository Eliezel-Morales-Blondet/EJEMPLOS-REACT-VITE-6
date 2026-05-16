import { useState } from "react"
import ContenidoDinamicoIF from "./ContenidoDinamicoIF";

export default function AppContenidoDinamicoIF(){

    const [calificacion, setCalificacion] = useState<number | null>(null);


    return(
        <>
            <label>Ingrese la calificación</label>
            <input type="number" onChange={e => setCalificacion(Number(e.target.value))}/>

            {calificacion ? <ContenidoDinamicoIF calificacion={calificacion}/> : undefined} 
        </>
    )
}