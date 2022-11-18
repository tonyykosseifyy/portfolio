import React, { useState } from "react";
import "./Navbar.css";
import styled from "styled-components";

const links_list = ["Home", "About" , "Portfolio" , "Contact"];


const Navbar = props => {
    const [ show , setShow ] = useState(false);
    window.addEventListener("scroll" , () => {
        window.scrollY >= window.innerHeight ? setShow(true) : setShow(false);
    });
    const cursorProps = props.setHomeHover && {
        onMouseOver: () => props.setHomeHover(true),
        onMouseOut : () => props.setHomeHover(false)
    };

    return (
        <nav style={{transform: show || props.home ? "scaleY(1)" : ""}} className={`navbar` + (props.home ? " navbar-home" : "")}>
            { links_list.map( link =>  (
                <Links {...cursorProps} key={link}>{link}</Links>
            ))}
        </nav>
    );
};


export default Navbar ;

const Links = styled.a`
    color : white ;
    display: flex ;
    align-items: center;
    padding: 0 20px ;
    cursor: pointer;
    font-weight: 500 ;
    font-size: 17px ;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        bottom: 0 ;
        left: 50% ;
        background-color: white ;
        height: 2px ;
        width: 90% ;
        transform:translateX(-50%) scaleX(0) ;
        transform-origin: right;
        transition: transform .3s ease-out;
    }
    &:hover::after {
        transform:translateX(-50%) scaleX(1) ;
        transform-origin: left;
    }
`;