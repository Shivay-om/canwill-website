import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // import Swiper styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const testimonialData = [
  {
    id: 1,
    text: "Easy to discuss ideas and preferences. Good professional team with very creative and talented leadership. Recommended.",
    Location: "- Living Manipur",
  },
  {
    id: 2,
    text: "They have a professional approach with a personal touch. The speciality of their design is a lot due to the individual attention given to the needs and likes of the users. They CAN and definitely WILL come up with a unique style for every space they design.Highly recommend.",
    Location: "- Aparajita Dutta",
  },
  {
    id: 3,
    text: "CanWill is your go to firm for all interior and architecture works. They have got that knack of making quality personal spaces. Extreme professionalism in design and execution along with the most pleasant client interactions sets them apart.",
    Location: "- Mathew Adam",
  },
  {
    id: 4,
    text: "Had a wonderful experience with Canwill Design .. All our questions were patiently answered… We love the new look of our house …They understood our requirements and were willing to walk an extra mile to deliver our dream…Impressed with the amalgamation of beauty and functionality.",
    Location: "- Shalini Dhillon",
  },
  {
    id: 5,
    text: "Amazing Design Firm which delivers careful and articulated design that suit the clients need and also takes pretence from the surrounding environment to provide an amazing design solution.",
    Location: "- Gaurav Mishra",
  },
  {
    id: 6,
    text: "Highly recommended, I have done various projects with them and they have always delivered. The use of space and efficiency of design stands out.",
    Location: "- Dilrani Yumnam",
  },
];

const Testimonials = () => {
  return (
    <div className="relative p-5 md:py-10 md:w-[90%] md:h-[450px] mx-auto mt-10">
      <h2 className="text-center text-xl text-gray-700 mt-5 md:text-2xl font-semibold mb-6">" Meet Our Happy Customers / Just Don't take our word for it!!</h2>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev absolute top-1/2 left-2 z-10 transform -translate-y-1/2  border-[#00B8B8]  p-2">
        <IoIosArrowBack size={34}/>
      </button>
      <button className="custom-next absolute top-1/2 right-2 z-10 transform -translate-y-1/2  border-[#00B8B8] p-2">
        <IoIosArrowForward size={34}/>
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation={{
        //   prevEl: ".custom-prev",
        //   nextEl: ".custom-next",
        // }}
        navigation={false}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000, // Auto-slide every 3 seconds
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        breakpoints={{
          1024: {
            navigation: true,
          },
          0: {
            // Disable navigation for screens below 1024px
            navigation: false,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
        }}
        className="custom-swiper border-black"
      >
        {testimonialData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col items-center md:w-[80%] mx-auto  md:p-4 md:px-6 rounded-lg ">
              <p className="text-center md:text-xl  my-6 ">{testimonial.text}</p>
              <p className=" text-gray-500 md:text-2xl mb-4">{testimonial.Location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination flex justify-center"></div>
    </div>
  );
};

export default Testimonials;
