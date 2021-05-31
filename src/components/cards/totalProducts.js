import React, {Component} from 'react';

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
                <div className="">
                    <div className="">
                        Paquetes disponibles:
                    </div>
                    <div className="">
                        {
                            this.state.products   
                        }
                    </div>
                </div>
        )
    }
}

export default Products
