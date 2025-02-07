import React from 'react'
import team from '../../assets/Team.webp'
import founder1 from '../../assets/Taruni.webp'
import founder2 from '../../assets/sir.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'


const About = () => {
    return (
        <>
            <div className='p-5 md:p-10'>
                <div>
                    <img src={team} alt="" className='lg:h-screen w-full object-cover rounded-xl' />
                    <h1 className='text-3xl md:text-5xl text-gray-700 text-center mt-5 md:mt-10 mb-3'>About Us</h1>

                    <div className='my-5 text-lg tracking-wide text-gray-700 lg:w-[85%] mx-auto font-second'>
                        {/* <h1 className='text-2xl text-center text-gray-700 md:text-2xl tracking-wider font-semibold mb-3'>Ideology</h1> */}
                        <p className='text-justify'>Welcome to Canwill Design Associates, where creativity meets functionality, and every space tells a story. We are dedicated to creating timeless and durable designs that stand the test of time.</p>
                        <p className='mt-3 text-justify'>With over two decades of industry expertise, we believe that great design goes beyond aesthetics—it’s about crafting spaces that resonate with your personality, meet your needs, and inspire your everyday life. Whether it’s a cozy home, a luxurious retreat, or a high-tech laboratory, we bring a unique blend of artistic vision and practical expertise to every project we undertake.</p>
                        <p className='text-justify mt-5'>Design is personal, and so are we. Our approach is rooted in collaboration, ensuring that your voice is at the heart of every decision. We specialize in creating spaces that are not only visually stunning but also tailored to your lifestyle and aspirations.</p>
                    </div>

                    {/* <div className=' my-5 pt-5 lg:w-[85%] mx-auto '>
                        <h1 className='text-2xl text-center text-gray-700 md:text-3xl md:text-start tracking-wider font-semibold mb-3'>Our Philosophy</h1>
                        <p className='text-justify'>Design is personal, and so are we. Our approach is rooted in collaboration, ensuring that your voice is at the heart of every decision. We specialize in creating spaces that are not only visually stunning but also tailored to your lifestyle and aspirations.</p>
                    </div> */}

                </div>




                {/* founders */}
                <div className='my-10 '>
                    <h1 className='text-3xl md:text-5xl text-gray-700 font-medium text-center leading-relaxed my-5 mb-10 md:pt-5'>Meet our Founders</h1>
                    <div className='md:flex justify-around mb-10'>
                        <div className='md:w-[40%] flex justify-center'>
                            <img src={founder1} alt="" className='w-[300px] h-auto rounded-lg' />
                        </div>

                        <div className='md:w-[60%] tracking-wide flex flex-col justify-center '>
                            <h1 className='text-3xl text-gray-700 text-center tracking-wide md:text-start font-medium my-5 md:mb-8'>Taruni Kelkar
                            </h1>
                            <p className=' text-justify text-gray-700 text-lg md:w-[90%]'>Taruni is a highly experienced architect and an alumna of the prestigious Sir J.J. College of Architecture (1992), known for her keen eye for aesthetics and impeccable sense of proportions. Her work is characterized by a signature blend of elegance, innovation, and functionality, with meticulous attention to detail and spatial harmony. Whether designing minimalist homes or vibrant commercial spaces, she thoughtfully integrates textures, materials, and colors to create environments that are both visually stunning and deeply functional. Taruni’s passion for design and experience in the field make her a trusted and sought-after professional.
                            </p>
                        </div>
                    </div>

                    <div className='md:flex tracking-wide justify-around pt-12'>
                        <div className='md:w-[40%] flex justify-center'>
                            <img src={founder2} alt="" className='w-[300px] h-auto rounded-lg' />
                        </div>

                        <div className='md:w-[60%] flex flex-col justify-center '>
                            <h1 className='text-3xl text-gray-700 text-center tracking-wide md:text-start font-medium my-5 md:mb-8'>Shirish Kelkar
                            </h1>
                            <p className=' text-justify text-gray-700 text-lg md:w-[90%]'>Shirish is an extremely talented and passionate  architect and product designer from Mumbai. He completed his architecture degree from Nagpur and pursued his masters in product design from the prestigious IIT-Bombay in 1992. With a deep passion for model-making, sketching, and research, Shirish seamlessly transforms ideas into reality through his practical and efficient design sensibilities. With over 25 years of experience in the field, his work reflects a harmonious blend of artistry and functionality, making him a dynamic force in both architecture and interior design.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' px-5 md:pb-5 mb-10'>
                <div className='lg:w-[85%] tracking-wide mx-auto'>
                    <h1 className='text-2xl text-center text-gray-700 md:text-3xl tracking-wider font-medium mb-3'>What Sets Us Apart</h1>
                    <p className='text-justify text-lg text-gray-700 md:text-center'> <span className='font-semibold tracking-wide'>Custom Solutions:</span> Every project is a fresh canvas. We pride ourselves on bespoke designs that reflect your individuality.</p>
                    <p className='text-justify text-lg text-gray-700 md:text-center'> <span className='font-semibold tracking-wide'>Attention to Detail: </span>From concept to completion, we obsess over the little things that make a big difference.</p>
                </div>

                <div className=' my-5 tracking-wide pt-5 lg:w-[85%] mx-auto'>
                    <h1 className='text-2xl text-center text-gray-700 md:text-3xl tracking-wider font-medium mb-3'>Let’s Create Together</h1>
                    <p className='text-justify text-lg text-gray-700 lg:w-[75%] mx-auto'>Whether you’re starting from scratch or revamping an existing space, Canwill Design is here to transform your ideas into reality. Let’s build something extraordinary.</p>
                </div>
            </div>

            <div className='bg-[#f7f7f7] tracking-wide p-10 mb-5'>
                <div className=' flex flex-col justify-center items-center'>
                    <h1 className='text-2xl text-center font-medium tracking-wide'>Start a conversation about your project today!</h1>
                    <button className='mt-8 border border-black rounded-sm hover:bg-black hover:text-white bg-transparent bg-opacity-50 p-2 px-4'>Connect With Us
                        <FontAwesomeIcon icon={faGreaterThan} className='ml-2' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default About
