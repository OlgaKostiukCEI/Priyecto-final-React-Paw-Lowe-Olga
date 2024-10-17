import { useRef, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./InfoPerros.css"
import { Header } from "./Components/Header"


export const InfoPerros =() =>{
    const {_id} = useParams()
    const [infoPerros, setInfoPerros] = useState(null)
    const {VITE_API} = import.meta.env
    const formularioActualizarInfoPerros = useRef(null)
    const formularioRefPerros = useRef(null)
    const infoRefPerros = useRef(null)

const pedirInfoPerros = async () =>{
    let peticion = await fetch(`${VITE_API}/perros/id/${_id}`)
    let datos = await peticion.json()
    setInfoPerros(datos)
}

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

        formularioRefPerros.current.scrollIntoView({behaviour: "smooth"})
    }
}


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

    let options = {
        method: "PUT",
        body: JSON.stringify(datosActualizadosPerros),
        headers:{
            "Content-Type": "application/json",
        }
    }

    let peticion = await fetch (`${VITE_API}/perros/id/${_id}`,options)
    let datos = await peticion.json()
    console.log(datos)

    pedirInfoPerros()
    infoRefPerros.current.scrollIntoView({behaviour:"smooth"})
}

useEffect(()=>{
    pedirInfoPerros()
},[_id])

return (
    <>
      {!infoPerros ? ( <p>Cargando...</p> ) : ( <Texto {...infoPerros} actualizarInfoPerros={actualizarInfoPerros} updateInfoPerros={updateInfoPerros} formularioActualizarInfoPerros={formularioActualizarInfoPerros} formularioRefPerros={formularioRefPerros} infoRefPerros={infoRefPerros} />)}
      </>
)

}

const Texto =(props)=>{
    const {_id, imagen, nombre, raza, edad,genero, descripcion, caracter,actualizarInfoPerros,updateInfoPerros,formularioActualizarInfoPerros, formularioRefPerros, infoRefPerros} = props
    return(
        <>
        <Header/>
        <section className="Info" ref={infoRefPerros}> {/* Usar la ref aquí */}
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
        </>
    )
}

