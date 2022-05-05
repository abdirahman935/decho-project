import React from "react";
import AppWrap from "../../wrapper/AppWrap";


import IOT from '../../assets/images/iot.png'
import APPLY from '../../assets/images/logo.gif'
import USN from '../../assets/images/usn.png'
import MotionWrap from "../../wrapper/MotionWrap";

const Testimonial = () => {

    const logos = [
        {
            image: IOT,
            link: "http://iot-labs.no/",
            name: "iot"
        },
        {
            image: USN,
            link: "https://www.usn.no/",
            name: 'usn'
        },
        {
            image: APPLY,
            link: "https://no.appliedhydrogen.no/",
            name: 'apply'
        }
    ]

    return (
        <div className="app__container app__wrapper  ">
            <h2 className="text-center text-3xl font-semibold mb-5">
            </h2>

            <div className="px-4  w-4/5 ml-auto mr-auto flex-col lg:flex-row flex items-center
            lg:justify-between">
                {logos.map((logo, index) => (
                    <a href={logo.link} key={index} className="w-[300px] my-10">
                        <img
                            src={logo.image}
                            alt={logo.name}
                            className="w-full object-cover h-full"
                        />
                    </a>
                ))}
            </div>

        </div>
    )
}
export default AppWrap(MotionWrap(Testimonial), '', 'app__secLightGrayishBg');