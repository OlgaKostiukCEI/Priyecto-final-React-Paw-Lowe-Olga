import './Presentacion.css'

export const Presentacion = ( ) =>{
    return(
        <>
        <section className='Section'>
            <div className='Section-content-presentacion'>
            <div className='Section-texto-presentacion'>
                <h2 className='Section-texto-h2-presentacion'>Conoce a Nuestras Adorables Mascotas que Buscan un Hogar para Siempre</h2>
                <p className='Section-texto-p-presentacion'>¡Conoce a nuestros adorables compañeros peludos que están en busca de un hogar lleno de amor! Cada uno de ellos tiene una personalidad única y está listo para brindarte toda su lealtad y cariño. ¿Estás listo para darle a alguno de ellos un hogar para siempre?.</p>
            </div>

            <div className='Section-info-presentacion'>
                <ul className='Section-info-ul-presentacion'>
                    <li className='Section-info-li-presentacion Check'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F8B133" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                    </li>
                    <li className='Section-info-li-presentacion'>Vacunados</li>
                </ul>
                <ul className='Section-info-ul-presentacion'>
                    <li className='Section-info-li-presentacion Check'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F8B133" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                    </li>
                    <li className='Section-info-li-presentacion'>Desparasitados</li>
                </ul>
                <ul className='Section-info-ul-presentacion'>
                    <li className='Section-info-li-presentacion Check'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F8B133" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                    </li>
                    <li className='Section-info-li'>Disponen de Chip</li>
                </ul>
           
            </div>
            </div>
        
        </section>
        </>
    )
}