import React from 'react'
import article1 from '../../assets/image4.jpg'
// import article2 from '../../assets/Iyer.png'
import article2 from '../../assets/image1.jpg'


const Articals = () => {
    return (
        <div className='md:h-auto md:px-10 pb-5'>
            <div>
                <div className='flex justify-center items-center'>
                    <div className='w-10 border-b border-gray-700 border mr-2'></div>
                    <h1 className='text-2xl md:text-4xl text-gray-700 font-semibold mb-5 mt-5 py-5 '>Magazine Features</h1>
                </div>

                <div className='md:flex'>
                    <div className='md:p-5 md:w-[50%] mb-8 md:my-0'>
                        <div className="overflow-hidden w-4/5 mx-auto relative group rounded-lg border">
                            <a href="https://www.goodhomes.co.in/home-decor/home-tours/escape-with-an-ocean-inspired-palette-8096.amp" target='_blank' rel="noopener noreferrer">
                                <img
                                    src={article1}
                                    alt="article1"
                                    className="transition-transform duration-700 ease-out transform group-hover:scale-110"
                                />
                            </a>
                            {/* Add an overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        </div>
                        <p className='w-[90%] px-5 text-center hover:text-[#00b8b8] mt-3 mb-1 mx-auto '>Our Beautiful 4BHK Shades Of Blues got featured on GoodHomes.</p>
                        <h1 className='text-center text-sm text-gray-500'>GoodHomes, Apr 2022</h1>
                    </div>

                    <div className='md:p-5 md:w-[50%]'>
                        <div className="overflow-hidden  w-4/5 mx-auto  relative group rounded-lg border-black">
                        <a href="https://thearchitectsdiary.com/this-iyer-family-resides-in-a-900-sq-ft-house-in-mumbai-canwill-design-associates/" target='_blank' rel="noopener noreferrer">
                            <img
                                src={article2}
                                alt="article2"
                                className="transition-transform duration-700 object-cover ease-out transform group-hover:scale-110"
                            />
                            </a>
                            {/* Add an overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        </div>
                        <p className='w-[90%] px-5 md:px-7 text-center hover:text-[#00b8b8]  mt-3 mb-1 mx-auto'>Traditional Style Designed 900sqft. Iyer Family Residence, featured on The Architect'sDiary.</p>
                        <h1 className='text-center text-sm text-gray-500'>TheArchitect'sDiary, Apr 2024</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articals
