import React, { Component } from 'react'
import './App.css';
const API = "http://localhost:3000/api/productList"

export default class ProductList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            categories: null,
            lastProduct: null,
            products: null,
            users: null,

          }
        }

    componentDidMount() {
            // acá le vamos a pegar a la api (SIEMPRE!)
            fetch(API)
             .then(res => res.json())
             .then(body => {
                // guardamos la data que viene de la API al state
               /*  console.log(body) */
                if(body){
                this.setState({
                  products: body.data,

                  
                }
                )}
              }) 
            
          }

    render() {
        const {products} = this.state
        console.log(products)

        let productCards
        if(products){
           productCards = (
                <div>
                    {
                    products.map((product) => (
                        <div className="">
                            <div className="">
                                <div className="">
                                    <div className="">
                                        {   product.title   }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div>
            )
          
        }

    return ( 
        
					<div className="">						
                        <div className="">
                            <div className="">
                                <h3 className="">Listado de paquetes:</h3>
                            </div>
                            <div className="product-name-list">
                               {productCards} 
                        
                            </div>
                        </div>
                    </div>
    )
}
}





/* 


const destacadosTotales = products.data.filter((product) => product.destacado=="SI")
console.log(destacadosTotales)
 return this.setState({ products: destacadosTotales.title }); */
