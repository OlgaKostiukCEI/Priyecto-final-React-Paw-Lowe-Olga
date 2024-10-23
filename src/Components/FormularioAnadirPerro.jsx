import { useContext, useRef } from 'react'
import './FormularioAnadirPerro.css'
import { PerrosContent } from '../Perros'

// Declaramos el Componente
export const FormularioAnadirPerro = () => {

    // Usamos useContext para obtener la función setGatos del contexto GatosContent
    const {setPerros} =useContext(PerrosContent)

     // Accedemos a la variable de entorno VITE_API para obtener la URL base de la API
    const {VITE_API} = import.meta.env

    // Creamos una referencia para el formulario que nos permite acceder a sus campos
    let anadirPerroFormulario = useRef(null)

    // Creamos funcion asíncrona
    let postPerro = async (e) => {
        e.preventDefault()

        // Creamos un objeto 'nuevo' con los valores de los campos del formulario
        let nuevo = {
            imagen: anadirPerroFormulario.current['imagen'].value,
            nombre: anadirPerroFormulario.current['nombre'].value,
            raza: anadirPerroFormulario.current['raza'].value,
            edad: anadirPerroFormulario.current['edad'].value,
            genero: anadirPerroFormulario.current['genero'].value,
            descripcion: anadirPerroFormulario.current['descripcion'].value,
            caracter: anadirPerroFormulario.current['caracter'].value,
        }

        // Configuramos las opciones de la petición POST con el método, cuerpo y tipo de contenido
        let options = {
            method: 'POST',
            body: JSON.stringify(nuevo),
            headers: {
                'Content-type' : 'application/json'
            }
        }

        // Realizamos la petición POST a la API usando la URL base (VITE_API) concatenada con '/gatos'
        let peticion = await fetch (`${VITE_API}/perros`, options)
        let datos = await peticion.json()
        setPerros(datos)
        console.log(datos)
    }
    
    // Retornamos la interfaz del componente
    return (
        <>
            <section className="Content">
                <h3>Añadir Perro</h3>
                <span>Subir información de perro nuevo</span>

                <form ref={anadirPerroFormulario} onSubmit={postPerro} className="Formulario">
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
    )
}