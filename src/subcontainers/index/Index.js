import React, { Component } from 'react'
import LastProduct from "../../components/last-product/LastProduct"
import Products from "../../components/products/Products"
import './App.css';


export default class Index extends Component {  
    constructor (props){
      super(props)
  
      this.state = {
        showLastProduct: false,
        showUsers:false
      }
  }

  onClickProductsButton(){
    this.setState({
      showProducts: !this.state.showProducts,
      showLastProduct:false
    })
    
  }

  render() {
    const { showProducts } = this.state
    const { showUsers } = this.state
    return (
      <main>
        <div>
          <LastProduct />
        </div>

        <div class = "buttons">
          <a> <button onClick={() => this.onClickProductsButton () } > VER MAS AVENTURAS! </button></a>
            { showProducts && <Products /> }
          
        </div>
        
          <br  />
         {/*  <hr  /> */}
         
      </main>
)
} 
}