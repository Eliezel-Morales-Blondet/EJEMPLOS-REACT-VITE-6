import { useState } from 'react'
import Cabecera from './cabecera'
import MostrarTexto from './MostrarTexto'

export default function AppEjemploEstado(){
    const manejarClick = () => alert('me has clickeado');
    const [texto, setTexto] = useState('');
    const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => setTexto(e.currentTarget.value);

    return(
        <>
            <Cabecera />
            
            <button onClick={manejarClick}>Click</button>

            <div>
                <input onKeyUp={(e) => manejarKeyUp(e)} />
            </div>

            <MostrarTexto texto={texto}/>
        </>
    );
}