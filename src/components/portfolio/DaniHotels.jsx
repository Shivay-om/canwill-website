import React, { useState } from 'react'
import dani from '../../assets/dani.jpg'
import dani2 from '../../assets/dani2.jpg'
import dani3 from '../../assets/dani3.jpg'
import dani4 from '../../assets/dani4.jpg'
import dani5 from '../../assets/dani5.jpg'

const DaniHotels = () => {
  const images = [dani3, dani4, dani5]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(null);

  // Open the modal and set the clicked image index
  const openModal = (index) => {
    setCurrentIndex(index);
  };

  // Close the modal
  const closeModal = () => {
    setCurrentIndex(null);
  };

  // Go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-4 md:p-10">
      <div>
        <img src={dani} alt="" className='md:w-full md:h-[600px] object-cover' />
      </div>

      <div className='md:flex md:my-10'>
        <div className='md:w-[50%]'>
          <div className='my-5'>
            <h1 className='text-3xl font-semibold text-center md:text-start mb-3'>Design challenge</h1>
            <p className='text-justify md:pr-5 md:my-10'>The initial building construction of this property already existed and was later chiseled by our design firm as a hotel. Located in Manipur, in the seismic zone 5 we faced extreme design challenges which in return made us outgrow much stronger. we had to reduce the load on the building during its construction due to its seismic vulnerabilities. This was to avoid impactful vibrations during times of earthquake. With utmost care and caution, our designers chose to use earthen pots arranged upside down instead of using brick-coba in order to reduce structural load.</p>
          </div>
          <div className='my-5 '>
            <h1 className='text-3xl font-semibold text-center md:text-start mb-3 md:pt-10'>About the property</h1>
            <p className='text-justify md:pr-5 md:my-10'>This four-star beautiful hotel amuses its guests with the bespoke ambiance which elevates the look and feel of this place as well as the services that it provides. As you walk through this hotel, every space is worth making heads turn. There is a feeling of hospitality that the structure bestows upon you as you commence your soulful trip to this luxurious property. This artful hotel welcomes you with a grand double height entrance lobby themed with earthy colors that don’t fail to set your mood right! These bright wood-toned colors characterize the soul of the hotel as a very warm and welcoming space where the guests can not only enjoy but also soulfully relax and unwind. Our architects have descended with an accent that is quite modern. We have inculcated a trendy choice of materials, fabrics, and furnishes. Housing 40 spacious rooms plus 2 sweets sizing 500 to 600sq.ft. each. The columns of the existing building were aesthetically concealed by us to induce value to the space.</p>
          </div>
        </div>
        <div className='md:w-[50%]'>
          <img src={dani2} alt="" />
        </div>
      </div>

      <div className='my-5'>
        <h1 className='text-3xl font-semibold text-center md:text-start mb-3'>Aroma restaurant</h1>
        <p className='text-justify'>With minimalism and accents from the color palette, we chose continuity with the hotel. This restaurant can comfortably house 60 people. Themed with warmness, the simplicity of this restaurant is adorned and highlighted by using brick walls by our adroit team of designers.</p>
      </div>

      <div className='my-5'>
        <h1 className='text-3xl font-semibold text-center md:text-start mb-3'>Scenic views.</h1>
        <p className='text-justify'>The top floor of this palatial hotel has a small swimming pool keeping the structural load in balance. Our guests enjoy this part of their vacation by spending quality time watching the sun descend from the mountains. The Cheiraou Ching views give you a memorable company!</p>
      </div>

      <div>
        {/* Image Grid */}
        <div className="md:flex justify-between gap-5">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="md:w-[350px] mb-5 cursor-pointer"
              onClick={() => openModal(index)}
            />
          ))}
        </div>

        {/* Modal */}
        {currentIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            {/* Modal Content */}
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-[-10px] right-[-10px] bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold"
              >
                ×
              </button>

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-[-50px] top-[50%] translate-y-[-50%] bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold"
              >
                ‹
              </button>

              {/* Image */}
              <img
                src={images[currentIndex]}
                alt="Selected"
                className="max-w-full max-h-screen"
              />

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-[-50px] top-[50%] translate-y-[-50%] bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DaniHotels
