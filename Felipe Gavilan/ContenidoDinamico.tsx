export default function ContenidoDinamico(props: ContenidoDinamico){
    return(
        <div>
            {props.mostrarContenido ? <p>Mensaje Secreto</p> : <p>Ocultando Mensaje</p>}
        </div>
    )
}

interface ContenidoDinamico{
    mostrarContenido: boolean;
}