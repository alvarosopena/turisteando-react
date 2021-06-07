import React, {Component} from 'react';
import './App.css';
class Users extends Component {
    constructor(props){
        super(props);
        this.state ={
         users: null
        }
    };
    
    componentDidMount() {
        fetch("http://localhost:3000/api/userList")
            .then((res) => {
                return res.json();
            })
            .then((users) => {
                return this.setState({ users: users.data.length });
            })
          
    }
    

    render() {
        return(
            <div className="content-card1">
                <div className="">
                    Usuarios registrados: 
                </div>
                <div className="content-1">
                { this.state.users }
                </div>
            </div>
        )
    }
}

export default Users
