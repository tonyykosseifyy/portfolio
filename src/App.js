import React, { useState } from "react";
import './styles/App.css';
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./subcomponents/Navbar";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, animateScroll , scroller } from 'react-scroll'



const App = () => {
  const [ hover , setHover ] = useState(false);
  const scroll = link => {
    scroller.scrollTo( link , {
      duration: 1500,
      delay: 100,
      smooth: 'easeInOutQuint',
    })
  }  
  return (
    <div className='app'>
      <Home scroll={scroll} hover={hover} />
      <section style={{cursor:"initial"}}>
        <Navbar scroll={scroll} />
        
        <About />
        <div style={{minHeight:"150vh"}}></div>
      </section>

      
    </div>
  );
};

export default App;