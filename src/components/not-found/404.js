import React, { Component } from "react"
import panoramica from "../../404.jpg"


export default class NotFound extends Component {
    constructor (props){
            super(props)
    }

    render () {
        return<div> 
               <div>  
                    <img src={panoramica} className="App-logo" alt="logo" width="100%" /> 
                 </div>
                <br/>
                <hr/>
        
        </div>
    }
    
}
