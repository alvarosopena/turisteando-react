import React, {Component} from 'react';
import './App.css';
class Products extends Component {
    constructor(props){
        super(props);
        this.state ={
            
            products: null
        }
    };
    
    componentDidMount() {
        fetch("http://localhost:3000/api/productList")
            .then((res) => {
                return res.json();
            })
            .then((products) => {
                return this.setState({ products: products.data.length });
            })
            
    }
    

    render() {
        return(
                <div className="content-card1">
                    <div className="">
                        Paquetes disponibles:
                    </div>
                    <div className="content-1">
                        {
                            this.state.products   
                        }
                    </div>
                </div>
        )
    }
}

export default Products
