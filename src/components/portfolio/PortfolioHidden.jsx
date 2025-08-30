import React, { useState } from 'react'
import dani from '../../assets/dani.jpg'
import { Link, Outlet } from 'react-router-dom';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardData from './PortfolioData'
import Footer from '../Footer';
import { Helmet } from "react-helmet-async";




const PortfolioHidden = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Projects");
    const [isExpanded, setIsExpanded] = useState(false);

    const filteredCards =
        selectedCategory === "All Projects"
            ? cardData
            : cardData.filter((card) => card.category === selectedCategory);

    return (
        <>
            <Helmet>
                <title>Elegant 2–3 BHK Luxury Interiors | Can Will Design, Mumbai</title>
                <meta name="description" content="Discover bespoke 2–3 BHK interiors in Mumbai. Crafted for discerning homeowners, every Can Will design reflects timeless elegance, sophistication, and refined living." />
            </Helmet>
            <div>   
                <div className="p-5 md:p-10">
                    {/* Cards */}
                    <div className="mb-5 lg:mb-10">
                        <h1 className="text-3xl md:text-5xl text-gray-700 text-center mb-3">
                            Curated Homes, Designed for Modern Living
                        </h1>

                        <p className="my-5 text-xl tracking-wide text-gray-700 lg:w-[95%] text-center mx-auto font-second">
                            "A collection of 2 & 3 BHK apartments in Mumbai, each crafted with quiet luxury, timeless design, and a deep sense of comfort."
                        </p>

                        {/* MOBILE VIEW */}
                        <div className="block md:hidden">
                            <p className="text-justify text-gray-700 text-lg">
                                At Canwill, we believe that homes are not just designed, they’re composed.
                                Each of our residential interiors tells a story of balance — between aesthetics
                                and function, luxury and livability, individuality and timelessness.
                            </p>

                            <p className="text-justify text-gray-700 text-lg mt-3">
                                Featured in leading design publications, our work stands apart for its meticulous
                                detailing and restraint, creating spaces that breathe, flow, and inspire.
                                Here, you’ll discover a glimpse of our residential projects — homes that reflect
                                the lifestyle of discerning 2 and 3 BHK homeowners who value design that feels
                                personal, elevated, and enduring.
                                {!isExpanded && (
                                    <span
                                        onClick={() => setIsExpanded(true)}
                                        className="text-blue-600 cursor-pointer ml-2"
                                    >
                                        ...Read More
                                    </span>
                                )}
                            </p>

                            {isExpanded && (
                                <>
                                    <h1 className="my-5 text-lg tracking-wide text-gray-700 font-bold lg:w-[85%] mx-auto font-second">
                                        “Why Our Homes Feel Different”
                                    </h1>

                                    <p className="text-justify text-gray-700 text-lg">
                                        Unlike template-driven interiors, we approach every residence as a bespoke canvas. Whether it’s optimizing compact 2BHK city apartments or layering textures for expansive 3BHK homes, our design philosophy is rooted in subtle sophistication. Nothing is accidental—from materiality to light, proportion to palette. This sensitivity has earned our homes recognition in Architectural Digest and Interior Design Today.
                                    </p>
                                </>
                            )}
                        </div>

                        {/* DESKTOP/TABLET VERSION (always expanded) */}
                        <div className="hidden md:block">
                            <p className="text-justify text-gray-700 text-lg">
                                At Canwill, we believe that homes are not just designed, they’re composed.
                                Each of our residential interiors tells a story of balance — between aesthetics
                                and function, luxury and livability, individuality and timelessness. Featured in
                                leading design publications, our work stands apart for its meticulous detailing
                                and restraint, creating spaces that breathe, flow, and inspire.
                            </p>

                            <h1 className="my-5 text-lg tracking-wide text-gray-700 font-bold mx-auto font-second">
                                “Why Our Homes Feel Different”
                            </h1>

                            <p className="text-justify text-gray-700 text-lg">
                                Unlike template-driven interiors, we approach every residence as a bespoke canvas.
                                Whether it’s optimizing compact city apartments or layering textures for expansive homes,
                                our design philosophy is rooted in subtle sophistication. From materiality to light,
                                proportion to palette — nothing is accidental. It’s this sensitivity that has earned
                                our homes recognition in Architectural Digest and Interior Design Today.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center mx-auto gap-2">
                        {filteredCards
                            .filter((data) => data.category === "Residential") // ✅ Only Residential
                            .map((data) => (
                                <div
                                    key={data.id}
                                    className="relative w-full h-[300px] md:w-[410px] md:h-auto group overflow-hidden"
                                >
                                    {/* <h1>“Curated omes, Designed for Modern Living”</h1> */}
                                    <img
                                        src={data.imageSrc}
                                        alt={data.altText}
                                        className="w-full h-[297px] object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <Link to={data.link}>
                                        <div className="absolute inset-0  flex flex-col justify-end items-center text-center text-white p-4 opacity-100 transition-opacity duration-300">
                                            <h1 className="text-xl md:text-xl font-medium   tracking-wider bg-black bg-opacity-20 shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_6px_6px] px-2"
                                            >
                                                {data.title}
                                            </h1>
                                            <p className="mt-2 text-sm md:text-base">{data.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}                         
                    </div>

                    <div>
                        <p className='text-justify text-gray-700 text-lg my-5'>Our residential portfolio is a window into what thoughtful design can achieve. But no two families, no two homes are alike. That’s why we listen, adapt, and craft every detail around you. Whether you’re moving into your first 2BHK or upgrading to a spacious 3BHK, our process is about creating interiors that feel intimate, functional, and quietly extraordinary.</p>
                    </div>
                </div>

                <div className='bg-[#f7f7f7] tracking-wide p-10 mb-5'>
                    <div className=' flex flex-col justify-center items-center'>
                        <h1 className='text-2xl text-center font-medium tracking-wide'>Start a conversation about your project today!</h1>
                        <div className=' lg:gap-6 flex flex-col justify-center items-center lg:flex-row'>
                            <Link to='/getQuote' onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                                <button className='mt-8 border border-black rounded-sm hover:bg-black hover:text-white bg-transparent bg-opacity-50 p-2 px-4'>Get a Free Consultation
                                    <FontAwesomeIcon icon={faGreaterThan} className='ml-2' />
                                </button>
                            </Link>

                            <Link to='/about' onClick={() => {
                                window.scrollTo(0, 0);
                            }}>
                                <button className='mt-8 border border-black rounded-sm hover:bg-black hover:text-white bg-transparent bg-opacity-50 p-2 px-4'>Meet our Founders
                                    <FontAwesomeIcon icon={faGreaterThan} className='ml-2' />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>

    )
}

export default PortfolioHidden
