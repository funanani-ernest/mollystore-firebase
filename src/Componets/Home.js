import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../src/Firebase';
import './Home.css';
import {NavLink } from 'react-router-dom/cjs/react-router-dom.min';
 
const Home = () => {
 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])
 

    return (
      <div className="home">
        <div className="home-content">
          <span>
            Welcome to Molly's Online Store, where elegance meets affordability.
            <br />
            We take pride in offering a curated selection of exquisite jewelry
            that captures <br />
            the essence of timeless beauty. Our passion for pearls and bracelets
            is evident in <br />
            every piece we present to you.
          </span>
          <NavLink to="/products" className="navlink-customs">
          <p>SHOP NOW</p>
          </NavLink>
        </div>
      </div>
    );
  };
  

 
export default Home
 