import { useState } from "react"

export default function ListaDeNombres(){
    const [nombre, setNombre] = useState("");
    const [nombres, setNombres] = useState<string[]>([]);
    const guardar = () => {
        setNombres([...nombres, nombre]);
        setNombre("");
    }
    return(
        <>
            <p>Ingresa un nombre para agregar:</p>
            <input type="text" value={nombre} onChange={(e) => { setNombre(e.target.value)}}/>
            <button onClick={guardar}>Agregar</button>
            <ul>
                {
                    nombres.map((elemento, index) => {
                        return <li key={index}>{elemento}</li>
                    })
                }
            </ul>
        </>
    )
}