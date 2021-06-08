import React, { Component } from 'react'
/* import './App.css'; */
const API = "http://localhost:3000/api/userList"

export default class UserList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            users: null,
            first_name: null,

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
                  users: body.data,

                  
                }
                )}
              }) 
            
          }

    render() {
        const {users} = this.state
        console.log(users)

        let userCards
        if(users){
            userCards = (
                <div>
                    {
                    users.map((user) => (
                        <div className="">
                            <div className="">
                                <div className="">
                                    <div className="">
                                        {   user.first_name   } {   user.last_name   }
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
                                <h3 className="">Listado de usuarios:</h3>
                            </div>
                            <div className="product-name-list">
                               {userCards} 
                        
                            </div>
                        </div>
                    </div>
    )
}
}

