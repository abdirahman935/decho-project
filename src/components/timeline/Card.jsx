import React from "react";


const Card = ({
                  Bg, rightSide = false,
                  leftSide = false,
                  marginTop,
                  contentDate,
                  contentText
              }) => {
    return (
        <div className={`${marginTop ? marginTop : ''} relative `}>
            {/**circle point*/}
            <div className={`w-2 h-2 rounded-full ${Bg}  -left-1 absolute`}/>
                {/**Horizontal Point**/}
                <div className={`h-[2px] w-[65px] ${Bg} absolute  top-1 
                ${rightSide && 'right-2'} ${leftSide && 'left-2'}`}/>

                {/***content*/}
                <div className={`bg-[#fff] px-4 py-2  lg:w-[300px] w-[150px] absolute -top-0 
                 rounded-lg ${rightSide && 'right-11'} ${leftSide && 'left-11'}`}>
                    <div className=" text-sm text-gray-400">
                        <p>{contentDate}</p>
                    </div>

                    <div className="mt-4">
                        <p>{contentText}</p>
                    </div>

                </div>


        </div>
    )
}
export default Card;