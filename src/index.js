import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Nav} from "./components/index";
import {Hero,OurService,OurTeam} from "./sections/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <Nav/>
    <Hero/>
    <OurService/>
    <OurTeam/>
    </>
);
