import React from 'react'
// import gif1 from '../../assets/001.gif'
// import gif2 from '../../assets/002.gif'
// import gif3 from '../../assets/003.gif'
// import gif4 from '../../assets/004.gif'
import gif1 from '../../assets/analytics.gif'
import gif2 from '../../assets/blueprint.gif'
import gif3 from '../../assets/strategic-planning.gif'
import gif4 from '../../assets/implementation.gif'

const Process = () => {
    return (
        <div className='md:h-auto p-10'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <div className='w-10 border-b border-[#00B8B8] border mr-2'></div>
                    <h1 className='text-4xl font-sans font-semibold mt-5 mb-5 text-[#00B8B8]'>Our Process</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5 w-full p-5">
                    <div className="flex justify-center items-center p-5">
                        <img src={gif1} alt="" className="w-[90px] h-[90px]" />
                    </div>
                    <div className="flex justify-center items-center p-5">
                        <img src={gif2} alt="" className="w-[90px] h-[90px]" />
                    </div>
                    <div className="flex justify-center items-center p-5">
                        <img src={gif3} alt="" className="w-[90px] h-[90px]" />
                    </div>
                    <div className="flex justify-center items-center p-5">
                        <img src={gif4} alt="" className="w-[90px] h-[90px]" />
                    </div>
                </div>

                <div className='flex pt-5'>
                    <div className='flex justify-between gap-5 pb-10 border-[#00B8B8] border-b'>
                        <div className=''>
                            <p className='border border-[#00B8B8] text-[#00B8B8] p-1 px-2 rounded-full'>01</p>
                        </div>
                        <div>
                            <h1 className='mb-3 text-lg font-semibold text-[#00B8B8]'>Site Study and Analysis</h1>
                            <p className=' w-[85%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum exercitationem ipsa minus aut reprehenderit eaque explicabo. At voluptate assumenda dolore.</p>
                        </div>
                    </div>

                    <div className='flex justify-between gap-5 border-[#00B8B8] border-r border-b border-l'>
                        <div>
                            <p className='border border-[#00B8B8] text-[#00b8b8] p-1 px-2 rounded-full ml-4'>02</p>
                        </div>
                        <div>
                            <h1 className='mb-3 text-lg font-semibold text-[#00b8b8]'>Concept Development</h1>
                            <p className='w-[85%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum exercitationem ipsa minus aut reprehenderit eaque explicabo. At voluptate assumenda dolore.</p>
                        </div>
                    </div>

                    <div className='flex justify-between gap-5 border-[#00b8b8] border-r border-b '>
                        <div>
                            <p className='border border-[#00b8b8] text-[#00b8b8] p-1 px-2 rounded-full ml-4'>03</p>
                        </div>
                        <div>
                            <h1 className='mb-3 text-lg font-semibold text-[#00b8b8]'>Planning</h1>
                            <p className='w-[85%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum exercitationem ipsa minus aut reprehenderit eaque explicabo. At voluptate assumenda dolore.</p>
                        </div>
                    </div>

                    <div className='flex justify-between gap-5 border-[#00b8b8] border-b'>
                        <div>
                            <p className='border border-[#00b8b8] text-[#00b8b8] p-1 px-2 rounded-full ml-4'>04</p>
                        </div>
                        <div>
                            <h1 className='mb-3 text-lg font-semibold text-[#00b8b8]'>Execution</h1>
                            <p className='w-[85%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum exercitationem ipsa minus aut reprehenderit eaque explicabo. At voluptate assumenda dolore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
