import React from "react";

//wrappers
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

//component
import ImageSlider from "../image-slider";
import ProjectBanner from "../banner";


//data
import imageData from '../image-slider/imageSliderData'


const Project = () => {
    return (
        <>

            <div className=" py-9 app__wrapper">
                <div className=" mt-8 app__container px-6 py-6 flex  lg:justify-between  gap-6
                    lg:flex-row flex-col mb-0.5"
                >
                    {/**text div*/}
                    <div className=" lg:w-2/4 w-full px-6 py-2 mb-4 lg:mb-0">
                        {/**about prroject*/}
                        <h2 className="text-center text-3xl mb-5 ">Decho Project</h2>
                        <div className="flex flex-col space-y-4">

                            <p className="leading-8 lg:text-xl text-sm text-slate-600">
                                DECHO is a University of South-Eastern Norway bachelor's group. Our involvement will
                                involve
                                collecting data from the excavator in
                                partnership with Iot labs and Applied Hydrogen. Our goal is to collect and store CAN
                                bus data as well as additional sensor data in order to deliver useful information to any
                                other
                                parties involved.
                            </p>
                            <p className="leading-8 lg:text-xl text-sm text-slate-600">
                                The project is based on converting an excavator's diesel engine to a hydrogen fuel cell
                                paired with a battery in such a way that no additional upgrades or replacements are
                                necessary.
                            </p>
                        </div>
                    </div>
                    {/**image slider */}
                    <ImageSlider slides={imageData}/>

                </div>
            </div>
        </>
    )
}

export default AppWrap(MotionWrap(Project), 'Project', 'app__secLightGrayishBg');
