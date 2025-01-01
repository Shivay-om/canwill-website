import React from 'react'
import team from '../../assets/team.jpg'
import founder1 from '../../assets/founder1.jpg'
import founder2 from '../../assets/founder2.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'


const About = () => {
    return (
        <>
            <div className='p-10'>
                <h1 className='text-3xl font-semibold text-center mb-3'>"About Us" / "Who We Are"</h1>
                <p className='text-center mb-8 tracking-wider'>"Transforming spaces with creativity and precision, turning design dreams into stunning reality."</p>
                <div>
                    <img src={team} alt="" className='h-screen w-full object-cover rounded-xl'/>
                    <p className='text-justify px-2 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ducimus ullam eveniet vel temporibus, veritatis placeat praesentium laboriosam nulla earum eligendi, cumque nobis rerum sunt sapiente porro quam repellendus. Corporis quia reprehenderit, tempore voluptas, est perspiciatis quos dolorem consequuntur ipsam minus in unde? Temporibus culpa, quibusdam nihil perspiciatis voluptatem optio odio sit enim, sint maiores vero corrupti ex veniam facilis voluptates, est voluptatum non natus in. Nesciunt quod sequi in debitis tempore aspernatur non quis suscipit harum id. Maiores ut nisi saepe eos sapiente voluptatum nulla quae, aspernatur nemo accusamus perferendis tempore? Sunt sit cupiditate error recusandae ex molestias fugit facere a, magni qui hic totam repellat voluptatibus soluta dolore explicabo numquam velit quidem? Eveniet numquam porro dolore fuga corrupti aut aperiam, reprehenderit vero, qui quaerat dolorum quis ipsum delectus? Distinctio officiis necessitatibus iusto tenetur laudantium exercitationem esse rem placeat sequi modi sunt doloremque aperiam blanditiis eveniet corporis illo, sapiente magnam. Aliquid eveniet incidunt quibusdam culpa recusandae praesentium sed nesciunt sunt aperiam pariatur? Dolorem repellat rem quae molestias a fugit neque eum earum, qui, expedita blanditiis maxime nam ipsam officiis necessitatibus ratione totam ad modi pariatur dolores perferendis. Veniam assumenda recusandae repellendus! Architecto saepe incidunt, error obcaecati doloremque voluptatem quae!</p>
                </div>

                {/* founders */}
                <div className=' my-10 '>
                    <h1 className='text-3xl font-semibold text-center leading-relaxed my-5 mb-10'>Meet our Founders <br />
                    The Brain Behind Canwill Design.</h1>
                    <div className='flex justify-around mb-10'>
                        <div className='w-[40%] flex justify-center'>
                            <img src={founder1} alt="" className='w-[300px] h-auto' />
                        </div>

                        <div className='w-[60%] flex flex-col justify-center '>
                            <h1 className='text-3xl text-gray-700 font-semibold mb-8'>Hardik pendnekar</h1>
                            <p className=' text-justify w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae distinctio ad nostrum, mollitia itaque labore culpa maiores porro, et eos. Cum magni quae tenetur repellendus id itaque eveniet maiores aliquid placeat, porro ipsam necessitatibus fugit, corporis atque. Debitis iste consectetur beatae veniam sed sunt iusto totam dicta quam adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquid at ea veniam! Molestias alias ut, et eveniet odio illo!
                            </p>
                        </div>
                    </div>

                    <div className='flex justify-around pt-12'>
                        <div className='w-[40%] flex justify-center'>
                            <img src={founder2} alt="" className='w-[300px] h-auto' />
                        </div>

                        <div className='w-[60%] flex flex-col justify-center '>
                            <h1 className='text-3xl text-gray-700 font-semibold mb-8'> Dhaval Kamdar</h1>
                            <p className=' text-justify w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae distinctio ad nostrum, mollitia itaque labore culpa maiores porro, et eos. Cum magni quae tenetur repellendus id itaque eveniet maiores aliquid placeat, porro ipsam necessitatibus fugit, corporis atque. Debitis iste consectetur beatae veniam sed sunt iusto totam dicta quam adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquid at ea veniam! Molestias alias ut, et eveniet odio illo!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#f8f5f5] p-10 mb-5'>
                <div className=' flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-semibold'>Start a conversation about your project today!</h1>
                    <button className='mt-8 border border-black rounded-sm hover:bg-black hover:text-white bg-transparent bg-opacity-50 p-2 px-4'>Connect With Us
                        <FontAwesomeIcon icon={faGreaterThan} className='ml-2' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default About
