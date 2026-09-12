import React, { useState } from 'react';
import getQuote from '../../assets/getQuote.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet-async";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = ["Mumbai", "Thane", "Navi Mumbai"];
//   const cities = ['Banglore', 'Hyderabad', 'Chennai', 'Mumbai', 'Navi Mumbai', 'Thane', 'Mysore', 'Pune', 'Others'];
  const budget = ['15 Lacs - 20 Lacs', '20 Lacs - 25 Lacs', '25 Lacs - 35 Lacs', '35 Lacs - 50 Lacs',];
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    message: '',
    budget: '',
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
        'template_klw98so',
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
      <div className="limit">
        <Helmet>
          <title>Request a Quote | Premium Interior Designers in Mumbai</title>
          <meta name="description" content="Looking for luxury interiors? Get a custom quote for your home or commercial space. Premium craftsmanship & seamless project execution. Contact us today!" />
        </Helmet>

        <div className="w-full h-full md:flex justify-between gap-10 md:border py-2 md:py-5 lg:py-2 rounded-lg  border-gray-700">
          <div className="mx-auto w-full md:w-[80%] h-full py-10 md:py-0 bg-white rounded-lg ">
            <h1 className="text-2xl font-medium text-center  mb-3">
              Let's Talk About Your Project
            </h1>

            <form onSubmit={sendEmail}>
              <h1 className="md:text-xl font-medium text-gray-700">Tell us about your home</h1>
              <div className="flex flex-wrap md:justify-between items-center lg:px-4 gap-4 mb-2">
                {['2 BHK', '3 BHK', '4 BHK / Duplex', 'Bungalow / Villa'].map((option) => (
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
                <label htmlFor="city" className="block md:text-xl font-medium font-custom text-gray-700 mb-2">
                  Where are you located?
                </label>
                <select
                  id="city"
                  name="city"
                  className="w-full border px-1 py-1 border-gray-300 rounded-sm outline-none"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  {location.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-5">
                <label htmlFor="budget" className="block md:text-xl font-medium font-custom text-gray-700 mb-2">
                  What's Your Budget?
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full border px-1 py-1 border-gray-300 rounded-sm outline-none"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  {budget.map((budgetOption, index) => (
                    <option key={index} value={budgetOption}>
                      {budgetOption}
                    </option>
                  ))}
                </select>
              </div>

              <div className="gap-5">
                <div className="mb-4">
                  <input
                    type="text"
                    name="firstName"
                    className="w-full py-2 px-2 rounded-sm border outline-none"
                    placeholder="Enter your Full Name..."
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* <div className="mb-4 lg:w-[50%]">
                  <input
                    type="text"
                    name="lastName"
                    className="w-full py-4 px-5 rounded-sm border outline-none"
                    placeholder="Enter your last name..."
                    onChange={handleChange}
                    required
                  />
                </div> */}
              </div>

              <div className="lg:flex justify-between items-center gap-5">
                <div className="mb-4 lg:w-[50%]">
                  <input
                    type="text"
                    name="phone"
                    className="w-full py-2 px-2 rounded-sm border outline-none"
                    placeholder="Enter your phone number..."
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 lg:w-[50%]">
                  <input
                    type="email"
                    name="email"
                    className="w-full py-2 px-2 rounded-sm border outline-none"
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
                  className="w-full py-2 px-2 rounded-sm border outline-none"
                  placeholder="Write your message here"
                  onChange={handleChange}
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
    </>
  );
};

export default Form;
