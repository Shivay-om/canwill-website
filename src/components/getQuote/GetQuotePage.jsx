import React, { useState } from 'react';
import getQuote from '../../assets/getQuote.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Footer from '../Footer';
import emailjs from '@emailjs/browser';

const GetQuotePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const cities = ['Banglore', 'Hyderabad', 'Chennai', 'Mumbai', 'Navi Mumbai', 'Thane', 'Mysore', 'Pune', 'Others'];
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    city: '',
    bhk: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        'service_ji1gc69',
        'template_822sva2',
        formData,
        '2nPupY7fhmVMain-F'
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsLoading(false);
        navigate("/thank-you");
      })
      .catch((error) => {
        console.error("Email send error:", error);
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="p-5 md:p-10 lg:mt-7 limit">
        <div className="w-full h-full md:flex justify-between gap-10">
          <div className="w-full md:w-[50%]">
            <img src={getQuote} alt="" className="w-full h-full lg:h-[705px] object-cover lg:object-bottom" />
          </div>

          <div className="mx-auto w-full md:w-[50%] h-full py-10 md:py-0 bg-white rounded-lg">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium text-center md:text-start mb-6 lg:mb-10">
              Get a Free Consultation
            </h1>

            <form onSubmit={sendEmail}>
              <h1 className="md:text-xl font-medium mb-5 text-gray-700">Tell us about your home</h1>
              <div className="flex flex-wrap md:justify-between items-center lg:px-4 gap-4 mb-5">
                {['1 BHK', '2 BHK', '3 BHK', '4 BHK / Duplex', 'Bungalow / Villa'].map((option) => (
                  <label key={option} className="inline-flex items-center mb-2">
                    <input
                      type="radio"
                      name="bhk"
                      value={option}
                      className="form-radio text-indigo-600 mr-2"
                      onChange={handleChange}
                      required
                    />
                    {option}
                  </label>
                ))}
              </div>

              {/* Dropdown */}
              <div className="mb-5">
                <label htmlFor="city" className="block md:text-xl font-medium font-custom text-gray-700 mb-5">
                  Which city is this home in?
                </label>
                <select
                  id="city"
                  name="city"
                  className="w-full border px-3 py-3 border-gray-300 rounded-sm outline-none"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:flex justify-between items-center gap-5">
                <div className="mb-4 lg:w-[50%]">
                  <input
                    type="text"
                    name="firstName"
                    className="w-full py-4 px-5 rounded-sm border outline-none"
                    placeholder="Enter your first name..."
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4 lg:w-[50%]">
                  <input
                    type="text"
                    name="lastName"
                    className="w-full py-4 px-5 rounded-sm border outline-none"
                    placeholder="Enter your last name..."
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="lg:flex justify-between items-center gap-5">
                <div className="mb-4 lg:w-[50%]">
                  <input
                    type="text"
                    name="phone"
                    className="w-full py-4 px-5 rounded-sm border outline-none"
                    placeholder="Enter your phone number..."
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 lg:w-[50%]">
                  <input
                    type="email"
                    name="email"
                    className="w-full py-4 px-5 rounded-sm border outline-none"
                    placeholder="Enter your email..."
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-4 lg:mb-6">
                <textarea
                  name="message"
                  rows="4"
                  className="w-full h-44 py-3 px-3 rounded-sm border outline-none"
                  placeholder="Write your message here"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className={`w-full py-3 px-4 text-white rounded-md transition flex justify-center items-center ${isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#03b9b9] hover:bg-[#03b9b9d3]"
                    }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GetQuotePage;
