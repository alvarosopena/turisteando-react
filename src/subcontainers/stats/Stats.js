import './App.css';
import TotalProducts from "../../components/cards/totalProducts"
import TotalUsers from '../../components/cards/totalUsers'
import TotalDestacados from '../../components/cards/totalDestacados'

function Stats() {
    return (
        <div className = "card-content">
        
            <TotalProducts />  
            <TotalUsers /> 
            <TotalDestacados/>  
          
        </div>
    )
}

export default Stats