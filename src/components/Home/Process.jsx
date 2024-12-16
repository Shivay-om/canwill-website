import React from 'react'
import gif1 from '../../assets/001.gif'
import gif2 from '../../assets/002.gif'
import gif3 from '../../assets/003.gif'
import gif4 from '../../assets/004.gif'

const Process = () => {
  return (
    <div className='md:h-screen p-10'>
      <div className='flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-4xl font-semibold mb-5'>Our Process</h1>
        </div>
        <div className='flex  items-center mb-5  w-full'>
            <div className='flex justify-center items-center p-5  w-[295px]'>
                <img src={gif1} alt=""  className='w-[110px] h-[110px]'/>
            </div>
            <div className='flex justify-center items-center p-5  w-[295px]'>
                <img src={gif2} alt="" className='w-[110px] h-[110px]'/>
            </div>
            <div className='flex justify-center items-center p-5  w-[295px]'>
                <img src={gif3} alt="" className='w-[110px] h-[110px]'/>
            </div>
            <div className='flex justify-center items-center p-5  w-[295px]'>
                <img src={gif4} alt="" className='w-[110px] h-[110px]'/>
            </div>
        </div>
        <div className='flex pt-5'>
            <div className='flex justify-between gap-5 pb-10  border-b-2'>
                <div className=''>
                    <p className='border p-2 px-2 rounded-full'>01.</p>
                </div>
                <div>
                    <h1 className='mb-3 text-lg font-semibold'>Site Study and Analysis</h1>
                    <p className=' w-[85%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum exercitationem ipsa minus aut reprehenderit eaque explicabo. At voluptate assumenda dolore.</p>
                </div>
            </div>
            <div className='flex justify-between gap-5 border-r-2 border-b-2 border-l-2'>
                <div>
                    <p className='border p-2 px-2 rounded-full ml-2'>02.</p>
                </div>
                <div>
                    <h1 className='mb-3 text-lg font-semibold'>Concept Development</h1>
                    <p className='w-[85%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum exercitationem ipsa minus aut reprehenderit eaque explicabo. At voluptate assumenda dolore.</p>
                </div>
            </div>
            <div className='flex justify-between gap-5 border-r-2 border-b-2 '>
                <div>
                    <p className='border p-2 px-2 rounded-full ml-2'>03.</p>
                </div>
                <div>
                    <h1 className='mb-3 text-lg font-semibold'>Planning</h1>
                    <p className='w-[85%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum exercitationem ipsa minus aut reprehenderit eaque explicabo. At voluptate assumenda dolore.</p>
                </div>
            </div>
            <div className='flex justify-between gap-5  border-b-2'>
                <div>
                    <p className='border p-2 px-2 rounded-full ml-2'>04.</p>
                </div>
                <div>
                    <h1 className='mb-3 text-lg font-semibold'>Execution</h1>
                    <p className='w-[85%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum exercitationem ipsa minus aut reprehenderit eaque explicabo. At voluptate assumenda dolore.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Process
