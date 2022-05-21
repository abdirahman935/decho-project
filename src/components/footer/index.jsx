import React from 'react'

import AppWrap from "../../wrapper/AppWrap";
const Footer= () => {
    return (
        <div className="py-10 overflow-hidden">
            <div className=" app__container  text-white text-center text-lg">
            <p> &copy; All rights reserved by {' '}
                <span className=" ">
                    D.E.C.H.O
                </span> team
            </p>
            </div>
        </div>
    )
}

export default AppWrap(Footer,'','app__darkBlueBg overflow-hidden');