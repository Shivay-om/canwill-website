import React from 'react'
import dani from '../../assets/dani.jpg'
import { Link, Outlet } from 'react-router-dom';


const Portfolio = () => {
    // const portfolioItems = [
    //     { id: 'dani-hotels', imgSrc: dani, title: 'Dani Hotels' },
    //     { id: 'beach-resorts', imgSrc: 'path_to_image2.jpg', title: 'Beach Resorts' },
    //     { id: 'cityscape', imgSrc: 'path_to_image3.jpg', title: 'Cityscape' },
    //   ];

    return (
        <div>

            <div className="relative w-full h-[300px] md:w-[400px] md:h-auto md:m-8 group overflow-hidden rounded-lg">
                
                <img
                    src={dani}
                    alt="Descriptive Alt Text"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                    <h3 className="text-xl md:text-2xl font-bold">Your Overlay Title</h3>
                    <p className="mt-2 text-sm md:text-base">
                        Brief description about the content or image.
                    </p>

                    
                    <Link
                        to="/portfolio/Dani-hotels"
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                    >
                        Read More
                    </Link>
                </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {portfolioItems.map((item) => (
                    <div key={item.id} className="relative w-full h-[300px] md:w-[300px] group">
                        <img
                            src={item.imgSrc}
                            alt={item.title}
                            className="w-full h-[300px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <Link
                                to={`/portfolio/${item.id}`}
                                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div> */}

        </div>
    )
}

export default Portfolio
