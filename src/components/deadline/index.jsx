import React, {useState, useEffect} from "react";


const Deadline = ({setIsOpen}) => {




    return (
        <div
            className="absolute top-0 left-0 z-40 hidden md:inline-block"
            onClick={() => setIsOpen(false)}
        >


            <div className=" w-screen h-screen bg-[#222] bg-opacity-60 fixed z-40  flex justify-center">
                <div
                    className="w-[800px] h-[300px] bg-neutral-300  rounded-lg mx-auto my-auto
                        flex flex-col px-12 py-8 relative"
                >

                    <div className="w-12 h-12 flex items-center justify-center absolute right-10
            z-40 bg-opacity-40 bg-opacity-60 app__darkBlueBg rounded-lg
             transition duration-600 ease-in-out cursor-pointer">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-white  "
                        >
                            X
                        </button>
                    </div>

                    <div className="text-center text-2xl font-bold  ">
                        <h1>Project Deadline</h1>
                    </div>

                    {/***body*/}
                    <div className="w-full  bg-transparent  bg-opacity-40 rounded-lg text-slate-700 my-auto px-6 py-2">

                        <div className="flex items-center justify-between ">

                            <div className="px-6 py-2 border-r border-[#2d314d]  w-full ">
                                <div className=" text-xl mb-5 px-3 font-semibold text-left">
                                <h2>
                                    USN EXPO
                                </h2>

                                </div>

                                <div className="flex items-center  justify-center">
                                    <h1
                                        className="px-6 py-2 bg-[#2d314d] text-white rounded-full mr-4
                                        text-xl "
                                    >
                                        <p>25</p>
                                    </h1>
                                    <p className="text-xl ">May</p>
                                </div>
                            </div>


                            <div className="px-6 py-2 border-r border-[#2d314d]  w-full">
                                <div className=" text-xl mb-5 px-3 font-semibold text-left">

                                <h2>3. Presentation</h2>
                                </div>

                                <div className="flex items-center  justify-center  ">
                                    <h1
                                        className="px-6 py-2 bg-[#2d314d] text-white rounded-full mr-4
                                        text-xl  "
                                    >
                                        <p>1</p>
                                    </h1>
                                    <p className="text-xl ">June</p>
                                </div>
                            </div>


                            <div className="px-6 py-2   w-full">
                                <div className="text-lg mb-5 px-3 font-semibold text-left">
                                    <h2>
                                        Documentation
                                    </h2>

                                </div>

                                <div className="flex items-center  justify-center  ">
                                    <h1
                                        className="px-6 py-2 bg-[#2d314d] text-white rounded-full mr-4
                                        text-xl  "
                                    >
                                        <p>23</p>
                                    </h1>
                                    <p className="text-xl ">May</p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
export default Deadline;