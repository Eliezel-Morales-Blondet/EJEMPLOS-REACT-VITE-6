import { useState, useEffect } from "react";

const UseEffect = () => {

    const [contador, setContador] = useState<number>(0);

    useEffect(() => {
        alert("Bienvenido!!")
    });


    return (
        <>
            <button onClick={() => 
                {setContador(contador + 1)}}>+1</button>
            <button onClick={() => 
                {setContador(0)}}>Reiniciar</button>
            <button onClick={() => 
                {setContador(contador - 1)}}>-1</button>
            <p>Actualmente hay {contador} puntos</p>
        </>
    );
}

export default UseEffect;