import './App.css';
import TotalProducts from "../../components/cards/totalProducts"
import TotalUsers from '../../components/cards/totalUsers'
import TotalDestacados from '../../components/cards/totalDestacados'
import ProductList from "../../components/product-list/ProductList"
import UserList from "../../components/user-list/UserList"

function Stats() {
    return (
        <div>
            <h3> Estadisticas: </h3>
            <br/>
            <div className = "card-content">
                <TotalProducts />  
                <TotalUsers /> 
                <TotalDestacados/>  
                </div>
                <br/>
                <div className = "card-content2">    
                <ProductList />
                <UserList />
            </div>
        </div>
    )
}

export default Stats