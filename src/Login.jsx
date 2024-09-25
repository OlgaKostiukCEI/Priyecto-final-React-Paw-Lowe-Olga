import { useState, useRef } from "react";
import {useNavigate} from "react-router-dom"
import './Login.css'
export const Login = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)
  const loginFormRef = useRef(null);
  const formSubmit = async (e) => {
    e.preventDefault()

    const { user, pass } = loginFormRef.current

    const {VITE_API} =import.meta.env;

    const nuevo = {
      user: user.value,
      pass: pass.value,
    }

    let controller = new AbortController()
    let options = {
      method: "post",
      body: JSON.stringify(nuevo),
      headers: {
        "Content-type": "application/json",
      },
      signal : controller.signal
    }

    const buscar = await fetch(`${VITE_API}/users`, options)
    const respuesta = await buscar.json()
     
      if (respuesta ){
        navigate('/home')
      }else {
        setIsLogin(null)
      }

  }

  return (
    <>
      <section className="Banner">

        <div className="Banner-container">
            <img src="Logo.png" alt="logo" className="Banner-logo" />
            <div className="Iniciar-sesion">
                <h2 className="Iniciar-sesion-h2">Iniciar Sesion</h2>
                <form ref={loginFormRef} onSubmit={formSubmit} className="Iniciar-sesion-form">
                    <input type="text" name="user" placeholder="Usuario" className="Input" />
                    <input type="text" name="pass" placeholder="Contraseña" className="Input" />
                    <input type="submit" value="Acceder" className="btn-submit" />
                </form>
                {isLogin === null && <p className="Mensaje Erroneo">Usuario o contraseña no validos</p>}
            
        </div>

        </div>

       
    
      </section>
     

    </>
  );
};
