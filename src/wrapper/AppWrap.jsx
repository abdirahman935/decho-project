import React from "react";


const AppWrap = (Component, idName, className) => function HOC(){
    return (
        <div id={idName} className={`${className} `}>
            <Component />
        </div>
    )
}
export default AppWrap;