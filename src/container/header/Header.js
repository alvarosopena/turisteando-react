import Logo from "../../components/logo/Logo"
import Banner from "../../components/banner/Banner"
import ProvinciasApi from "../../components/provinciasApi/ProvinciasApi"


function Header() {
    return (
        <>
           <Logo />  
           <Banner /> 
        <ProvinciasApi /> 
              
        </>
    )
}

export default Header