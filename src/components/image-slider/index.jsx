import React, {useEffect, useState} from "react";

import {motion} from "framer-motion";

import {GrNext, GrPrevious} from 'react-icons/gr'


//import images
import image_1 from '../../assets/sliders/image1.jpg'
import image_2 from '../../assets/sliders/image2.jpg'
import image_3 from '../../assets/sliders/image3.png'
import image_4 from '../../assets/sliders/image4.jpg'
import image_6 from '../../assets/sliders/image6.jpg'
import image_7 from '../../assets/sliders/image7.jpg'
import image_8 from '../../assets/sliders/image8.jpg'
import image_9 from '../../assets/sliders/image9.jpg'


const ImageSlider = () => {
    const images = [
        image_1,
        image_2,
        image_3,
        image_4,
    
        image_6,
        image_7,
        image_8,
        image_9
    ]
    const [current, setCurrent] = useState(0)
    const imageLength = images.length;

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

    if (!Array.isArray(images) || imageLength <= 0) {
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
        <div className="lg:w-3/4 w-full h-[550px] overflow-x-hidden  rounded-lg relative
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

            {images?.map((img, index) => (

                <div
                    key={index}
                    className={index === current ? 'active' : 'image-slide'}>
                    {index === current && (
                        <img

                            src={img}
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