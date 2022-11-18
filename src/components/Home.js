import React, { useState } from "react";
import "./Home.css";
import AnimatedCursor from "react-animated-cursor";
import styled from "styled-components";
import { FiArrowRight } from 'react-icons/fi';
import Navbar from "./Navbar";

const video = require("../assets/video.mp4");

const Home = props => {
   const [ hover , setHover ] = useState(false); 
   const [ buttonHover , setButtonHover ] = useState(false); 
   const cursorProps = {
       onMouseOver: () => setButtonHover(true),
       onMouseOut : () => setButtonHover(false)
   };
    return (
        <section>
            <Navbar home setHomeHover={setHover} />
            <div className="home">       
                <video autoPlay muted loop id="myVideo">
                    <source src={video} type="video/mp4" />
                </video>

                <div>
                    <h1>Hello, I'm <NameText>Tony Kosseify</NameText></h1>
                    <h1>I'm a Frontend Web Developer </h1>
                    <Button {...cursorProps}>Check My Work <FiArrowRight className="icon" size="1.3em" style={{marginLeft:"8px", transform: buttonHover && "rotate(90deg)"}} /></Button>
                </div>
                <AnimatedCursor
                    color="255,255,255"
                    innerSize={17}
                    outerSize={60}
                    innerScale={1.2}
                    outerScale={1.4}
                    outerAlpha={3}
                    outerStyle={{
                        background: "transparent",
                        border: "2px solid white",
                    }}
                    trailingSpeed={8}
                    innerStyle={{
                        display: ( hover || buttonHover) && "none"
                    }}
                />

            </div>
        </section>
    );
};

export default Home ;



const NameText = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 2.8rem ;
`;

const Button = styled.button`
    background: transparent;
    padding: 13px 30px;
    color: white;
    cursor: pointer;
    border: 2px solid white;
    font-size: 18px;
    font-weight: bold;
    margin: 40px auto;
    letter-spacing: 2px;
    display: flex ;
    align-items: center;
    justify-content: space-between;
    transition: .2s ease-out ;
    &:hover {
        background-color: white ;
        color: #161C81 ;
    } 
`;