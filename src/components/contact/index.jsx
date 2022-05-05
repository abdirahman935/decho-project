import React from "react";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

//icons
import {BsTwitter, BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md';
import {RiLinkedinFill} from 'react-icons/ri';


const Contact = () => {
    return (
        <div className="app__container my-8  px-8 py-3 bg-gray-200 ">
            <h2 className="text-3xl text-center mb-8 ">Contact Us</h2>

            <div className="grid lg:grid-rows-1 grid-rows-3 justify-center  grid-flow-col gap-12">
                <div>
                    <MdEmail size={35}/>
                </div>

            </div>

        </div>
    )
}
export default AppWrap(MotionWrap(Contact), 'Contact');