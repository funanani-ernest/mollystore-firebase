import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductUpload from "./Componets/ProductUpload";
import ProductDisplay from "./Componets/ProductsDisplay";
import Home from "./Componets/Home";
import Login from "./Componets/Login";
import Signup from "./Componets/SignUp";
import Header from "./Componets/Layout/Header";
import Footer from "./Componets/Layout/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products">
            <ProductDisplay/>
          </Route>
          <Route path="/upload">
            <ProductUpload />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route to="/signup">
            <Signup />
          </Route>
        </Switch>
        
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
