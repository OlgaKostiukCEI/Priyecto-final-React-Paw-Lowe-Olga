import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Perros = () => {


    const [perros, setPerros] = useState([])
    const {VITE_API} =import.meta.env;


    let pedirPerros = async() =>{
        let peticion = await fetch (`${VITE_API}/perros`)
        let datos = await peticion.json()
        setPerros (datos)
      }

    useEffect(()=>{
       pedirPerros();
    }, [])

    return(
        <>
        
        <h4>contenido de listado de perros</h4>
        <ul>
            {perros.length === 0 && <li>No hay Perros</li>}
            {perros.length !== 0 && perros.map(perro =>
               < Perro key = {perro._id} {...perro}/>
            )}
        </ul>
        </>
    )
}
const Perro =(props) =>{

    const {imagem,  nombre, raza, edad, genero, descripcion, caracter,} = props
    return (
        <ul> 
            <li>{nombre}</li>
        </ul>
 

    )
}
