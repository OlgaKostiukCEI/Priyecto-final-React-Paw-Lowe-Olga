import { useEffect } from 'react'
import { Adopcion } from './Adopcion'
import { Beneficios } from './Beneficios'
import { Banner } from './Components/Banner'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Gatos } from './Gatos'
import './Home.css'
import { Perros } from './Perros'
import { Presentacion } from './Presentacion'
import { SobreNosotros } from './SobreNosotros'
import { useNavigate } from 'react-router-dom'

export const Home = ()=>{

    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('login')){
            console.log('Ya iniciaste la sesión')
        }else{
            console.log('No iniciaste sesión')
            navigate('/')
        }
    },[])

    return(
    <>
    <Header/>
    <Banner/>
    <SobreNosotros/>
    <Presentacion/>
    <Gatos/>
    <Perros/>
    <Beneficios/>
    <Adopcion/>
    <Footer/>
    </>
    )
  
}