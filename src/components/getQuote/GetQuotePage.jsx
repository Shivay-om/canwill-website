import React from 'react'
import getQuote from '../../assets/getQuote.jpg'

const GetQuotePage = () => {
  const cities = ['Banglore', 'Hyderabad', 'Chennai', 'Mumbai', 'Navi Mumbai', 'Thane', 'Mysore', "Pune", 'Others'];

  return (
    <div className='p-5 md:p-10 lg:mt-7'>
      <div className='w-full h-full md:flex justify-between gap-10 '>
        <div className='w-full md:w-[50%] border'>
          <img src={getQuote} alt="" className='w-full h-full lg:h-[705px] object-cover lg:object-bottom' />
        </div>

        <div className="mx-auto w-full md:w-[50%] h-full py-10 md:py-0 bg-white rounded-lg">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center md:text-start mb-6 lg:mb-10">Get a Free Consultation</h1>

          <form>
            <h1 className='md:text-xl font-medium mb-5 text-gray-700'>Tell us about your home</h1>
            <div className="flex flex-wrap md:justify-between items-center lg:px-4 gap-4 mb-5">
              <label className="inline-flex items-center mb-2">
                <input
                  type="radio"
                  name="bhk"
                  value="1 BHK"
                  className="form-radio text-indigo-600 mr-2"
                />
                1 BHK
              </label>
              <label className="inline-flex items-center mb-2">
                <input
                  type="radio"
                  name="bhk"
                  value="2 BHK"
                  className="form-radio text-indigo-600 mr-2"
                />
                2 BHK
              </label>
              <label className="inline-flex items-center mb-2">
                <input
                  type="radio"
                  name="bhk"
                  value="3 BHK"
                  className="form-radio text-indigo-600 mr-2"
                />
                3 BHK
              </label>
              <label className="inline-flex items-center mb-2">
                <input
                  type="radio"
                  name="bhk"
                  value="4 BHK / Duplex"
                  className="form-radio text-indigo-600 mr-2"
                />
                4 BHK / Duplex
              </label>
              <label className="inline-flex items-center mb-2">
                <input
                  type="radio"
                  name="bhk"
                  value="Bungalow / Villa"
                  className="form-radio text-indigo-600 mr-2"
                />
                Bungalow / Villa
              </label>
            </div>


            {/* Dropdown */}
            <div className="mb-5">
              <label htmlFor="city" className="block md:text-xl font-medium font-custom text-gray-700 mb-5">
                Which city is this home in?
              </label>
              <select
                id="city"
                className="w-full border px-3 py-3 border-gray-300 rounded-sm outline-none"
              >
                <option value="Banglore">Select</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>


            <div className='lg:flex justify-between items-center gap-5'>
              <div className="mb-4 lg:w-[50%]">
                <input
                  type="text"
                  id="firstName"
                  className="w-full py-4 px-5 rounded-sm border outline-none"
                  placeholder="Enter your first name..."
                />
              </div>

              <div className="mb-4 lg:w-[50%]">
                <input
                  type="text"
                  id="lastName"
                  className="w-full py-4 px-5 rounded-sm border outline-none"
                  placeholder="Enter your last name..."
                />
              </div>
            </div>

            <div className='lg:flex justify-between items-center gap-5'>
              <div className="mb-4 lg:w-[50%]">
                <input
                  type="text"
                  id="phone"
                  className="w-full py-4 px-5 rounded-sm border outline-none"
                  placeholder="Enter your phone number..."
                />
              </div>
              <div className="mb-4 lg:w-[50%]">
                <input
                  type="email"
                  id="email"
                  className="w-full py-4 px-5 rounded-sm border outline-none"
                  placeholder="Enter your email..."
                />
              </div>
            </div>


            {/* Message */}
            <div className="mb-4 lg:mb-6">
              <textarea
                id="message"
                rows="4"
                className="w-full h-44 py-3 px-3 rounded-sm border outline-none"
                placeholder="Write your message here"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#03b9b9] text-white py-3 px-4 rounded-md hover:bg-[#03b9b9d3] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GetQuotePage
