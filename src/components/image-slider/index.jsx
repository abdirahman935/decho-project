import React, {useEffect, useState} from "react";

import {motion} from "framer-motion";

import {GrNext, GrPrevious} from 'react-icons/gr'

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const imageLength = slides.length;

    const autoSlide = true;
    let slideInterval;
    let intervalTime = 3000;




    //auto scroll slides
    const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
    }


    const nextSlide = () => {
        setCurrent(current === imageLength - 1 ? 0 : current + 1);
        //console.log(current);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? imageLength - 1 : current - 1);

    }

    if (!Array.isArray(slides) || imageLength <= 0) {
        return null;
    }

    useEffect(() => {
        setCurrent(0)
    }, [])

    useEffect(() => {
        if (autoSlide === true) {
            auto()
        }

        return () => clearInterval(slideInterval)
    }, [current])


    return (
        <div className="lg:w-3/4 w-full h-[550px]   rounded-lg relative
        flex items-center justify-center group cursor-pointer">
            <motion.div
                className="left-arrow "
                onClick={prevSlide}
                whileInView={{opacity: 0}}
                whileHover={{opacity: 1}}
                transition={{duration: 0.85}}

            >
                <GrPrevious size={35}/>
            </motion.div>

            <motion.div
                className="right-arrow"
                onClick={nextSlide}
                whileInView={{opacity: 0}}
                whileHover={{opacity: 1}}
                transition={{duration: 0.85}}
            >
                <GrNext className="" size={35}/>
            </motion.div>

            {slides.map((slide, index) => (

                <div
                    key={index}
                    className={index === current ? 'active' : 'image-slide'}>
                    {index === current && (
                        <img

                            src={slide.imageUrl}
                            alt="Project photos"
                            className="w-full h-full object-cover absolute top-0 left-0 rounded-lg"
                        />

                    )}

                </div>
            ))}

        </div>
    )
}
export default ImageSlider;