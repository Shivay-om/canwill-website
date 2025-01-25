import React from 'react'
// import gif1 from '../../assets/001.gif'
// import gif2 from '../../assets/002.gif'
// import gif3 from '../../assets/003.gif'
// import gif4 from '../../assets/004.gif'
import icon1 from '../../assets/study.png'
import icon2 from '../../assets/concept.png'
import icon3 from '../../assets/planning.png'
import icon4 from '../../assets/execution.png'

const Process = () => {
    return (
        <div className='md:h-auto px-10 pb-8'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <div className='w-10 border-b border-gray-700 border mr-2'></div>
                    <h1 className='text-2xl md:text-4xl font-custom font-semibold mt-5 mb-5 text-gray-700'>Our Process</h1>
                </div>

                {/* <div className='my-5'>
                    <div className="flex flex-col justify-center items-center">
                        <p className='border md:hidden border-[#00B8B8] text-gray-700 p-1 px-2 rounded-full mb-3'>01</p>
                        <img src={icon1} alt="" className="w-[70px] h-[70px] mt-2" />
                    </div>
                    <div className=' gap-5 pb-2 max-w-[263px]  border-[#00B8B8] '>
                        <div className='mt-4'>
                            <p className=' hidden md:flex border border-[#00B8B8] text-gray-700 p-1 px-2 rounded-full ml-4'>01</p>
                        </div>
                        <div className='text-center'>
                            <h1 className='mb-3 text-lg text-center font-semibold text-gray-700 '>Discovery</h1>
                            <p className=' w-[90%] mb-5 mx-auto md:mb-0'>We start by understanding your vision, preferences, and needs.</p>
                        </div>
                    </div>
                </div> */}

                <div className="hidden md:w-[90%] md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5 w-full p-5 ">
                    <div className="flex justify-center items-center p-5 ">
                        <img src={icon1} alt="" className="w-[90px] h-[90px]" />
                    </div>
                    <div className="flex justify-center items-center p-5 ">
                        <img src={icon2} alt="" className="w-[70px] h-[70px]" />
                    </div>
                    <div className="flex justify-center items-center p-5 ">
                        <img src={icon3} alt="" className="w-[70px] h-[70px]" />
                    </div>
                    <div className="flex justify-center items-center p-5 ">
                        <img src={icon4} alt="" className="w-[70px] h-[70px]" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row '>
                    <div className="flex justify-center items-center md:hidden p-5">
                        <img src={icon1} alt="" className="w-[90px] h-[90px]" />
                    </div>
                    <div className='flex justify-between gap-5 pb-2 max-w-[263px]  border-[#00B8B8] '>
                        <div className='mt-4'>
                            <p className='border border-[#00B8B8] text-gray-700 p-1 px-2 rounded-full ml-4'>01</p>
                        </div>
                        <div>
                            <h1 className='mb-3 text-lg font-semibold text-gray-700'>Discovery</h1>
                            <p className=' w-[90%] mb-5 md:mb-0'>We start by understanding your vision, preferences, and needs.</p>
                        </div>
                    </div>


                    <div className="flex justify-center items-center md:hidden p-5">
                        <img src={icon2} alt="" className="w-[70px] h-[70px]" />
                    </div>
                    <div className='flex justify-between gap-5 max-w-[263px] max-h-full  border-[#00B8B8] md:border-r  md:border-l'>
                        <div>
                            <p className='border border-[#00B8B8] text-gray-700 p-1 px-2 rounded-full ml-4'>02</p>
                        </div>
                        <div>
                            <h1 className='mb-3 text-lg font-semibold text-gray-700'>Design</h1>
                            <p className='w-[90%] mb-5'>Our creative team develops detailed concepts and mood boards to bring your ideas to life. </p>
                        </div>
                    </div>


                    <div className="flex justify-center items-center md:hidden p-5">
                        <img src={icon3} alt="" className="w-[70px] h-[70px]" />
                    </div>
                    <div className='flex justify-between gap-5 max-w-[263px]  border-[#00b8b8] md:border-r  '>
                        <div>
                            <p className='border border-[#00b8b8] text-gray-700 p-1 px-2 rounded-full ml-4'>03</p>
                        </div>
                        <div>
                            <h1 className='mb-3 text-lg font-semibold text-gray-700'>Execution</h1>
                            <p className='w-[90%] mb-5 md:mb-0'>From sourcing materials to managing timelines, we ensure every detail aligns with the design.</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center md:hidden p-5">
                        <img src={icon4} alt="" className="w-[70px] h-[70px]" />
                    </div>
                    <div className='flex justify-between gap-5  max-w-[263px] border-[#00b8b8] '>
                        <div>
                            <p className='border border-[#00b8b8] text-gray-700 p-1 px-2 rounded-full ml-4'>04</p>
                        </div>
                        <div>
                            <h1 className='mb-3 text-lg font-semibold text-gray-700'>Delivery</h1>
                            <p className='w-[90%] mb-5 md:mb-0'>The result is a space that feels like it was always meant to be yours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
