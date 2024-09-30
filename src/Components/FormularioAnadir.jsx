import { useRef, useContext } from 'react'
import './FormularioAnadir.css'
import { GatosContent } from '../Gatos' // Importamos contexto'

export const FormularioAnadir = () => {
    const { setGatos } = useContext(GatosContent); 

    const { VITE_API } = import.meta.env

    let anadirGatoFormulario = useRef(null)

    let postGato = async (e) => {
        e.preventDefault();

        let nuevo = {
            imagen: anadirGatoFormulario.current['imagen'].value,
            nombre: anadirGatoFormulario.current['nombre'].value,
            raza: anadirGatoFormulario.current['raza'].value,
            edad: anadirGatoFormulario.current['edad'].value,
            genero: anadirGatoFormulario.current['genero'].value,
            descripcion: anadirGatoFormulario.current['descripcion'].value,
            caracter: anadirGatoFormulario.current['caracter'].value,
        };

        let options = {
            method: 'POST',
            body: JSON.stringify(nuevo),
            headers: {
                'Content-type': 'application/json',
            },
        };

        let peticion = await fetch(`${VITE_API}/gatos`, options);
        let datos = await peticion.json();
        setGatos(datos); 
        console.log(datos);
    };

    return (
        <>
            <section className="Content">
                <h2>Añadir Gato</h2>
                <span>Subir información de gato nuevo</span>

                <form ref={anadirGatoFormulario} onSubmit={postGato} className="Formulario">
                    <input className="Formulario-input" type="url" name="imagen" placeholder="https://example.com" />
                    <input className="Formulario-input" type="text" name="nombre" placeholder="Nombre" />
                    <input className="Formulario-input" type="text" name="raza" placeholder="Raza" />
                    <input className="Formulario-input" type="number" name="edad" placeholder="Edad" />
                    <input className="Formulario-input" type="text" name="genero" placeholder="Género" />
                    <input className="Formulario-input" type="text" name="descripcion" placeholder="Descripción" />
                    <input className="Formulario-input" type="text" name="caracter" placeholder="Carácter" />
                    <input type="submit" className="Input-btn" />
                </form>
            </section>
        </>
    );
}
