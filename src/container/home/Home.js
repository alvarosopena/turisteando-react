import Stats from "../../subcontainers/stats/Stats"
import Menu from "../../subcontainers/menu/Menu"
import Index from "../../subcontainers/index/Index"
import './App.css';

function Home() {
    return (
        <>
            <div className="text">
                <br/>
                <h3>Datos actualizados:</h3>
                <br/>
                    <div className="text-2">
                        <Stats />
                    </div>    
                <br/>
                <Menu /> 
                <Index /> 
            </div>
        </>
    )
}

export default Home