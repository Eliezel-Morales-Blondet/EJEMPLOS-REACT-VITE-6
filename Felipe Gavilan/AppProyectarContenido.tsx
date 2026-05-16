import Cabecera from "./cabecera";
import ProyectarContenido from "./ProyectarContenido";
import ProyectarContenido2 from "./ProyectarContenido2";

export default function AppProyectarContenido(){
    return(
        <>
        <ProyectarContenido>
            <p>Texto oooo</p>
            <button onClick={() => alert('Me has clickeado')}>Haz Click</button>
        </ProyectarContenido>

        <ProyectarContenido2 
            parteSuperior={<button>Boton Superior</button>}
            parteIntermedia={<>
                <Cabecera />
                <p>Lo que yo quiera</p>
            </>}
            parteInferior={<>
                <h4>Sub titulo 4</h4>
            </>}
        />
        </>
    );
}