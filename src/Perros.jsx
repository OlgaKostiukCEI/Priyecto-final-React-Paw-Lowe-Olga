// Importamos hooks y componentes necesarios desde React y React Router
import { useEffect, useState, createContext } from "react"
import { Link, NavLink } from "react-router-dom"
import "./Perros.css"
import { FormularioAnadirPerro } from "./Components/FormularioAnadirPerro"

// Creamos el contexto para compartir los datos de gatos en toda la aplicación
export const PerrosContent = createContext()

// Definimos el componente principal Perros
export const Perros = () => {
  // Estado para almacenar la lista de perros
  const [perros, setPerros] = useState([])
  // Obtenemos la URL base de la API desde las variables de entorno
  const { VITE_API } = import.meta.env

  // Función para obtener la lista de perros de la API
  let pedirPerros = async () => {
    let peticion = await fetch(`${VITE_API}/perros`)
    let datos = await peticion.json()
    setPerros(datos)
  }

  // Función para eliminar un perro por su ID
  let borrarPerro = async (_id) => {
    let options = {
      method: "delete",
    }
    let peticion = await fetch(`${VITE_API}/perros/id/${_id}`, options)
    let datos = await peticion.json()
    setPerros(datos)
  }
  // useEffect para cargar los perros al montar el componente
  useEffect(() => {
    pedirPerros()
  }, [])

  return (
    <>
      {/* Proveedor del contexto que comparte los gatos y la función setPerros */}
      <PerrosContent.Provider value={{ perros, setPerros }}>
        <section id="perros" className="Content">
          <h3>Nuestros Perros</h3>
          <p>
            Descubre a nuestros adorables perros, cada uno con una historia
            única y un corazón lleno de amor. Desde cachorros juguetones hasta
            compañeros leales, ofrecemos una variedad de perros que están listos
            para encontrar su hogar definitivo. Ven y conoce a tu nuevo mejor
            amigo. ¡La adopción te está esperando!
          </p>
        </section>

        {/* Sección con la lista de perros */}
        <section className="Section">
          <ul className="Section-grid">
            {perros.length === 0 && <li>No hay Perros</li>}
            {perros.length !== 0 &&
              perros.map((perro) => (
                <Perro key={perro._id} {...perro} borrarPerro={borrarPerro} />
              ))}
          </ul>
        </section>

        {/* Componente para añadir un nuevo perro */}
        <FormularioAnadirPerro />
      </PerrosContent.Provider>
    </>
  )
}

// Componente Gato para mostrar los detalles de cada perro
const Perro = (props) => {
  // Extraemos las propiedades del gato y la función borrarPerro desde las props
  const {
    imagen,
    nombre,
    raza,
    edad,
    genero,
    descripcion,
    caracter,
    _id,
    borrarPerro,
  } = props
  return (
    <>
      {/* Sección que contiene la información de un perro */}
      <section className="Section-col">
        {/* Imagen del peroo */}
        <img src={imagen} alt={`Imagen de ${nombre}`} className="Section-img" />

        {/* Lista con el nombre y raza del perro */}
        <div className="Section-col-info">
          <ul className="Section-col-info-text">
            <li className="Section-col-info-detail Name">{nombre}</li>
            <li className="Section-col-info-detail Raza">{raza}</li>
          </ul>

          {/* Lista con la edad, género y carácter del perro */}
          <ul className="Section-col-info-text">
            <li className="Section-col-info-detail Dot">{edad} años</li>
            <li className="Section-col-info-detail Dot">{genero}</li>
            <li className="Section-col-info-detail">{caracter}</li>
          </ul>
        </div>

        {/* Botones para obtener más información o eliminar al perro */}
        <div className="Section-col-btn">
          <button className="Section-col-btn-mas">
            {" "}
            <NavLink className="Mas-info" to={`/info-perros/${_id}`}>
              Más info
            </NavLink>
          </button>
          <button
            className="Section-col-btn-delete"
            onClick={() => borrarPerro(_id)}
          >
            Eliminar
          </button>
        </div>
      </section>
    </>
  )
}
