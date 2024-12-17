import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import product1 from '../../assets/c1.webp'
import product2 from '../../assets/c2.png'
import product3 from '../../assets/c3.png'
import product4 from '../../assets/c4.png'
import product5 from '../../assets/c5.png'
import product6 from '../../assets/c6.webp'
import product7 from '../../assets/c7.webp'
import product8 from '../../assets/c8.webp'




const slides = [
    {
        image: product1,

        text: 'House',
        highlights: ["Revolutionizing", "Across", "and", "Industry"],
        italics: ["Safety", "Solutions"]
    },
    {
        image: product2,

        text: 'Lab',
        highlights: ["Trusted", "Safety", "and", "Industry"]
    },
    {
        image: product3,

        text: 'Neuberg Oncopath',
        highlights: ["Minimize", "Safety", "AirBio",]
    },
    // {
    //     image: product4,
    //     text: '',

    // },
];

const Crousal = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="w-full h-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative">
                        {/* Image */}
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-[189px] md:h-screen object-cover"
                        />
                        {/* Text Overlay */}
                        <div className="absolute inset-0  bg-opacity-50 flex items-end pb-10 justify-center bottom-0 text-white text-2xl font-bold animate-slideIn  border-green-300">
                            <p className='border bg-black bg-opacity-30 px-4 rounded-md'>{slide.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Crousal
