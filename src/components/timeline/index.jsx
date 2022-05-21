import React from "react";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import Card from "./Card";


const Timeline = () => {


    const timeLineData = [
        {
            Bg: 'bg-indigo-500',
            marginTop: 'mt-0',
            leftSide: true,
            contentDate: '07-12-2021',
            contentText: 'Project Initiation '
        },
        {
            Bg: 'bg-amber-500',
            marginTop: 'mt-6',
            rightSide: true,
            contentDate: '21-01-2022',
            contentText: 'First time visiting the excavator'
        },
        {
            Bg: 'bg-lime-400',
            marginTop: 'mt-24',
            leftSide: true,
            contentDate: '02-02-2022',
            contentText: 'First Presentation'
        },
        {
            Bg: 'bg-sky-400',
            marginTop: 'mt-28',
            rightSide: true,
            contentDate: '14-02-2022',
            contentText: 'Project Modification'
        },
        {
            Bg: 'bg-violet-400',
            marginTop: 'mt-48',
            leftSide: true,
            contentDate: '01-04-2022',
            contentText: 'Second Presentation'
        },
        {
            Bg: 'bg-pink-500',
            marginTop: 'mt-56',
            rightSide: true,
            contentDate: '25-04-2022',
            contentText: 'First Test at Applied Hydrogen'
        },
        {
            Bg: 'bg-fuchsia-300',
            marginTop: 'mt-72',
            leftSide: true,
            contentDate: '09-05-2022',
            contentText: 'Third Test at Applied Hydrogen'
        },

    ]


    return (

        <div className="app__wrapper ">
            <div className=" app__container flex flex-col items-center ">
                <h1 className="mb-8 lg:text-xl font-bold">Timeline</h1>

                <div
                    className="relative bg-[#002b42] w-[1px] h-full  ">
                    {timeLineData.map((timeline, index) => (
                        <Card
                            key={index}
                            marginTop={timeline.marginTop}
                            Bg={timeline.Bg}
                            leftSide={timeline.leftSide}
                            rightSide={timeline.rightSide}
                            contentDate={timeline.contentDate}
                            contentText={timeline.contentText}
                        />
                    ))}


                </div>

            </div>
        </div>
    )
}
export default AppWrap(MotionWrap(Timeline), 'timeline', 'bg-neutral-200 bg-opacity-60 overflow-hidden');