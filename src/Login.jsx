// Importación de hooks necesarios desde React y React Router
import { useState, useRef, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import './Login.css'

// Componente Login
export const Login = () => {
  // Hook para la navegación
  const navigate = useNavigate()

  // Estado para manejar la validación de inicio de sesión
  const [isLogin, setIsLogin] = useState(false)

  // Referencia al formulario de inicio de sesión
  const loginFormRef = useRef(null);

  // Efecto que verifica si ya hay una sesión iniciada
  useEffect(()=>{

    // Si ya hay una sesión guardada, redirige a /home
    if (localStorage.getItem('login')){
      navigate('/home')
    }
  },[])

  // Función para manejar el envío del formulario de inicio de sesión
  const formSubmit = async (e) => {
    e.preventDefault()

    // Obtener los valores de usuario y contraseña del formulario
    const { user, pass } = loginFormRef.current
    const {VITE_API} =import.meta.env;

    // Crear un objeto con los datos de inicio de sesión
    const nuevo = {
      user: user.value,
      pass: pass.value,
    }

    // Opciones para la solicitud POST a la API
    let controller = new AbortController()
    let options = {
      method: "post",
      body: JSON.stringify(nuevo),
      headers: {
        "Content-type": "application/json",
      },
      signal : controller.signal
    }

    // Realizar la solicitud POST a la API
    const buscar = await fetch(`${VITE_API}/users`, options)  
    const respuesta = await buscar.json()
    
      // Comprobar si la respuesta es válida
      if (respuesta ){
        console.log('Haz iniciado la sesion')
        // Guardar la sesión en el localStorage
        localStorage.setItem('login', 'true')
        // Navegar a la página de inicio
        navigate('/home')
      }else {
        setIsLogin(null)
      }
  }
  // Retorno del componente
  return (
    <>
      <section className="Banner">

        <div className="Banner-container">
            <img src="Logo.png" alt="logo" className="Banner-logo" />
            <div className="Iniciar-sesion">
                <h2 className="Iniciar-sesion-h2">Iniciar Sesion</h2>

                {/* Formulario de inicio de sesión */}
                <form ref={loginFormRef} onSubmit={formSubmit} className="Iniciar-sesion-form">
                    <input type="text" name="user" placeholder="Usuario" className="Input" />
                    <input type="text" name="pass" placeholder="Contraseña" className="Input" />
                    <input type="submit" value="Acceder" className="btn-submit" />
                </form>

                {/* Mensaje de error si el inicio de sesión falla */}
                {isLogin === null && <p className="Mensaje Erroneo">Usuario o contraseña no validos</p>}
             </div>
        </div>
      </section>
    </>
  );
};
