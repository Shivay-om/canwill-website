import React from 'react'
import footer from '../assets/footer.jpg'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <>
      <div className=' my-5 px-10 pt-10 md:flex '>
        <div className='md:w-[60%] items-center border-b border-b-[#00b8b8] '>
          <div className='pt-5'>
            <div className='md:flex justify-between mb-6 '>
              <div className='flex justify-center'>
                <img src={logo} alt="" className='w-auto h-[160px] ' />
              </div>


              <div className=' md:hidden my-8'>
                <h1 className='text-2xl text-center font-semibold mb-5 '>Pages</h1>
                <div className="flex flex-col md:flex-row  gap-6 text-center md:text-left">
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/about" className="hover:underline">About Us</Link>
                      </li>
                      <li>
                        <Link to="/portfolio" className="hover:underline">Portfolio</Link>
                      </li>
                      <li>
                        <Link to="/contact" className="hover:underline">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/getQuote" className="hover:underline">Get a Quote</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='md:hidden flex justify-center items-center  gap-7 mb-5'>
                <FontAwesomeIcon icon={faInstagram} size='xl' className='text-[#00b8b8]' />
                <FontAwesomeIcon icon={faFacebook} size='xl' className='text-[#00b8b8]' />
                <FontAwesomeIcon icon={faWhatsapp} size='xl' className='text-[#00b8b8]' />
              </div>

              <div className='text-center md:text-end tracking-wider pt-5 md:mr-5 '>
                <div className='mb-3'>Canwill Design Associates, E-04,<br /> Gokul Residency, Thakur <br /> Village, Kandivali(E),<br /> Mumbai - 400101</div>
                <div>Contact - +91 98215 02078</div>
              </div>
            </div>
          </div>
        </div>

        <div className='md:w-[40%] hidden md:flex px-10 pt-3  border-b border-l border-b-[#00b8b8] border-l-[#00b8b8]'>
          <div className='w-[30%] '>
            <h1 className='text-2xl font-semibold mb-5 '>Pages</h1>
            <div className="flex flex-col md:flex-row  gap-6 text-center md:text-left">
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about" className="hover:text-[#00b8b8]">About Us</Link>
                  </li>
                  <li>
                    <Link to="/portfolio" className="hover:text-[#00b8b8]">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-[#00b8b8]">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/getQuote" className="hover:text-[#00b8b8]">Get a Quote</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center  ml-4 mt-3 mb-5 '>
            <img src={footer} alt="" className=' w-auto h-[150px] rounded-lg' />
          </div>
        </div>

      </div >
      <div className='px-10 flex justify-between'>
        <div className='hidden md:flex justify-start ml-5 items-center mb-3 gap-7'>
          <FontAwesomeIcon icon={faInstagram} size='xl' className='text-[#00b8b8]' />
          <FontAwesomeIcon icon={faFacebook} size='xl' className='text-[#00b8b8]' />
          <FontAwesomeIcon icon={faWhatsapp} size='xl' className='text-[#00b8b8]' />
        </div>

        <h1 className='pb-4 text-center md:text-end'>Copyright © 2024 Canwill design. All rights reserved.</h1>
      </div>
    </>
  )
}

export default Footer
