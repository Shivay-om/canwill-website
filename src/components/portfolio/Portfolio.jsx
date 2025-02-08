import React, { useState } from 'react'
import dani from '../../assets/dani.jpg'
import { Link, Outlet } from 'react-router-dom';
import cardData from './PortfolioData'



const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Projects");

    const filteredCards =
        selectedCategory === "All Projects"
            ? cardData
            : cardData.filter((card) => card.category === selectedCategory);

    return (
        <div>
            <div className="p-5 md:p-10">
                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {["All Projects", "Residential", "Commercial", "Architecture", "Labs"].map(
                        (category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`py-2 px-4 text-lg md:text-xl font-custom font-medium tracking-wider rounded-lg ${selectedCategory === category
                                    ? " text-[#00b8b8]"
                                    : " text-gray-700 hover:text-[#00b8b8]"
                                    } transition-all`}
                            >
                                {category}
                            </button>
                        )
                    )}
                </div>

                {/* Cards */}
                <div className="flex flex-wrap justify-center items-center mx-auto gap-2">
                    {filteredCards.map((data) => (
                        <div
                            key={data.id}
                            className="relative w-full h-[300px] md:w-[410px] md:h-auto group overflow-hidden border-red-600"
                        >
                            <img
                                src={data.imageSrc}
                                alt={data.altText}
                                className="w-full h-[297px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <Link>
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h1 className="text-xl md:text-2xl font-medium tracking-wider">{data.title}</h1>
                                    <p className="mt-2 text-sm md:text-base">{data.description}</p>
                                    {/* <Link
                                        to={data.link}
                                        className="mt-4 bg-[#00b8b8] hover:bg-[#00b8b8d1] text-white py-2 px-4 rounded-lg"
                                    >
                                        Read More
                                    </Link> */}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Portfolio
