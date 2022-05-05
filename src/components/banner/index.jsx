import React from "react";
import MotionWrap from "../../wrapper/MotionWrap";
import AppWrap from "../../wrapper/AppWrap";

import Bg from '../../assets/images/b_g.jpg'

const ProjectBanner = () => {
    return (

        <div className="banner relative">
            <div className="absolute z-40 top-40 left-0 right-0 text-white
            app__container px-8 py-4  w-3/4">
                <h2 className=" mb-4 mt-16 lg:text-3xl text-lg">
                    D.E.C.H.O
                </h2>
                <p className="lg:text-xl text-lg">
                    Data recording of Excavator Canbus for Hydrogen Operation
                </p>

            </div>

        </div>


    )
}
export default AppWrap(MotionWrap(ProjectBanner), 'project', '');