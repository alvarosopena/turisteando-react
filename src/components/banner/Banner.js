import React, { Component } from "react"
import panoramica from '../../pano3.jpg'


export default class Banner extends Component {
    constructor (props){
            super(props)
    }

    render () {
        return <div> 
         
            <div>  
            <img src={panoramica} className="App-logo" alt="logo" width="90%" /> 
            </div>
            <br/>
            <hr/>
        
        </div>
    }
    
}