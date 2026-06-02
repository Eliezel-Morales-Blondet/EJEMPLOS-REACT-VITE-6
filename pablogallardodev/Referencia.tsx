import React, { useRef } from 'react'


export default function Referencia(){
    const inputRef = useRef<HTMLInputElement>(null);

    return(
        <>
            <h1>Referencia</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={() => inputRef.current?.focus()}></button>
        </>
    )
}