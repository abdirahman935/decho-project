import React from 'react'
import {Project, About, Testimonial, Timeline,  Footer} from "./components";
import ProjectBanner from "./components/banner";


//components

function App() {


    return (

        <div className="overflow-hidden ">

            <ProjectBanner/>
            <Project/>
            <Timeline/>
            <About/>
            <Testimonial/>
            <Footer/>
            {/**
             */}


        </div>

    )
}

export default App
