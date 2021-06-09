import Logo from "../../components/logo/Logo"
import Banner from "../../components/banner/Banner"
import ProvinciasApi from "../../components/provinciasApi/ProvinciasApi"
import { Link } from "react-router-dom"


export default function Header() {
    return (
        <>
        
            <Logo />  
            <br />
            <Link to="/">Home</Link>  | <Link to="/products">Paquetes</Link>  |  <Link to="/users">Usuarios</Link>
            <br/>
            <br />
            <Banner /> 
            <ProvinciasApi /> 
            <hr/>
       
           
              
        </>
    )
}
