import { useState, createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"
import "./Header.css"

// Creamos un contexto para el componente Header
const HeaderContext = createContext()

// Componente principal Header
export const Header = () => {
  const [menu, setMenu] = useState(false)

  // Función para abrir/cerrar el menú
  const toggleMenu = () => {
    setMenu(!menu)
  }

  // Información del menú
  const info = [
    { id: 0, texto: "Sobre Nosotros", anchor: "#sobre-nosotros" },
    { id: 1, texto: "Gatos", anchor: "#gatos" },
    { id: 2, texto: "Perros", anchor: "#perros" },
    { id: 3, texto: "Contacto", anchor: "#contacto" },
  ]

  return (
    <HeaderContext.Provider value={{ toggleMenu, info, menu }}>
      <header className="Header">
        <Logo />
        <Boton />
        <Nav />
      </header>
    </HeaderContext.Provider>
  )
}

// Componente Logo
const Logo = () => {
  const navigate = useNavigate()

  const logoClick = () => {
    // Redirige a /home al hacer clic en el logo
    navigate("/home") 
  }

  return (
    <img
      src="/Logo-yellow.png"
      alt="logo"
      className="Logo"
      onClick={logoClick}
    />
  )
}

// Componente Boton para abrir/cerrar el menú
const Boton = () => {
  const { toggleMenu } = useContext(HeaderContext)
  return (
    <button className="Header-button" onClick={toggleMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon iconTabler iconTablerMenu2"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6l16 0" />
        <path d="M4 12l16 0" />
        <path d="M4 18l16 0" />
      </svg>
    </button>
  )
}

// Componente Nav para la navegación del menú
const Nav = () => {
  const { menu, info } = useContext(HeaderContext)
  return (
    <nav className={`Header-nav ${menu ? "isActive" : ""}`}>
      <ul className="Header-ul">
        {info.map((eachInfo) => (
          <Li key={eachInfo.id} {...eachInfo} />
        ))}
        <Logout /> {/* Añadimos el botón de Logout */}
      </ul>
    </nav>
  )
}

// Componente Li para cada enlace del menú
const Li = (props) => {
  const { texto, anchor } = props
  return (
    <li className="Header-li">
      <a href={anchor}>{texto}</a>
    </li>
  )
}

// Componente Logout para cerrar sesión
const Logout = () => {
  const navigate = useNavigate()

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem("login")
    console.log("Cerrando sesión...")
    // Redirigirmos a la página de login
    navigate("/")
  }

  return (
    <li className="Header-li">
      <img
        src="/logout-icon.png"
        alt="Cerrar sesión"
        className="Logout-icon"
        onClick={handleLogout}
      />
      <span className="Logout-text" onClick={handleLogout}></span>
    </li>
  )
}
