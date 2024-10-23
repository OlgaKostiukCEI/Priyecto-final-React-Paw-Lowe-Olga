// Importación del archivo CSS para los estilos del componente

import './SobreNosotros.css'

// Componente SobreNosotros
export const SobreNosotros = ( ) =>{
    return(
        <>
        {/* Sección principal sobre la misión de la organización */}
        <section id='sobre-nosotros' className='Section-content'>
            {/* Contenedor del texto principal de la sección */}
            <div className='Section-texto'>
                <h2 className='Section-texto-h2'>Creando un Mundo Donde Cada
                Patita Encuentre un Hogar</h2>
                <p className='Section-texto-p'>Imaginamos un mundo donde cada mascota tenga un hogar lleno de amor y cuidado. Trabajamos incansablemente para conectar a los animales necesitados con familias que les brinden una segunda oportunidad. Únete a nuestra misión y sé parte del cambio que garantiza que cada patita encuentre su lugar especial.</p>
            </div>

            {/* Contenedor con estadísticas clave */}
            <div className='Section-info'>
                <ul className='Section-info-ul'>
                    <li className='Section-info-li Numeros'>16.789</li>
                    <li className='Section-info-li'>Peludos Rescatados con Éxito</li>
                </ul>
                <ul className='Section-info-ul'>
                    <li className='Section-info-li Numeros'>10.000€</li>
                    <li className='Section-info-li'>Donaciones de Alimentos</li>
                </ul>
                <ul className='Section-info-ul'>
                    <li className='Section-info-li Numeros'>150</li>
                    <li className='Section-info-li'>Voluntarios Dedicados</li>
                </ul>
           
            </div>
        
        </section>
        </>
    )
}