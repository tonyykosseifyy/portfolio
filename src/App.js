import React, { useState } from "react";
import './styles/App.css';
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./subcomponents/Navbar";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, animateScroll as scroll , scroller } from 'react-scroll'



const App = () => {
  const [ hover , setHover ] = useState(false);
  
  return (
    <div className='app'>
      <Home hover={hover} />
      <section style={{cursor:"initial"}}>
        <Navbar />
        <Link activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={1000}
          isDynamic={true}
          onSetActive={""}
          onSetInactive={""}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          Your name
        </Link>
        <About />
        <div style={{minHeight:"150vh"}}></div>
      </section>

      
    </div>
  );
};

export default App;