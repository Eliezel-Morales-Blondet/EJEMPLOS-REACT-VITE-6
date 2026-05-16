import { useEffect, useState } from "react"

export default function EjemploUseEffects(){

    const [clicks, setClicks] = useState(0);
    const [hora, setHora] = useState(new Date());

    useEffect(()=>{
        console.log('el componente ha cargado.');
        return () => console.log('desmontando el componete.')
    }, []);

    useEffect(()=>{
        console.log('hook del click')
        document.title = `${clicks} veces`;
    }, [clicks]);

    useEffect(()=>{
        const timeId = setInterval(()=>{
            setHora(new Date());
        }, 10)
        return () => clearInterval(timeId);
    })
    return(
        <>
            <h2>Ejemplo UseEffect</h2>
            <div>
                <button onClick={() => setClicks(clicks + 1)}>Me has clickeado {clicks} veces.</button>
            </div>
            <div>
                La hora actual es {hora.toTimeString()}
            </div>
        </>
    )
}