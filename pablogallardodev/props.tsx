import React from "react"

const Texto = (props: TextoProps) => {
    return (
        <>
            <p>Hola mi nombre es: {props.name} 
                {props.apellido} 
                y mi edad es: {props.edad}
            </p>
        </>
    )
}

interface TextoProps{
    name: string;
    apellido: string;
    edad: number;
}

export default Texto;