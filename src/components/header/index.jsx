import React, {useState} from "react";

//icons
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

import {motion} from "framer-motion";
import Deadline from "../deadline";



const links = [
    {
        link: 'home',
        label: 'Home'
    },
    {
        link: 'project',
        label: 'Project'
    },
    {
        link: 'timeline',
        label: 'Timeline'
    },
    {
        link: 'team',
        label: 'Team'
    },

]


const Header = () => {

    const [toggle, setShowToggle] = useState(false)
    const [linkActive, setLinkActive] = useState('Home');

    const [isOpen, setIsOpen] = useState(false);




    return (
        <div className="app__whiteBg fixed z-40	 left-0 top-0 right-0 ">
            <nav className="app__container flex  items-center justify-between  px-8 py-3">
                <div className="">
                    <a href="/" className="text-xl">
                        <span>D.E.C.H.O</span>
                    </a>
                </div>


                <div className="flex items-center justify-between grow hidden lg:inline-flex ">
                    <ul className="flex items-center  ml-auto  mr-auto  ">
                        {links.map((item, index) => (
                            <li key={index} className={` 
                                   ${linkActive === item.label ? 'link-active' : 'text-slate-500 '} 
                                        ease-in-out ml-5 px-4 py-1 
                                        lg:hover:border-b lg:hover:border-[#2d314d]
                                        lg:text-lg `}>
                                <a href={`#${item.link}`} onClick={() => setLinkActive(item.label)}>{item.label}</a>
                            </li>
                        ))}

                    </ul>

                    <div className="bg-[#2d314d] bg-opacity-75 hover:bg-opacity-100 transition
                    duration-500  px-4 py-2 rounded-full lg:hover:font-bold">
                        <button
                            style={{color: "#fff"}}
                            onClick={() => setIsOpen(true)}
                        >Deadline</button>
                    </div>

                    {isOpen && <Deadline setIsOpen={setIsOpen}/>}

                </div>


                {/****Mobile****/}
                <div className="lg:hidden  inline-block z-40">
                    {toggle ? (
                        <motion.div
                            className="app__whiteBg shadow-md  w-3/4 h-screen rounded-tl-lg rounded-bl-lg
                        absolute top-0 bottom-0  right-0  z-40 px-4 "
                            whileInView={{x: [200, 0]}}
                            transition={{duration: 0.75, ease: 'easeOut'}}
                        >
                            <div
                                className="bg-[#2d314d] w-10 h-10 flex items-center justify-center text-white
                            rounded-lg  ml-auto  mt-6 mr-4"
                            >
                                <AiOutlineClose
                                    size={30}
                                    color={'#fff'}
                                    onClick={() => setShowToggle(false)}
                                    className=" "
                                />

                            </div>


                            <div className="mt-5 w-full grid grid-cols-1 gap-4 ">

                                {links.map((item, index) => (
                                    <a
                                        href={`#${item.link}`}
                                        key={index}
                                        className={`hover:text-[#4636DA] transition duration-600 ease 
                                        ${linkActive === item.label ? 'text-[#4636DA]' : 'text-gray-900'} transition duration-600 
                                        ease-in-out border-b py-4 `}
                                        onClick={() => {
                                            setLinkActive(item.label)
                                            setShowToggle(false)
                                        }}
                                    >
                                        <span>{item.label}</span>
                                    </a>
                                ))}
                                {/**
                                <div className="bg-[#2d314d] w-28 text-center  px-4 py-2 rounded-full ">
                                    <button
                                        style={{color: "#fff"}}
                                        onClick={() => {
                                            setIsOpen(true)
                                            setShowToggle(false)
                                        }}
                                    >Deadline</button>
                                </div>

                                {isOpen && <Deadline setIsOpen={setIsOpen}/>}
                                 */}

                            </div>


                        </motion.div>
                    ) : (
                        <BiMenuAltRight
                            size={35}
                            color={"#fff"}
                            onClick={() => setShowToggle(true)}
                            className="bg-[#2d314d]
                        w-10 h-10 rounded-lg text-center"

                        />
                    )}


                </div>


            </nav>


        </div>
    )
}
export default Header;