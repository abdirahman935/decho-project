import React from "react";

//wrappers
import MotionWrap from "../../wrapper/MotionWrap";
import AppWrap from "../../wrapper/AppWrap";

//component
import ImageSlider from "../image-slider";



//data
import imageData from '../image-slider/imageSliderData'


const Project = () => {
    return (
        <>

            <div className=" py-9 app__wrapper overflow-hidden">
                <div className=" mt-8 app__container px-6 py-6 flex  lg:justify-between  gap-6
                    lg:flex-row flex-col mb-0.5"
                >
                    {/**text div*/}
                    <div className=" lg:w-2/4 w-full px-6 py-2 mb-4 lg:mb-0">
                        {/**about prroject*/}
                        <h2 className="text-center text-3xl mb-5 ">D.E.C.H.O</h2>
                        <div className="flex flex-col space-y-4">

                            <p className="leading-8 lg:text-xl text-sm text-slate-600">
                                D.E.C.H.O is a project in collaboration with IoT-labs and Applied Hydrogen which is about developing a data logging unit for excavators. The unit will help with troubleshooting and monitoring of an excavator that in the future will be converted to hydrogen operation.
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

export default AppWrap(MotionWrap(Project), 'project', 'app__secLightGrayishBg overflow-hidden');
