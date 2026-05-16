import { useState } from "react";
import ContenidoDinamico from "./ContenidoDinamico";

export default function AppMostrar_Ocultar_Texto(){
    const [mostrar, setMostrar] = useState(false);
    return(
        <>
            <input type="checkbox" onChange={e => setMostrar(e.target.checked)}/>
            <label>Mostrar el mensaje oculto</label>

            <ContenidoDinamico mostrarContenido={mostrar} />
        </>
    );
}
