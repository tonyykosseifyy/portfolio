import React, { useState } from "react";
import "../styles/Navbar.css";
import styled from "styled-components";
import { Link } from "react-scroll";
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
                <Link key={link} {...cursorProps} className="link" activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    onSetActive={""}
                    onSetInactive={""}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    onClick={() => props.scroll("about")}
                >
                    {link}
                </Link>
            ))}
        </nav>
    );
};


export default Navbar ;

