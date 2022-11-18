import React, { useState } from "react";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const App = () => {
  const [ hover , setHover ] = useState(false);
  
  return (
    <div className='app'>
      <Home hover={hover} />
      <section style={{cursor:"initial"}}>
        <Navbar />
        <About />
        <div style={{minHeight:"150vh"}}></div>
      </section>

      
    </div>
  );
};

export default App;