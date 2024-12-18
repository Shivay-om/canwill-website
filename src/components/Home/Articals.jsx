import React from 'react'
import article1 from '../../assets/Article1.jpg'
import article2 from '../../assets/Iyer.png'

const Articals = () => {
    return (
        <div className='md:h-screen p-10'>
            <div>
                <div className='flex justify-center items-center '>
                    <div className='w-10 border-b border-[#0093dd] border mr-2'></div>
                    <h1 className='text-4xl text-[#0093dd] font-semibold mb-5 mt-5 py-5 '>Article</h1>
                </div>
                
                <div className='flex gap-5'>
                    <div className='p-5 w-[50%]'>
                        <div className="overflow-hidden relative group rounded-lg">
                            <img
                                src={article1}
                                alt="article1"
                                className="transition-transform duration-700 ease-out transform group-hover:scale-110"
                            />
                            {/* Add an overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                        <p className='w-[90%] text-center hover:text-[#0093dd] mt-3 mb-1 mx-auto'>A 4bhk home in Powai, crafted in Bold, Beautiful, and trendy shades of Blue by Canwill Design Associates</p>
                        <h1 className='text-center text-sm text-gray-500'>GoodHomes, Apr 2022</h1>
                    </div>
                    <div className='p-5 w-[50%]'>
                        <div className="overflow-hidden relative group rounded-lg border">
                            <img
                                src={article2}
                                alt="article2"
                                className="transition-transform duration-700 ease-out transform group-hover:scale-110"
                            />
                            {/* Add an overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                        <p className='w-[90%] text-center hover:text-[#0093dd]  mt-3 mb-1 mx-auto'>Iyer Family Resides a 900 sq ft House in Mumbai | Canwill Design Associates</p>
                        <h1 className='text-center text-sm text-gray-500'>TheArchitectsDiary, Apr 2024</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articals
