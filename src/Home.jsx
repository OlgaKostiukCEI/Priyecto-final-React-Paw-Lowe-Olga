import { Header } from './Components/Header'
import { Gatos } from './Gatos'
import './Home.css'
import { Perros } from './Perros'

export const Home = ()=>{

    return(
    <>
    <Header/>
    <h2>Cotenido Home</h2>
    <Gatos/>
    <Perros/>
    </>
    )
  
}