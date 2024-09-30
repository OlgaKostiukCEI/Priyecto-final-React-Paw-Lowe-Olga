import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Info.css'
import { Header } from './Components/Header'



export const Info = () => {
    const { _id } = useParams();  // Obtén el _id de los parámetros de la URL
    const [info, setInfo] = useState(null)  // Inicializar con null ya que esperamos un objeto
    const { VITE_API } = import.meta.env

    // Función para obtener la información del gato
    const pedirInfo = async () => {
        let peticion = await fetch(`${VITE_API}/gatos/id/${_id}`)
        let datos = await peticion.json()
        setInfo(datos)  // Guardamos la información del gato
    }

    useEffect(() => {
        pedirInfo()
    }, [_id])  // Se vuelve a ejecutar cuando cambia _id

    return (
        <>
            {/* Mostrar mensaje de carga si la info no está lista */}
            {!info ? <p>Cargando...</p> : <Texto {...info} />} 
        </>
    );
}

const Texto = (props) => {
    const { imagen, nombre, raza, edad, genero, descripcion, caracter } = props

    return (
        <>
        <Header/>
        
        <section className='Info'>
            <div className='Info-wrapper'>
                <img src={imagen} alt={`Imagen de ${nombre}`} className='Info-img' />
            </div>

            <div className='Info-col'>
                <h1 className='Info-col-nombre'>{nombre}</h1>
                <p className='Info-col-description'>{descripcion}</p>
                <div className='Info-col-detail'>
                    <ul className='Info-col-detail-text'>
                        <li className='Info-col-detail-text-data'><b>Raza:</b> {raza}</li>
                        <li className='Info-col-detail-text-data'><b>Género:</b> {genero}</li>
                    </ul>
                    <ul className='Info-col-detail-text'>
                        <li className='Info-col-detail-text-data'><b>Edad: </b>{edad}</li>
                        <li className='Info-col-detail-text-data'><b>Carácter:</b> {caracter}</li>
                    </ul>
                </div>
                <span>*Se entrega con contrato de adopción, con chip, vacunada, desparasitada y con compromiso de esterilización.</span>
            </div>
        </section>


        </>

    )
}
