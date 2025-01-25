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
                    <img src={team} alt="" className='md:h-screen w-full object-cover rounded-xl' />
                    <h1 className='text-3xl font-semibold text-center mt-5 mb-3'>"About Us" / "Who We Are"</h1>
                    <p className='text-center mb-8 tracking-wider'>"Transforming spaces with creativity and precision, turning design dreams into stunning reality."</p>
                    <p className='text-justify px-2 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ducimus ullam eveniet vel temporibus, veritatis placeat praesentium laboriosam nulla earum eligendi, cumque nobis rerum sunt sapiente porro quam repellendus. Corporis quia reprehenderit, tempore voluptas, est perspiciatis quos dolorem consequuntur ipsam minus in unde? Temporibus culpa, quibusdam nihil perspiciatis voluptatem optio odio sit enim, sint maiores vero corrupti ex veniam facilis voluptates, est voluptatum non natus in. Nesciunt quod sequi in debitis tempore aspernatur non quis suscipit harum id. Maiores ut nisi saepe eos sapiente voluptatum nulla quae, aspernatur nemo accusamus perferendis tempore? Sunt sit cupiditate error recusandae ex molestias fugit facere a, magni qui hic totam repellat voluptatibus soluta dolore explicabo numquam velit quidem? Eveniet numquam porro dolore fuga corrupti aut aperiam, reprehenderit vero, qui quaerat dolorum quis ipsum delectus? Distinctio officiis necessitatibus iusto tenetur laudantium exercitationem esse rem placeat sequi modi sunt doloremque aperiam blanditiis eveniet corporis illo, sapiente magnam. Aliquid eveniet incidunt quibusdam culpa recusandae praesentium sed nesciunt sunt aperiam pariatur? Dolorem repellat rem quae molestias a fugit neque eum earum, qui, expedita blanditiis maxime nam ipsam officiis necessitatibus ratione totam ad modi pariatur dolores perferendis. Veniam assumenda recusandae repellendus! Architecto saepe incidunt, error obcaecati doloremque voluptatem quae!</p>
                </div>




                {/* founders */}
                <div className=' my-10 '>
                    <h1 className='text-3xl font-semibold text-center leading-relaxed my-5 mb-10'>Meet our Founders <br />
                        The Brain Behind Canwill Design.</h1>
                    <div className='md:flex justify-around mb-10'>
                        <div className='md:w-[40%] flex justify-center'>
                            <img src={founder1} alt="" className='w-[300px] h-auto' />
                        </div>

                        <div className='md:w-[60%] flex flex-col justify-center '>
                            <h1 className='text-3xl text-gray-700 text-center md:text-start font-semibold my-5 md:mb-8'>Taruni Kelkar 
                            </h1>
                            <p className=' text-justify md:w-[90%]'>Taruni is a highly experienced architect and an alumna of the prestigious Sir J.J. College of Architecture (1992), known for her keen eye for aesthetics and impeccable sense of proportions. Her work is characterized by a signature blend of elegance, innovation, and functionality, with meticulous attention to detail and spatial harmony. Whether designing minimalist homes or vibrant commercial spaces, she thoughtfully integrates textures, materials, and colors to create environments that are both visually stunning and deeply functional. Taruni’s passion for design and experience in the field make her a trusted and sought-after professional.
                            </p>
                        </div>
                    </div>

                    <div className='md:flex justify-around pt-12'>
                        <div className='md:w-[40%] flex justify-center'>
                            <img src={founder2} alt="" className='w-[300px] h-auto' />
                        </div>

                        <div className='md:w-[60%] flex flex-col justify-center '>
                            <h1 className='text-3xl text-gray-700 text-center md:text-start font-semibold my-5 md:mb-8'>Shirish Kelkar 
                            </h1>
                            <p className=' text-justify md:w-[90%]'>Shirish is an extremely talented and passionate  architect and product designer from Mumbai. He completed his architecture degree from Nagpur in and pursued his masters in product design from the prestigious IIT-Bombay in 1992. With a deep passion for model-making, sketching, and research, Shirish seamlessly transforms ideas into reality through his practical and efficient design sensibilities. With over 25 years of experience in the field, his work reflects a harmonious blend of artistry and functionality, making him a dynamic force in both architecture and interior design. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#f8f5f5] p-10 mb-5'>
                <div className=' flex flex-col justify-center items-center'>
                    <h1 className='text-2xl text-center font-semibold'>Start a conversation about your project today!</h1>
                    <button className='mt-8 border border-black rounded-sm hover:bg-black hover:text-white bg-transparent bg-opacity-50 p-2 px-4'>Connect With Us
                        <FontAwesomeIcon icon={faGreaterThan} className='ml-2' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default About
