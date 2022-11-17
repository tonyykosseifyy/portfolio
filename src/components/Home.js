import React from "react";
import "./Home.css";
import AnimatedCursor from "react-animated-cursor";

const video = require("../assets/video.mp4");

const Home = () => {
    return (
        <div className="home">       
            <video autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4" />
            </video>
            <div>
                <h1>Hello I'm Tony Kosseify</h1>
            </div>
            <AnimatedCursor
                color="255,255,255"
                innerSize={20}
                outerSize={60}
                innerScale={1.5}
                outerScale={1.7}
                outerAlpha={3}
                outerStyle={{
                    background: "transparent",
                    border: "2px solid white",
                }}
                trailingSpeed={8}
            />
        </div>
    );
};

export default Home ;