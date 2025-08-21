import React, { useState } from 'react'
import dani from '../../assets/dani.jpg'
import { Link, Outlet } from 'react-router-dom';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardData from './PortfolioData'
import Footer from '../Footer';



const PortfolioHidden = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Projects");

    const filteredCards =
        selectedCategory === "All Projects"
            ? cardData
            : cardData.filter((card) => card.category === selectedCategory);

    return (
        <>        <div>
           <div className="p-5 md:p-10">
    {/* Cards */}
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
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h1 className="text-xl md:text-2xl font-medium tracking-wider">
                                {data.title}
                            </h1>
                            <p className="mt-2 text-sm md:text-base">{data.description}</p>
                        </div>
                    </Link>
                </div>
            ))}
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
                    </div>
                </div>
            </div>

        </div>

            <Footer />
        </>

    )
}

export default PortfolioHidden
