import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay,  } from "swiper/modules";
import image1 from '../../assets/image1.webp'
// import image2 from '../../assets/image2.webp'
import image3 from '../../assets/image3.webp'
import sofa from '../../assets/sofa.webp'
import dhruv from '../../assets/dhruv.webp'
import image4 from '../../assets/image4.webp'
import image5 from '../../assets/image5.webp'
import image6 from '../../assets/image6.webp'
// import image7 from '../../assets/image7.webp'
import image9 from '../../assets/image9.webp'
import image10 from '../../assets/image10.webp'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";




const slides = [
    {
        image: image1,
        text: "Iyer's House",
    },
    // {
    //     image: image2,
    //     text: "Cordelier's Cafe",
    // },
    {
        image: image3,
        text: 'Dhruv Residence',
    },
    {
        image: image4,
        text: 'Powai Residence ',
    },
    {
        image: image5,
        text: 'Iyer House',
    },
    {
        image: image6,
        text: 'Dhruv Residence',
    },
    // {
    //     image: image7,
    //     text: "Cordelier's Cafe",
    // },
    {
        image: image9,
        text: 'Dhruv Residence',
    },
    {
        image: image10,
        text: 'A Girly Dream',
    },

];

const Crousal = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="w-full h-full">
            {/* Custom Navigation Buttons */}
            {/* <button className="custom-prev absolute top-1/2 left-2 z-10 transform -translate-y-1/2   p-2">
                <IoIosArrowBack size={24} />
            </button>
            <button className="custom-next absolute top-1/2 right-2 z-10 transform -translate-y-1/2   p-2">
                <IoIosArrowForward size={24} />
            </button> */}

            <Swiper
                modules={[Navigation, Pagination, Autoplay, ]}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                // pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
                // effect="fade"
                speed={1000}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative">
                        {/* Image */}
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            loading="lazy"
                            className="w-full h-full lg:h-screen object-cover"
                        />
                        {/* Text Overlay */}
                        <div className="absolute inset-0  bg-opacity-50 flex items-end pb-10 justify-center -bottom-2 md:bottom-0 text-white text-2xl animate-slideIn  border-green-300">
                            <h1 className='bg-opacity-30 text-sm md:text-3xl px-6 md:py-1 tracking-wider rounded-md drop-shadow-2xl '>{slide.text}</h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Crousal
