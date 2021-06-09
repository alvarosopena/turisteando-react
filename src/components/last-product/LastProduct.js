import React, { Component } from "react"

const API = "http://localhost:3000/api/productList"

export default class LastProduct extends Component {

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
        //guardamos la data que viene de la API al state
        //console.log(body)
        if(body){
          this.setState({
            products: body.data,

          })
        }
      }) 
             
  }

  render() {
    const {products} = this.state

    let LastProduct
      if(products){
        const LProduct = products[products.length-1]
        const {title, price, image, description} = LProduct
        //console.log(LProduct)
          LastProduct = (
              <div>
                <h3>  { title  } </h3>
                <p> ARS$ { price  } p/p </p>
                <br/>
                <img src={"http://localhost:3000/images/destinos/"+ image} width="auto" />
                <p> Descripción: { description  } </p>
              </div>
        )
      }
        
    return ( 
       
			<div className="">					
        <h2 className="App-link">Ultimo producto!: </h2>
        <hr/>
          <div>  
            {LastProduct}  
          </div>
      </div>

    )
    
  }
}