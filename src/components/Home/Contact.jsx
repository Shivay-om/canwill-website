import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='bg-[#f7f7f7] p-10 mb-5'>
      <div className=' flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-center tracking-wide font-medium'>Start a conversation about your project today!</h1>

        <div className=' lg:gap-6 flex flex-col justify-center items-center lg:flex-row'>
          <Link to='/getQuote' onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <button className='mt-8 border border-black rounded-sm hover:bg-black hover:text-white bg-transparent bg-opacity-50 p-2 px-4'>Connect With Us
              <FontAwesomeIcon icon={faGreaterThan} className='ml-2' />
            </button>
          </Link>

          <Link to='/portfolio' onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <button className='mt-8 border border-black rounded-sm hover:bg-black hover:text-white bg-transparent bg-opacity-50 p-2 px-4'>Checkout Our Portfolio
              <FontAwesomeIcon icon={faGreaterThan} className='ml-2' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
