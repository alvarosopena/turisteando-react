import React, { Component } from 'react'
import Products from "../../components/products/Products"
import Users from "../../components/users/Users"


export default class Menu extends Component {  
    constructor (props){
      super(props)
  
      this.state = {
        showProducts: false,
        showUsers:false
      }
  }
  
      onClickProductsButton(){
        this.setState({
          showProducts: !this.state.showProducts,
          showUsers:false
        })
        
      }
      
      onClickUsersButton(){
        this.setState({
          showUsers: !this.state.showUsers,
          showProducts: false
        })
        
      }

      render() {
        const { showProducts } = this.state
        const { showUsers } = this.state
        return (
          <main>
              <a> <button onClick={() => this.onClickProductsButton () } > VER MAS AVENTURAS! </button></a>
                { showProducts && <Products /> }
              <a> <button onClick={() => this.onClickUsersButton () } > USUARIOS </button></a>
                 { showUsers && <Users />  }
              <br  />
              <br  />
          </main>
    )
  } 
}