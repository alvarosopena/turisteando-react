import React, { Component } from "react"
import './App.css';


const API = "http://localhost:3000/api/userList"

export default class UsersInDB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            first_name: null,
            last_name: null,
            email: null,
            country: null,
            category_id: null,
            image:null
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
                    users: body.data,
                    })
                }
            }) 
    }

    render() {
        const {users} = this.state
        //console.log(users)
        let userCards
        if(users){
            userCards = (
                <div>
                    {
                        users.map((user) => (
                            <div className="row">
                                <div className="ccard-user">
                                    <h3 class="title-user">  { user.first_name } { user.last_name } </h3>
                                    <p class="imguser"> <img src={"http://localhost:3000/images/users/"+ user.image} alt="imagen usuario" width="30%" /> </p>
                                    <p> Email: { user.email   }</p>
                                    <p> Pais: { user.country }</p>
                                    <p> Categoría: { user.category_id }</p>
                                </div>
                            {/* <hr/> */}
                            </div>
                        ))
                    }
                </div>
            )
        }

        return ( 
			<div className="">						
                <div className="">
                    <h2 className="">Usuarios de nuestra App</h2>
                </div>
                <hr/>
                <div className="card-user">
                    {userCards}
                </div>
            </div>
        )
    }
}