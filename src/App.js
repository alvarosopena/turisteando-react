import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./container/header/Header"
import Home from "./container/home/Home"
import Footer from "./container/footer/Footer"
import NotFound from "./components/not-found/404"
import Products from "./components/products/Products"
import Users from "./components/users/Users"
import ProductDetail from "./components/product-detail/ProductDetail"


import './App.css';

export default class App extends Component {
  render() { 
  
    return (
      <main>
        <div className="App">
            <section className="App-header">
              <Header />
              <Switch>

                <Route path="/" exact >
                  <Home />
                </Route>

                <Route path="/products" exact >
                  <Products />
                </Route>

                <Route path="/products/:id" exact >
                  <ProductDetail />
                </Route>

                <Route path="/users" exact >
                  <Users />
                </Route>


                <NotFound />
              </Switch>

            </section>

            <section className="footer">
              <Footer />  
            </section>

        </div>
      </main>
    )
  }
}

