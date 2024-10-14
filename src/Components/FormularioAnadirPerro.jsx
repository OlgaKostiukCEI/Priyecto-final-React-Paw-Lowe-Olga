import { useContext, useRef } from 'react'
import './FormularioAnadirPerro.css'
import { PerrosContent } from '../Perros'


export const FormularioAnadirPerro = () => {
    const {setPerros} =useContext(PerrosContent)
    const {VITE_API} = import.meta.env


    let anadirPerroFormulario = useRef(null)

    let postPerro = async (e) => {
        e.preventDefault()

        let nuevo = {
            imagen: anadirPerroFormulario.current['imagen'].value,
            nombre: anadirPerroFormulario.current['nombre'].value,
            raza: anadirPerroFormulario.current['raza'].value,
            edad: anadirPerroFormulario.current['edad'].value,
            genero: anadirPerroFormulario.current['genero'].value,
            descripcion: anadirPerroFormulario.current['descripcion'].value,
            caracter: anadirPerroFormulario.current['caracter'].value,
        }

        let options = {
            method: 'POST',
            body: JSON.stringify(nuevo),
            headers: {
                'Content-type' : 'application/json'
            }
        }

        let peticion = await fetch (`${VITE_API}/perros`, options)
        let datos = await peticion.json()
        setPerros(datos)
        console.log(datos)
    }

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