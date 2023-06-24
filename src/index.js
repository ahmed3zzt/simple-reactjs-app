import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Nav,Footer} from "./components/index";
import {Hero,OurService,OurTeam,OurClients,Blog,Contact} from "./sections/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <Nav/>
    <Hero/>
    <OurService/>
    <OurTeam/>
    <OurClients/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
);
