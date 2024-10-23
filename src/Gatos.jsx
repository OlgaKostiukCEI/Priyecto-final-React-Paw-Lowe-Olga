// Importamos hooks y componentes necesarios desde React y React Router
import { useEffect, useState, createContext } from "react"
import { Link, NavLink } from "react-router-dom"
import './Gatos.css'
import { FormularioAnadir } from "./Components/FormularioAnadir"

// Creamos el contexto para compartir los datos de gatos en toda la aplicación
export const GatosContent = createContext()

// Definimos el componente principal Gatos
export const Gatos = () => {

    // Estado para almacenar la lista de gatos
    const [gatos, setGatos] = useState([])
    // Obtenemos la URL base de la API desde las variables de entorno
    const {VITE_API} =import.meta.env;

    // Función para obtener la lista de gatos de la API
    let pedirGatos = async() =>{
        let peticion = await fetch (`${VITE_API}/gatos`)
        let datos = await peticion.json()
        setGatos (datos)
      }

    // Función para eliminar un gato por su ID
    let borrarGato = async (_id) => {
        let options = {
            method: "delete"
        }
        let peticion = await fetch(`${VITE_API}/gatos/id/${_id}`, options)
        let datos = await peticion.json()
        setGatos(datos)
    }
    // useEffect para cargar los gatos al montar el componente
    useEffect(()=>{
       pedirGatos();
    }, [])

    return(
        <>
        {/* Proveedor del contexto que comparte los gatos y la función setGatos */}
        <GatosContent.Provider value={{gatos, setGatos}}>
        <section id="gatos" className="Content">
        <h3>Nuestros Gatos</h3>
        <p>Descubre a nuestros adorables felinos en busca de un hogar amoroso. Cada uno tiene su propia personalidad única, desde cariñosos y dulces hasta juguetones y aventureros.</p>
        </section>

       {/* Sección con la lista de gatos */}
        <section className="Section">
            <ul className="Section-grid">
            {gatos.length === 0 && <li>No hay Gatos</li>}
            {gatos.length !== 0 && gatos.map(gato =>
               <Gato key = {gato._id} {...gato} borrarGato={borrarGato}/>
            )}
            </ul>
        </section>
        {/* Componente para añadir un nuevo gato */}
        <FormularioAnadir/>
        </GatosContent.Provider>
     
        </>
    )
}

// Componente Gato para mostrar los detalles de cada gato
const Gato =(props) =>{

    // Extraemos las propiedades del gato y la función borrarGato desde las props
    const {imagen,  nombre, raza, edad, genero, descripcion, caracter,borrarGato, gato, _id} = props
    return (
        <>
        {/* Sección que contiene la información de un gato */}
        <section className="Section-col"> 

            {/* Imagen del gato */}
            <img src={imagen} alt={`Imagen de ${nombre}`} className="Section-img" />

            {/* Lista con el nombre y raza del gato */}
            <div className="Section-col-info ">
                <ul className="Section-col-info-text">
                    <li className="Section-col-info-detail Name ">{nombre}</li>
                    <li className="Section-col-info-detail Raza">{raza}</li>
                </ul>

                {/* Lista con la edad, género y carácter del gato */}
                <ul className="Section-col-info-text ">
                    <li className="Section-col-info-detail Dot">{edad} años</li>
                    <li className="Section-col-info-detail Dot">{genero}</li>
                    <li className="Section-col-info-detail">{caracter}</li>
                </ul>
            </div>

            {/* Botones para obtener más información o eliminar al gato */}
            <div className="Section-col-btn">
            <button className="Section-col-btn-mas"><NavLink className="Mas-info" to={`/info/${_id}`} >Más info</NavLink>  </button>
            <button className="Section-col-btn-delete"onClick={() => borrarGato(_id)}>Eliminar</button>
            </div>
        </section>

    </>

    )
}

