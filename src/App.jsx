import React from 'react'
import {Project, About, Contact, Testimonial} from "./components";
import ProjectBanner from "./components/banner";

//components

function App() {


    return (

        <div className="">
            {/**project Banner*/}
            <ProjectBanner/>
            <Project/>
            <About/>
            <Testimonial/>
            {/**Timeline**/}
            {/**Contact**/}
            {/**Footer**/}
            {/**Deadline**/}


        </div>

    )
}

export default App
