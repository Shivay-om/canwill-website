import React from 'react'
import contactImg from '../../assets/contactImg.jpg'
import social1 from '../../assets/social1.svg'
import social2 from '../../assets/social2.svg'
import social3 from '../../assets/social3.svg'
import connect1 from '../../assets/connect1.svg'
import connect2 from '../../assets/connect2.svg'
import contact from '../../assets/contact.svg'
import location from '../../assets/Icon.svg'
import social from '../../assets/Social.svg'
import pot from '../../assets/pot.webp'

const ContactPage = () => {
  return (
    <div>
      <div className='p-5 md:p-10 md:flex'>
        <div className=' md:w-[60%] text-gray-700 md:p-10'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide text-center md:text-start mb-5 md:mb-8'>Get in Touch</h1>
          <div className=' border-black lg:flex'>
            <div className='md:w-[50%]'>
              <h1 className='text-center md:text-start mb-5 tracking-wide  md:text-xl'>for any enquiries, or just to say hello, get in touch and contact us.</h1>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap justify-center md:w-[50%] md:h-auto gap-5 md:gap-10 border-green-400'>
              <div className='flex flex-col justify-center my-5 md:my-0 md:w-[180px] md:justify-start md:items-start items-center '>
                <h1 className='mb-3 text-[#1E1E1E] text-lg text-opacity-75 tracking-wider'>New projects</h1>
                <p className='tracking-wide'>example@gmail.com</p>
              </div>

              <div className='flex flex-col justify-center md:items-start items-center'>
                <h1 className='mb-3 text-[#1E1E1E] text-lg text-opacity-75 tracking-wider'>Project enquiries</h1>
                <a
                  href="mailto:canwilldesign@gmail.com"
                  className=" tracking-wide mb-3"
                >
                  canwilldesign@gmail.com
                </a>
                <a
                  href="tel:+919821502078"
                  className="tracking-wide"
                >
                  +91 9821502078
                </a>
              </div>

              <div className='flex flex-col justify-center my-5 md:my-0  md:w-[180px] md:items-start items-center'>
                <h1 className='mb-3 text-[#1E1E1E] text-lg text-opacity-75 tracking-wider'>Address</h1>
                <p className='text-center tracking-wide md:text-start'>Canwill Design Associates, E-04, Gokul Residency, Thakur Village, Kandivali(E), Mumbai - 40010</p>
              </div>

              <div className='flex flex-col justify-center md:w-[180px] md:justify-start md:items-start items-center '>
                <h1 className='mb-3 text-[#1E1E1E] text-lg text-opacity-75 tracking-wider'>Follow socials</h1>
                <div className='font-custom flex justify-center mt-4 gap-5 '>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={social1} alt="Facebook" className='w-[28px] h-[28px] ' />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={social2} alt="WhatsApp" className='w-[30px] h-[30px] ' />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={social3} alt="linkedin" className='w-[28px] h-[28px] ' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-8 md:pt-0 md:w-[40%]'>
            <img src={pot} alt="" className='w-full h-auto md:h-full object-cover md:pr-10 md:pt-10'/>
        </div>
      </div>
      {/* <div className='p-5 md:p-10'>
        <img src={contactImg} alt="canwill image" className='rounded-xl  lg:w-full lg:h-[500px] object-cover' />
      </div> */}

      {/* <div className='pt-5 md:pt-10 md:pb-5' >
        <h1 className='text-2xl font-semibold md:mb-5 lg:mb-0 md:text-4xl lg:text-5xl text-center'>Get in Touch</h1>
      </div> */}

      <div className='flex flex-col justify-between gap-8 md:grid grid-cols-2 lg:grid-cols-3 md:gap-8 md:w-[90%] lg:w-[80%]  mx-auto'>
        {/* <div className='border flex  flex-col gap-4 p-7 px-7 w-[90%] mx-auto font-custom rounded-xl border-[#00B8B8]'>
          <img src={contact} alt="" className='w-12 h-12' />
          <h1 className='text-lg font-semibold tracking-wide '>Connect with us</h1>
          <div>
            <div className='flex gap-3'>
              <img src={connect1} alt="" />
              <a
                href="tel:+919821502078"
                className="font-custom text-[#1E1E1E] text-opacity-75 tracking-wide"
              >
                +91 9821502078
              </a>
            </div>
            <div className='flex gap-3 mt-2 mb-3'>
              <img src={connect2} alt="" />
              <a
                href="mailto:canwilldesign@gmail.com"
                className="font-custom text-[#1E1E1E] text-opacity-75 tracking-wide"
              >
                canwilldesign@gmail.com
              </a>

            </div>

          </div>
        </div> */}

        {/* <div className='border flex  flex-col gap-4 p-5 px-7 w-[90%] mx-auto font-custom rounded-lg border-[#00B8B8]'>
          <img src={social} alt="" className='w-12 h-12' />
          <h1 className='text-lg font-semibold tracking-wide'>Follow our socials</h1>
          <div>
            <p className='text-[#1E1E1E] text-opacity-75 tracking-wide'>connect with our social handles stay updated with latest news</p>
            <div className='font-custom flex justify-center mt-4 gap-5 '>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src={social1} alt="Facebook" className='w-[28px] h-[28px] ' />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src={social2} alt="WhatsApp" className='w-[30px] h-[30px] ' />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src={social3} alt="linkedin" className='w-[28px] h-[28px] ' />
              </a>
            </div>
          </div>
        </div> */}



        {/* <div className='border flex flex-col gap-4 p-5 pb-7 px-7 w-[90%]  mx-auto font-custom rounded-lg border-[#00B8B8]'>
          <img src={location} alt="" className='w-12 h-12' />
          <h1 className='text-lg font-semibold tracking-wide'>Address</h1>
          <div>
            <p className='text-[#1E1E1E] text-opacity-75 mb-6 tracking-wide'>Canwill Design Associates, E-04, Gokul Residency, Thakur Village, Kandivali(E), Mumbai - 400101</p>
            <div className='flex justify-center items-center'>
              <a href="https://maps.app.goo.gl/5aUQdUjocJgoub4f7" target="_blank" rel="noopener noreferrer">
                <button className=' bg-black text-white  p-1 px-3 rounded-3xl'>Locate on Maps</button>
              </a>
            </div>
          </div>
        </div> */}
      </div>


      <div className="w-full h-[250px] md:h-[500px] relative p-11">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.644875423427!2d72.86736297374048!3d19.210707147732652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b737f4b5c2d9%3A0xa75d3dec15359993!2sCanwill%20Design!5e0!3m2!1sen!2sin!4v1737721442044!5m2!1sen!2sin"
          className="absolute top-0 w-full h-full left-0 border-0 p-5 md:p-12"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>

    </div >
  )
}

export default ContactPage
