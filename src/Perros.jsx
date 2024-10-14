import { useEffect, useState, createContext } from "react"
import { Link, NavLink } from "react-router-dom"

import './Perros.css'
import { FormularioAnadirPerro } from "./Components/FormularioAnadirPerro"

export const PerrosContent = createContext()
export const Perros = () => {


    const [perros, setPerros] = useState([])
    const {VITE_API} =import.meta.env;


    let pedirPerros = async() =>{
        let peticion = await fetch (`${VITE_API}/perros`)
        let datos = await peticion.json()
        setPerros (datos)
      }


    let borrarPerro = async(_id)=>{
        let options = {
            method: "delete"
        }
        let peticion = await fetch (`${VITE_API}/perros/id/${_id}`, options)
        let datos = await peticion.json()
        setPerros(datos)
    }

    useEffect(()=>{
       pedirPerros();
    }, [])

    return(
        <>
        <PerrosContent.Provider value={{perros, setPerros}}>
        <section className="Content">
        <h3>Nuestros Perros</h3>
        <p>Descubre a nuestros adorables perros, cada uno con una historia única y un corazón lleno de amor. Desde cachorros juguetones hasta compañeros leales, ofrecemos una variedad de perros que están listos para encontrar su hogar definitivo. Ven y conoce a tu nuevo mejor amigo. ¡La adopción te está esperando!</p>
       </section>
       <section className="Section">
        <ul className="Section-grid">
            {perros.length === 0 && <li>No hay Perros</li>}
            {perros.length !== 0 && perros.map(perro =>
               <Perro key = {perro._id} {...perro} borrarPerro={borrarPerro}/>
            )}
        </ul>
        </section>
        <FormularioAnadirPerro/>
        </PerrosContent.Provider>
        </>
    )
}
const Perro =(props) =>{

    const {imagen, nombre, raza, edad, genero, descripcion, caracter, _id, borrarPerro} = props
    return (
        <>
        <section className="Section-col">
        
        <img src={imagen} alt={`Imagen de ${nombre}`} className="Section-img" />

        <div className="Section-col-info">
            <ul className="Section-col-info-text">
                <li className="Section-col-info-detail Name">{nombre}</li>
                <li className="Section-col-info-detail Raza">{raza}</li>
            </ul>

            <ul className="Section-col-info-text">
                <li className="Section-col-info-detail Dot">{edad} años</li>
                <li className="Section-col-info-detail Dot">{genero}</li>
                <li className="Section-col-info-detail">{caracter}</li>
            </ul>
        </div>

        <div className="Section-col-btn">
            <button className="Section-col-btn-mas"> <NavLink className="Mas-info" to={`/info-perros/${_id}`} >Más info</NavLink>

            </button>
            <button className="Section-col-btn-delete" onClick={()=>borrarPerro(_id)}>Eliminar</button>
        </div>
        </section>
        </>
    )
}
