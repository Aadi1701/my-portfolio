import React from "react";
import Navbar from "../navbar";
import Header from "../header";
import Skills from "../skills";
import Education from "../education";
import Experience from "../experience";
import Projects from "../projects";
import Contacts from "../contacts";

const AllLinks = () =>{
    return(
        <>
        <Navbar />
        <Header />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contacts />
        </>
    );
}

export default AllLinks;