import React from 'react'
import footer from '../assets/footer.jpg'
import logo from '../assets/logo1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className='px-10 pt-10 h-full bg-gray-200 rounded-t-3xl'>
      <div className=' flex justify-between p-5 h-[50%] border'>
        <div className='w-[50%] flex flex-col justify-between py-2  border'>
          <h1 className='text-4xl font-semibold leading-relaxed'>Let's Connect Today To Discuss Your Project!</h1>
          <p className='mt-8 w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, tenetur</p>
        </div>
        <div className='w-[50%] flex justify-end items-center border'>
          <img src={footer} alt="" className='w-[60%] h-auto rounded-lg' />
        </div>
      </div>

      <div className=' flex justify-between p-5 h-[50%]  border-[#0093DB] border-b-2'>
        <div className=' w-[60%] border '>
          <div className='flex   border-black'>
            <div className='w-[50%]'>
              <h1 className='text-xl font-semibold mb-3'>Quick Links</h1>
              <div className="flex flex-col md:flex-row  gap-6 text-center md:text-left">
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a href="#about-us" className="hover:underline">About Us</a>
                    </li>
                    <li>
                      <a href="#testimonials" className="hover:underline">Testimonials</a>
                    </li>
                    <li>
                      <a href="#process" className="hover:underline">Process</a>
                    </li>
                    <li>
                      <a href="#contact-us" className="hover:underline">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='w-[50%] border flex flex-col justify-center items-end'>
              <div className='flex gap-3 border w-[212px]'>
                <div className='mt-1'>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <h1 className='text-lg font-semibold hover:text-[#0093dd]'>Phone Number</h1>
                  <p>+91 9821502078</p>
                </div>
              </div>
              <div className='flex gap-3 border w-[212px]'>
                <div className='mt-1'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h1 className='text-lg font-semibold hover:text-[#0093dd]'>Email Address</h1>
                  <p>canwilldesign@gmail.com</p>
                </div>
              </div>
              <div className='flex gap-3 border  w-[212px]'>
                <div className='mt-1'>
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <h1 className='text-lg font-semibold hover:text-[#0093dd]'>Location</h1>
                  <p>+91 9821502078</p>
                </div>
              </div>
            </div>
          </div>
          <div className='  w-[80%] border-green-500'>
            <h1 className='text-center text-lg font-semibold mt-2'>Social Links</h1>
            <div className='flex justify-center items-center gap-8 mt-3'>
              <FontAwesomeIcon icon={faInstagram} size='xl' className='hover:text-[#0093dd]'/>
              <FontAwesomeIcon icon={faFacebook} size='xl' className='hover:text-[#0093dd]'/>
              <FontAwesomeIcon icon={faWhatsapp} size='xl' className='hover:text-[#0093dd]'/>
            </div>
          </div>
        </div>

        <div className='w-[50%] flex justify-end items-end border '>
          <img src={logo} alt="" className='w-3/5 h-auto border ' />
        </div>
      </div>
       <h1 className=' py-3 text-end'>Copyright © 2024 Canwill design. All rights reserved.</h1>
    </div>
  )
}

export default Footer
