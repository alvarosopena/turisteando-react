import React, { Component } from "react"

const API = "https://apis.datos.gob.ar/georef/api/provincias"

export default class ProvinciasApi extends Component {

    constructor(props) {
        super(props)

        this.state = {
           
            nombre: null,

          }
        }

    componentDidMount() {
    // acá le vamos a pegar a la api (SIEMPRE!)
        fetch(API)
            .then(res => res.json())
            .then(body => {
             // guardamos la data que viene de la API al state
             //  console.log(body)
                if(body){
                     this.setState({
                        provincias: body.provincias,

                  
                    })
                }
            }) 
    }

    render() {
            const {provincias} = this.state
            
            let provincesString
            
                if(provincias){
                
                    provincesString = provincias.map((provincia) => provincia.nombre).join("-")
                    console.log(provincesString)
                    }
           
        return ( 
                      
            <div>
                <marquee> {provincesString} </marquee>
            </div>
                            
        )
    }
}

  