import { useState, createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

// Creamos un contexto para el componente Header
const HeaderContext = createContext()


// Componente principal Header
export const Header = () => {

    // Estado 'menu' que indica si el menú está abierto o cerrado, y una función 'setMenu' para actualizar su valor
    const [menu, setMenu] = useState(false)

    // Función que alterna el estado del menú (abre/cierra)
    const toggleMenu = () => {
        setMenu(!menu)
    }

    // Array de información del menú, con cada objeto conteniendo el texto del enlace y su ancla (id de destino)
    const info = [
        { id: 0, texto: 'Sobre Nosotros', anchor: '#sobre-nosotros' },
        { id: 1, texto: 'Gatos', anchor: '#gatos' },
        { id: 2, texto: 'Perros', anchor: '#perros' },
        { id: 3, texto: 'Contacto', anchor: '#contacto' },
    ]

    // Retornamos el contexto que contiene la función y la información del menú
    return (
        <HeaderContext.Provider value={{ toggleMenu, info, menu }}>
            <header className='Header'>
                <Logo />
                <Boton />
                <Nav /> 
            </header>
        </HeaderContext.Provider>
    );
}

// Componente Logo
const Logo = () => {
    const navigate = useNavigate();  // Crea una instancia de navigate

    const logoClick = () => {
        navigate('/home');  // Redirige a la página /home
    };

    return (
        // Asignamos la función al evento onClick
        <img  src="/Logo-yellow.png" alt="logo" className='Logo' onClick={logoClick}  
/>
    )
}

// Componente Boton para abrir/cerrar el menú
const Boton = () => {

    // Obtenemos la función toggleMenu desde el contexto
    const { toggleMenu } = useContext(HeaderContext)
    return (
        <button className='Header-button' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon iconTabler iconTablerMenu2" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
            </svg>
        </button>
    );
}

// Componente Nav para la navegación del menú
const Nav = () => {

    // Obtenemos el estado 'menu' y la información del contexto
    const { menu, info } = useContext(HeaderContext);
    return (
        <nav className={`Header-nav ${menu ? 'isActive' : ''}`}>
            <ul className='Header-ul'>
                {info.map(eachInfo => 
                    <Li key={eachInfo.id} {...eachInfo} />
                )}
            </ul>
        </nav>
    );
}

// Componente Li para cada enlace del menú
const Li = (props) => {

    // Obtenemos 'texto' y 'anchor' de las props recibidas
    const { texto, anchor } = props;
    return (
        <li className='Header-li'>
            <a href={anchor}>{texto}</a>
        </li>
    );
}
