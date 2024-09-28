
import { useEffect, useState } from 'react';
import './Info.css'
import { Link, useParams } from 'react-router-dom';

export const Info =() => {
    const [info,setInfo] =useState ([])
    const {_id} = useParams()
    const {VITE_API} = import.meta.env;

    let pedirInfo =async () => {
        let peticion = await fetch(`${VITE_API}/gatos/id/${_id}`)
        let datos =await peticion.json()
        setInfo(datos)
        console.log(datos)
    }

    useEffect(()=>{
        pedirInfo()
    }, [_id])

    return(
        <>
        <ul>
       
        <Texto key= {info._id} {...info}/>
          
        </ul>
    
        </>
    )

}

const Texto = (props)=>{

    const {imagen,  nombre, raza, edad, genero, descripcion, caracter} = props
return(
    <>
           <section className='Info' >
            <div className='Info-wrapper'>
                <img src={imagen} alt={`Imagen de ${nombre}`}  className='Info-img'/>
            </div>

            <div className='Info-col'>
                <p className='Descriptoin'>{descripcion}</p>
                <div className='Info-col-detail'>
                    <ul className='Info-col-detail-text'>
                        <li className='Info-col-detail-text-data'> Raza: {raza}</li>
                        <li className='Info-col-detail-text-data'> Genero: {genero}</li>
                    </ul>
                    <ul>
                        <li>Edad: {edad}</li>
                        <li>Caracter: {caracter}</li>
                    </ul>

                </div>
            </div>
       </section>
    </>
)
}