import React from 'react'
import img1 from '../../assets/hero1.png'
import img2 from '../../assets/hero2.jpg'
import img3 from '../../assets/hero3.jpg'
import { GiStarShuriken } from "react-icons/gi";

const Hero = () => {
    return (
        <div className='pb-5'>
            <div className='p-10  flex justify-center items-center mt-10 h-[500px]'>
                <div className='relative w-full p-10 flex justify-between items-center border rounded-2xl h-[300px]' style={{ background: 'linear-gradient(109deg, #0093DD 3.97%, #30F4FF51 84.85%)' }}>
                    <div className=' w-[35%] '>
                        <h1 className='font-semibold '>Crafting Tomorrow's Living Spaces</h1>
                        <p className='text-5xl mt-5'>Set New Standards in <span className='italic'>Modern Home</span> Construction</p>
                    </div>
                    <img src={img1} alt="" className='absolute right-0 translate-y-10 bottom-0 ' style={{
                        clipPath: 'inset(-20px -20px 40px -20px)', // Hide bottom 50px only
                    }} />
                </div>
            </div>

            <div className='relative overflow-hidden  h-[400px] my-10'>
                <img src={img2} alt="" className='absolute animate-heroIn w-[400px] h-[250px] -left-20 rounded-3xl' />
                <img src={img3} alt="" className='absolute w-[400px] h-[250px] rounded-3xl bottom-0 -right-20' />
                <div className='p-10 w-[35%] h-full mx-auto flex flex-col items-center justify-center '>
                    <GiStarShuriken size={22} className='mb-3' />
                    <h1 className='text-4xl mt-3 text-center '>If you can <span className='italic text-[#0093dd]'>dream it</span> we can <span className='italic text-[#0093dd]'>build it.</span></h1>
                    <p className='py-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eaque quia illo soluta, architecto amet fuga perspiciatis excepturi ut at!</p>
                </div>

            </div>
        </div>
    )
}

export default Hero
