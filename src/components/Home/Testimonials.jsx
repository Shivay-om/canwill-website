import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // import Swiper styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const testimonialData = [
  {
    id: 1,
    text: "Essajees was the ultimate pleasure to work with. The innovation, creativity and design was excellent and the attention to detail really put their work over the top. The team took the time to understand the requirement, laid out realistic budgets and made sure to follow up with contractors to ensure that delivery was timely. Thank you Sarah and team, you guys epitomised commitment, professionalism and most of all passion!",
    name: "John Doe",
    role: "CEO, Company ABC",
  },
  {
    id: 2,
    text: "Sarah has been the best decision we ever made. It’s not just me but my whole family says this. We had shortlisted 3 designers, met Sarah first and we did not end up meeting anyone else . We signed her on during her pregnancy, and did not look back at anything after our first meeting.",
    name: "Jane Smith",
    role: "Marketing Director, Company XYZ",
  },
  {
    id: 3,
    text: "We are 3 generations living in the same house and that meant catering to all ages. We also went for a fusion aesthetic mixing traditional architecture with modern interiors. Sarah s team navigated this problem statement beautifully and patiently iterating through the process and today when I see my sons sleeping on the jhoola, I just think to myself: a job well done. The team has been super helpful post handover as well helping us patiently with connects and some basic hand holding. All in all a great experience and a big thank you.",
    name: "Alice Johnson",
    role: "Product Manager, Company LMN",
  },
];

const Testimonials = () => {
  return (
    <div className="py-10 md:w-[90%] md:h-screen mx-auto border mt-10 bg-[#E7F2F9]">
      <h2 className="text-center text-2xl text-[#0093dd] mt-5 md:text-4xl font-semibold mb-6">What Our Clients Say</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // Auto-slide every 3 seconds
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
        }}
      >
        {testimonialData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col items-center w-[80%] mx-auto  p-6 rounded-lg ">
              <p className="text-center text-xl text-gray-700 my-8 ">{testimonial.text}</p>
              <p className="font-semibold text-[#0093dd] text-2xl">{testimonial.name}</p>
              <p className="text-sm text-gray-500 mb-10">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
