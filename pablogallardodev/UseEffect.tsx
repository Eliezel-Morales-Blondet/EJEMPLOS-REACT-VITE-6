import { useState, useEffect } from "react";

const UseEffect = () => {

    const [contador, setContador] = useState<number>(0);

    //Se ejecuta cada vez que se cargue la pagina
    useEffect(() => {
        console.log("Web cargada exitosamente.")
    });
    //Se ejecuta una sola vez
    useEffect(() => {
        alert("Bienvenido!!")
    }, []);
    //Se ejecuta cada vez que la variable contador se actualiza
    useEffect(() => {
        alert("Los puntos han cambiado correctamente")
    }, [contador]);

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