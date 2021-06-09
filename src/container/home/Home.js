import Stats from "../../subcontainers/stats/Stats"
import Menu from "../../subcontainers/menu/Menu"
import Index from "../../subcontainers/index/Index"
import './App.css';

function Home() {
    return (
        <>
            <div className="text">
                <br/> 
                <Index /> 
                <Menu />
                    <div className="text-2">
                        <Stats />
                    <br />
                    </div>   
            </div>
        </>
    )
}

export default Home