// Importaciones necesarias desde React y React Router
import { useRef, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./InfoPerros.css"
import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"

// Componente principal InfoPerros
export const InfoPerros =() =>{

    // Obtenemos el parámetro _id de la URL
    const {_id} = useParams()
    const [infoPerros, setInfoPerros] = useState(null)
    const {VITE_API} = import.meta.env

    // Referencias a los formularios y secciones para desplazarse con scroll
    const formularioActualizarInfoPerros = useRef(null)
    const formularioRefPerros = useRef(null)
    const infoRefPerros = useRef(null)

    // Función para obtener la información del perro
    const pedirInfoPerros = async () =>{
      let peticion = await fetch(`${VITE_API}/perros/id/${_id}`)
      let datos = await peticion.json()
      setInfoPerros(datos)
}

// Función para llenar el formulario con la info actual
let actualizarInfoPerros = () =>{
    console.log(infoPerros)
    if (infoPerros) {
        formularioActualizarInfoPerros.current["_id"].value = infoPerros._id
        formularioActualizarInfoPerros.current["Imagen"].value = infoPerros.imagen
        formularioActualizarInfoPerros.current["Nombre"].value = infoPerros.nombre
        formularioActualizarInfoPerros.current["Raza"].value = infoPerros.raza
        formularioActualizarInfoPerros.current["Edad"].value = infoPerros.edad
        formularioActualizarInfoPerros.current["Genero"].value = infoPerros.genero
        formularioActualizarInfoPerros.current["Descripcion"].value = infoPerros.descripcion
        formularioActualizarInfoPerros.current["Caracter"].value = infoPerros.caracter
        
        // Desplazar la vista hacia el formulario
        formularioRefPerros.current.scrollIntoView({behaviour: "smooth"})
    }
}

// Función para actualizar la info del perro
let updateInfoPerros = async (e)=>{
    e.preventDefault()

    const datosActualizadosPerros ={
        _id: formularioActualizarInfoPerros.current["_id"].value,
        imagen: formularioActualizarInfoPerros.current["Imagen"].value,
        nombre: formularioActualizarInfoPerros.current["Nombre"].value,
        raza: formularioActualizarInfoPerros.current["Raza"].value,
        edad: formularioActualizarInfoPerros.current["Edad"].value,
        genero: formularioActualizarInfoPerros.current["Genero"].value,
        descripcion: formularioActualizarInfoPerros.current["Descripcion"].value,
        caracter: formularioActualizarInfoPerros.current["Caracter"].value,
    }
    console.log(datosActualizadosPerros)

    // Configuración de la petición de actualización
    let options = {
        method: "PUT",
        body: JSON.stringify(datosActualizadosPerros),
        headers:{
            "Content-Type": "application/json",
        }
    }

    // Realizamos la petición de actualización a la API
    let peticion = await fetch (`${VITE_API}/perros/id/${_id}`,options)
    let datos = await peticion.json()
    console.log(datos)
    
    // Pedir la info de nuevo y desplazarse a la sección principal
    pedirInfoPerros()
    infoRefPerros.current.scrollIntoView({behaviour:"smooth"})
}

// Efecto para cargar la información del perro al montar el componente o al cambiar el _id
useEffect(()=>{
    pedirInfoPerros()
},[_id])

// Retornamos la estructura del componente InfoPerros
return (
    <>
      {!infoPerros ? ( <p>Cargando...</p> ) : ( <Texto {...infoPerros} actualizarInfoPerros={actualizarInfoPerros} updateInfoPerros={updateInfoPerros} formularioActualizarInfoPerros={formularioActualizarInfoPerros} formularioRefPerros={formularioRefPerros} infoRefPerros={infoRefPerros} />)}
      </>
  )
}

// Componente para mostrar la información del perro y el formulario de actualización
const Texto =(props)=>{
    const {_id, imagen, nombre, raza, edad,genero, descripcion, caracter,actualizarInfoPerros,updateInfoPerros,formularioActualizarInfoPerros, formularioRefPerros, infoRefPerros} = props
    return(
        <>
        <Header/>

        {/* Sección de información principal del perro */}
        <section className="Info" ref={infoRefPerros}> 
        <div className="Info-wrapper">
          <img src={imagen} alt={`Imagen de ${nombre}`} className="Info-img" />
        </div>

        <div className="Info-col">
          <h1 className="Info-col-nombre">{nombre}</h1>
          <p className="Info-col-description">{descripcion}</p>
          <div className="Info-col-detail">
            <ul className="Info-col-detail-text">
              <li className="Info-col-detail-text-data">
                <b>Raza:</b> {raza}
              </li>
              <li className="Info-col-detail-text-data">
                <b>Género:</b> {genero}
              </li>
            </ul>
            <ul className="Info-col-detail-text">
              <li className="Info-col-detail-text-data">
                <b>Edad: </b>
                {edad}
              </li>
              <li className="Info-col-detail-text-data">
                <b>Carácter:</b> {caracter}
              </li>
            </ul>
          </div>
          <p> *Se entrega con contrato de adopción, con chip, vacunada, desparasitada y con compromiso de esterilización. </p>
          <button className="Boton" onClick={actualizarInfoPerros}>Actualizar</button>
          {/* Al hacer click, llenamos el formulario */}
        </div>
      </section>

      {/* Sección del formulario de actualización */}
      <section className="Actualizar" ref={formularioRefPerros}>
        <h3 className="Actualizar-h3">Actualizar información de {nombre}</h3>
        <p className="Actualizar-p">
          Descubre a nuestros adorables felinos en busca de un hogar amoroso.
          Cada uno tiene su propia personalidad única, desde cariñosos y dulces
          hasta juguetones y aventureros.
        </p>

        <form className="Actualizar-form" ref={formularioActualizarInfoPerros} onSubmit={updateInfoPerros}>
          <input className="Formulario-input" type="text" name="_id" placeholder="_id" />
          <input className="Formulario-input" type="url" name="Imagen" placeholder="Imagen" />
          <input className="Formulario-input" type="text" name="Nombre" placeholder="Nombre" />
          <input className="Formulario-input" type="text" name="Raza" placeholder="Raza" />
          <input className="Formulario-input" type="number" name="Edad" placeholder="Edad" />
          <input className="Formulario-input" type="text" name="Genero" placeholder="Genero" />
          <input className="Formulario-input" type="text" name="Descripcion" placeholder="Descripcion" />
          <input className="Formulario-input" type="text" name="Caracter" placeholder="Caracter" />
          <input className="Input-btn" type="submit" value="Actualizar información" />
        </form>
      </section>
      <Footer/>
        </>
    )
}

