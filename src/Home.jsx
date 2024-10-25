// Importamos hooks, componentes y funciones necesarias desde React y React Router
import { useEffect } from "react"
import { Adopcion } from "./Adopcion"
import { Beneficios } from "./Beneficios"
import { Banner } from "./Components/Banner"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { Gatos } from "./Gatos"
import "./Home.css"
import { Perros } from "./Perros"
import { Presentacion } from "./Presentacion"
import { SobreNosotros } from "./SobreNosotros"
import { useNavigate } from "react-router-dom"

// Componente principal Home
export const Home = () => {
  // Hook de navegación para redirigir a rutas diferentes
  const navigate = useNavigate()

  // useEffect para verificar si el usuario ha iniciado sesión
  useEffect(() => {
    // Comprobamos si hay un elemento 'login' en localStorage
    if (localStorage.getItem("login")) {
      console.log("Ya iniciaste la sesión")
    } else {
      console.log("No iniciaste sesión")
      navigate("/")
    }
  }, [])

  // Retornamos la estructura del componente Home
  return (
    <>
      <Header />
      <Banner />
      <SobreNosotros />
      <Presentacion />
      <Gatos />
      <Perros />
      <Beneficios />
      <Adopcion />
      <Footer />
    </>
  )
}
