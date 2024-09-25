import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Gatos = () => {


    const [gatos, setGatos] = useState([])
    const {VITE_API} =import.meta.env;


    let pedirGatos = async() =>{
        let peticion = await fetch (`${VITE_API}/gatos`)
        let datos = await peticion.json()
        setGatos (datos)
      }

    useEffect(()=>{
       pedirGatos();
    }, [])

    return(
        <>
        
        <h4>contenido de listado de gatos</h4>
        <ul>
            {gatos.length === 0 && <li>No hay Gatos</li>}
            {gatos.length !== 0 && gatos.map(gato =>
               <Gato key = {gato._id} {...gato}/>
            )}
        </ul>
        </>
    )
}
const Gato =(props) =>{

    const {imagem,  nombre, raza, edad, genero, descripcion, caracter,} = props
    return (
        <ul> 
            <li>{nombre}</li>
        </ul>
 

    )
}
