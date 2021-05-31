/* import React, { Component } from 'react' */

import './App.css';
import Header from "./container/header/Header"
import Home from "./container/home/Home"
import Footer from "./container/footer/Footer"



function App() {
  return (
    <div className="App">
            <section className="App-header">
              <Header />
              <Home />
              <h1>prueba</h1>
              </section>
              
              <section className="footer">
              <Footer />  
              </section>

    </div>
  );
}

export default App;