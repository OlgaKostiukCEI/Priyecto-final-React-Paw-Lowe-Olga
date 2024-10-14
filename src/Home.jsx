import { Banner } from './Components/Banner'
import { Header } from './Components/Header'
import { Gatos } from './Gatos'
import './Home.css'
import { Perros } from './Perros'
import { Presentacion } from './Presentacion'
import { SobreNosotros } from './SobreNosotros'

export const Home = ()=>{

    return(
    <>
    <Header/>
    <Banner/>
    <SobreNosotros/>
    <Presentacion/>
    <Gatos/>
    <Perros/>
    </>
    )
  
}