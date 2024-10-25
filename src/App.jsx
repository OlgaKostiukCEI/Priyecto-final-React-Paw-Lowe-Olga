import "./App.css"
import { ProtectoraContext } from "./Context/Context"
import { Home } from "./Home"
import { Info } from "./Info"
import { InfoPerros } from "./InfoPerros"
import { Login } from "./Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Definimos el componente principal App
function App() {
  return (
    // Envolvemos la aplicación con BrowserRouter para habilitar la navegación
    <BrowserRouter>
      <ProtectoraContext.Provider key={{}}>
        <>
          {/* Definimos las rutas y componentes a renderizar según la URL */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/info/:_id" element={<Info />} />
            <Route path="/info-perros/:_id" element={<InfoPerros />} />
          </Routes>
        </>
      </ProtectoraContext.Provider>
    </BrowserRouter>
  )
}

export default App
