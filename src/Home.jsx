import { Banner } from './Components/Banner'
import { Header } from './Components/Header'
import { Gatos } from './Gatos'
import './Home.css'
import { Perros } from './Perros'

export const Home = ()=>{

    return(
    <>
    <Header/>
    <Banner/>
    <Gatos/>
    <Perros/>
    </>
    )
  
}