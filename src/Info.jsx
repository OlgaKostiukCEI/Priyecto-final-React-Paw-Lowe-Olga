import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import "./Info.css"
import { Header } from "./Components/Header"

export const Info = () => {
  const { _id } = useParams() 
  const [info, setInfo] = useState(null)
  const { VITE_API } = import.meta.env
  const formularioActualizarInfo = useRef(null)
  const formularioRef = useRef(null)
  const infoRef = useRef(null)

  // Función para obtener la información del gato
  const pedirInfo = async () => {
    let peticion = await fetch(`${VITE_API}/gatos/id/${_id}`)
    let datos = await peticion.json()
    setInfo(datos)
  }

  // Función para llenar el formulario con la info actual
  let actualizarInfo = () => {
    console.log(info);
    if (info) {
      formularioActualizarInfo.current["_id"].value = info._id
      formularioActualizarInfo.current["Imagen"].value = info.imagen
      formularioActualizarInfo.current["Nombre"].value = info.nombre
      formularioActualizarInfo.current["Raza"].value = info.raza
      formularioActualizarInfo.current["Edad"].value = info.edad
      formularioActualizarInfo.current["Genero"].value = info.genero
      formularioActualizarInfo.current["Descripcion"].value = info.descripcion
      formularioActualizarInfo.current["Caracter"].value = info.caracter

      // Desplazar la vista hacia el formulario
      formularioRef.current.scrollIntoView({ behavior: "smooth" })
    }
  };

  // Función para actualizar la info del gato
  let updateInfo = async (e) => {
    e.preventDefault()

    const datosActualizados = {
      _id: formularioActualizarInfo.current["_id"].value,
      imagen: formularioActualizarInfo.current["Imagen"].value,
      nombre: formularioActualizarInfo.current["Nombre"].value,
      raza: formularioActualizarInfo.current["Raza"].value,
      edad: formularioActualizarInfo.current["Edad"].value,
      genero: formularioActualizarInfo.current["Genero"].value,
      descripcion: formularioActualizarInfo.current["Descripcion"].value,
      caracter: formularioActualizarInfo.current["Caracter"].value,
    }
    console.log(datosActualizados)

    let options = {
      method: "PUT",
      body: JSON.stringify(datosActualizados),
      headers: {
        "Content-Type": "application/json",
      },
    }

    let peticion = await fetch(`${VITE_API}/gatos/id/${_id}`, options)
    let datos = await peticion.json()
    console.log(datos)

    // Pedir la info de nuevo y desplazarse a la sección principal
    pedirInfo()
    infoRef.current.scrollIntoView({ behavior: "smooth" }) // Desplazarse a la sección principal
  }

  useEffect(() => {
    pedirInfo()
  }, [_id])

  return (
    <>
      {!info ? ( <p>Cargando...</p> ) : ( <Texto {...info} actualizarInfo={actualizarInfo} updateInfo={updateInfo}formularioActualizarInfo={formularioActualizarInfo} formularioRef={formularioRef} infoRef={infoRef} />)}
    </>
  )
}

const Texto = (props) => {
  const { _id, imagen, nombre, raza, edad, genero, descripcion, caracter, actualizarInfo, updateInfo, formularioActualizarInfo, formularioRef, infoRef, } = props;

  return (
    <>
      <Header />

      <section className="Info" ref={infoRef}> {/* Usar la ref aquí */}
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
          <button onClick={actualizarInfo}>Actualizar</button>
          {/* Al hacer click, llenamos el formulario */}
        </div>
      </section>

      <section className="Actualizar" ref={formularioRef}>
        <h3 className="Actualizar-h3">Actualizar información de {nombre}</h3>
        <p className="Actualizar-p">
          Descubre a nuestros adorables felinos en busca de un hogar amoroso.
          Cada uno tiene su propia personalidad única, desde cariñosos y dulces
          hasta juguetones y aventureros.
        </p>

        <form className="Actualizar-form" ref={formularioActualizarInfo} onSubmit={updateInfo}>
          <input className="Formulario-input" type="text" name="_id" placeholder="_id" />
          <input className="Formulario-input" type="url" name="Imagen" placeholder="Imagen" />
          <input className="Formulario-input" type="text" name="Nombre" placeholder="Nombre" />
          <input className="Formulario-input" type="text" name="Raza" placeholder="Raza" />
          <input className="Formulario-input" type="number" name="Edad" placeholder="Edad" />
          <input className="Formulario-input" type="text" name="Genero" placeholder="Genero" />
          <input className="Formulario-input" type="text" name="Descripcion" placeholder="Descripcion" />
          <input className="Formulario-input" type="text" name="Caracter" placeholder="Caracter" />
          <input className="Formulario-input" type="submit" value="Actualizar información" />
        </form>
      </section>
    </>
  )
}
