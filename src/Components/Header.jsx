import { useState, createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const HeaderContext = createContext()

export const Header = () => {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }

    const info = [
        { id: 0, texto: 'Sobre Nosotros', anchor: '#sobre-nosotros' },
        { id: 1, texto: 'Gatos', anchor: '#gatos' },
        { id: 2, texto: 'Perros', anchor: '#perros' },
        { id: 3, texto: 'Contacto', anchor: '#contacto' },
    ]

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

const Logo = () => {
    const navigate = useNavigate();  // Crea una instancia de navigate

    const logoClick = () => {
        navigate('/home');  // Redirige a la página /home
    };

    return (
        <img  src="/Logo-yellow.png" alt="logo" className='Logo' onClick={logoClick}  // Asigna la función al evento onClick
/>
    )
}

const Boton = () => {
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

const Nav = () => {
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

const Li = (props) => {
    const { texto, anchor } = props;
    return (
        <li className='Header-li'>
            <a href={anchor}>{texto}</a>
        </li>
    );
}
