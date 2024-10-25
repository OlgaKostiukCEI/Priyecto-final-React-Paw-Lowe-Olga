import { useRef, useContext } from "react"
import "./FormularioAnadir.css"
import { GatosContent } from "../Gatos"

// Declaramos el Componente
export const FormularioAnadir = () => {
  // Usamos useContext para obtener la función setGatos del contexto GatosContent
  const { setGatos } = useContext(GatosContent)

  // Accedemos a la variable de entorno VITE_API para obtener la URL base de la API
  const { VITE_API } = import.meta.env

  // Creamos una referencia para el formulario que nos permite acceder a sus campos
  let anadirGatoFormulario = useRef(null)

  // Creamos funcion asíncrona
  let postGato = async (e) => {
    e.preventDefault()

    // Creamos un objeto 'nuevo' con los valores de los campos del formulario
    let nuevo = {
      imagen: anadirGatoFormulario.current["imagen"].value,
      nombre: anadirGatoFormulario.current["nombre"].value,
      raza: anadirGatoFormulario.current["raza"].value,
      edad: anadirGatoFormulario.current["edad"].value,
      genero: anadirGatoFormulario.current["genero"].value,
      descripcion: anadirGatoFormulario.current["descripcion"].value,
      caracter: anadirGatoFormulario.current["caracter"].value,
    }

    // Configuramos las opciones de la petición POST con el método, cuerpo y tipo de contenido
    let options = {
      method: "POST",
      body: JSON.stringify(nuevo),
      headers: {
        "Content-type": "application/json",
      },
    }

    // Realizamos la petición POST a la API usando la URL base (VITE_API) concatenada con '/gatos'
    let peticion = await fetch(`${VITE_API}/gatos`, options)
    let datos = await peticion.json()
    setGatos(datos)
    console.log(datos)
  }

  // Retornamos la interfaz del componente
  return (
    <>
      <section className="Content">
        <h3>Añadir Gato</h3>
        <span>Subir información de gato nuevo</span>

        <form
          ref={anadirGatoFormulario}
          onSubmit={postGato}
          className="Formulario"
        >
          <input
            className="Formulario-input"
            type="url"
            name="imagen"
            placeholder="https://example.com"
          />
          <input
            className="Formulario-input"
            type="text"
            name="nombre"
            placeholder="Nombre"
          />
          <input
            className="Formulario-input"
            type="text"
            name="raza"
            placeholder="Raza"
          />
          <input
            className="Formulario-input"
            type="number"
            name="edad"
            placeholder="Edad"
          />
          <input
            className="Formulario-input"
            type="text"
            name="genero"
            placeholder="Género"
          />
          <input
            className="Formulario-input"
            type="text"
            name="descripcion"
            placeholder="Descripción"
          />
          <input
            className="Formulario-input"
            type="text"
            name="caracter"
            placeholder="Carácter"
          />
          <input type="submit" className="Input-btn" />
        </form>
      </section>
    </>
  )
}
