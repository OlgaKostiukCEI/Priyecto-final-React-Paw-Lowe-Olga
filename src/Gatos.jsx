import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import './Gatos.css'

export const Gatos = () => {


    const [gatos, setGatos] = useState([])
    const {VITE_API} =import.meta.env;


    let pedirGatos = async() =>{
        let peticion = await fetch (`${VITE_API}/gatos`)
        let datos = await peticion.json()
        setGatos (datos)
      }

    let borrarGato = async (_id) => {
        let options = {
            method: "delete"
        }
        let peticion = await fetch(`${VITE_API}/gatos/id/${_id}`, options)
        let datos = await peticion.json()
        setGatos(datos)
    }

    useEffect(()=>{
       pedirGatos();
    }, [])

    return(
        <>
        <section className="Content">
        <h3>Nuestros Gatos</h3>
        <p>Descubre a nuestros adorables felinos en busca de un hogar amoroso. Cada uno tiene su propia personalidad única, desde cariñosos y dulces hasta juguetones y aventureros.</p>
        </section>
   
    
        <section className="Section">
            <ul className="Section-grid">
            {gatos.length === 0 && <li>No hay Gatos</li>}
            {gatos.length !== 0 && gatos.map(gato =>
               <Gato key = {gato._id} {...gato} borrarGato={borrarGato}/>
            )}
            </ul>
        </section>
        </>
    )
}
const Gato =(props) =>{

    const {imagen,  nombre, raza, edad, genero, descripcion, caracter,borrarGato, gato, _id} = props
    return (
        <section className="Section-col"> 

            <img src={imagen} alt={`Imagen de ${nombre}`} className="Section-img" />

            <div className="Section-col-info ">
                <ul className="Section-col-info-text">
                    <li className="Section-col-info-detail Name ">{nombre}</li>
                    <li className="Section-col-info-detail Raza">{raza}</li>
                </ul>

                <ul className="Section-col-info-text ">
                    <li className="Section-col-info-detail Dot">{edad}</li>
                    <li className="Section-col-info-detail Dot">{genero}</li>
                    <li className="Section-col-info-detail">{caracter}</li>
                </ul>
            </div>

            <div className="Section-col-btn">
            <button className="Section-col-btn-mas"><NavLink to={`/info/${_id}`}>Más información</NavLink>  </button>
                
            <button className="Section-col-btn-delete"onClick={() => borrarGato(_id)}>Eliminar</button>
            </div>
        </section>
 

    )
}
