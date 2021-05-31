import React, { Component } from "react"

const API = "http://localhost:3000/api/productList"

export default class Products extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: null,
            title: null,
            image: null,
            description: null,
            price: null

        }
    }

    componentDidMount() {
            // acá le vamos a pegar a la api (SIEMPRE!)
        fetch(API)
            .then(res => res.json())
            .then(body => {
                // guardamos la data que viene de la API al state
                //   console.log(body)
                if(body){
                    this.setState({
                    products: body.data,

                    })
                }
            }) 
            
    }

    render() {
        const {products} = this.state
     //   console.log(products)

        let productCards
        if(products){
           productCards = (

                <div>
                    {
                        products.map((product) => (
                            <div className="row">
                                <div className="card-body">
                                    <h3>  { product.title } </h3>
                                    <br/>
                                    <p> <img src={"http://localhost:3000/images/destinos/"+ product.image} alt="imagen paquete" /> </p>
                                    <p> ARS$ { product.price } p/p </p>
                                    <p> { product.description }</p>
                                    <br/>
                                </div>
                              <hr/>
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
                                        <h2 className="">Nuestros paquetes</h2>
                                    </div>
                                    <hr/>
                                    <br/>
                                    <div className="card-body">
                                    {productCards}
                                    </div>
                                </div>
                            </div>
        )
    }
}