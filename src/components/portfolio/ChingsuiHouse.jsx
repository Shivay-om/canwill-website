import React, { useState, useEffect } from "react";
import cordelia from "../../assets/cordelia/cordeliaCover.webp";
import chingsui1 from '../../assets/chingsui/chingsui1.webp'
import chingsui2 from '../../assets/chingsui/chingsui2.webp'
import chingsui3 from '../../assets/chingsui/chingsui3.webp'
import chingsui4 from '../../assets/chingsui/chingsui4.webp'
import chingsui5 from '../../assets/chingsui/chingsui5.webp'
import chingsui6 from '../../assets/chingsui/chingsui6.webp'
import chingsui7 from '../../assets/chingsui/chingsui7.webp'
import chingsui8 from '../../assets/chingsui/chingsui8.webp'
import chingsui9 from '../../assets/chingsui/chingsui9.webp'
import chingsui10 from '../../assets/chingsui/chingsui10.webp'
import chingsui11 from '../../assets/chingsui/chingsui11.webp'
// import chingsui12 from '../../assets/chingsui/chingsui12.webp'
import chingsui13 from '../../assets/chingsui/chingsui13.webp'
// import chingsui14 from '../../assets/chingsui/chingsui14.webp'
import chingsui15 from '../../assets/chingsui/chingsui15.webp'
import chingsui16 from '../../assets/chingsui/chingsui16.webp'
// import chingsui17 from '../../assets/chingsui/chingsui17.webp'
import chingsui18 from '../../assets/chingsui/chingsui18.webp'
import chingsui19 from '../../assets/chingsui/chingsui19.webp'
import chingsui21 from '../../assets/chingsui/chingsui21.webp'
import chingsui22 from '../../assets/chingsui/chingsui22.webp'
import chingsui23 from '../../assets/chingsui/chingsui23.webp'
import chingsui24 from '../../assets/chingsui/chingsui24.webp'
import Footer from "../Footer";


const chingsuiImages = [
  { img1: chingsui1, img2: chingsui2, img3: chingsui3, img4: chingsui4, },
  { img1: chingsui5, img2: chingsui6, img3: chingsui7, img4: chingsui8, },
  { img1: chingsui9, img2: chingsui10, img3: chingsui11, img4: chingsui1, },
  { img1: chingsui13, img2: chingsui9, img3: chingsui15, img4: chingsui16, },
  { img1: chingsui9, img2: chingsui18, img3: chingsui19, img4: chingsui3, },
  { img1: chingsui21, img2: chingsui22, img3: chingsui23, img4: chingsui24, },
];

const ChingsuiHouse = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const imagesArray = chingsuiImages.flatMap((group) => [
      group.img1,
      group.img2,
      group.img3,
      group.img4,
    ]);
    setImageList(imagesArray);
  }, [chingsuiImages]);

  const openModal = (image) => {
    const index = imageList.indexOf(image);
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (currentIndex < imageList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(imageList[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(imageList[currentIndex - 1]);
    }
  };


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, imageList]);

  return (
    <div>
      <div>
        <img
          src={chingsui15}
          alt=""
          className="md:w-full md:h-screen object-cover"
        />
      </div>

      <div className="p-5 md:p-10 md:flex">
        <div className=" md:w-[40%]">
          <h1 className="text-gray-700 text-2xl lg:text-4xl mb-2 tracking-wider">
          Dr Chingsui’s Residence
          </h1>
          <p className="text-gray-500">Residential Architecture with Interior I Imphal, Manipur</p>

          <div className="mt-4 md:pr-8 lg:pr-16">
            <p className="text-gray-500">
              <strong className="text-gray-700">Area :</strong> 5500 sq.ft
            </p>
            <p className="text-gray-500">
              <strong className="text-gray-700">Status :</strong> Completed 2020
            </p>
            <p className="text-gray-500">
              <strong className="text-gray-700">Photographer :</strong> Ronald Wangkhem 
            </p>
            <p className="text-gray-500 lg:pr-5">
              <strong className="text-gray-700">Team:</strong> Shirish Kelkar, Taruni Kelkar
            </p>
          </div>
        </div>

        <div className="mt-5 md:m-0 md:w-[60%]">
          <div className="justify-center md:w-[95%] lg:w-[70%] text-gray-700 tracking-wide">
            <p className="font-semibold tracking-wider text-lg mb-3"></p>
            <p className="mb-5">
            Designed by Canwill Design Associates, this bungalow in Manipur features a ground-plus three-structure with four bedrooms. The design incorporates elements of Manipuri culture, using traditional materials and a colour palette inspired by the region. The living room on the first floor showcases a tranquil palette and a seamless blend of timber brown and white walls with marble flooring. A floral rug adds a touch of comfort to the space, complementing the brown sofas. there is a conscious fluidity that adds subtle accents without overpowering the design. 
            </p>

            <p className="font-semibold tracking-wider text-lg mb-3"></p>
            <p className="mb-5">
            Traditional Manipuri artifacts, including a Nungbi stone artifact and Thomchet (lotus fruit), adorn the home. The family room on the third-floor features blue self-customised  sofas and wooden stairs with black cables leading to the terrace. The younger son's bedroom on the second floor is elegant, with geometric printed sheets and a grey headboard. The daughter's room is designed in a girly and quirky fashion, incorporating floral bedsheets and rugs. The couple's bedroom exudes a romantic ambiance with a lovely shade of blue, floral rugs, and soft fabric accents. The guest bedroom on the third floor offers scenic mountain views and a simple yet welcoming design. The sit-out space near the window is adorned with cozy printed cushions, providing a comfortable area for relaxation. The marble stairway with a timber railing connects the floors, and the cozy wooden kitchen adds a distinctive touch to the home.
            </p>

            
          </div>
        </div>
      </div>

      <div>
        {chingsuiImages.map((images, index) => (
          <div key={index} className={index !== 0 ? "mt-3 md:mt-5" : ""}>
            <div className="flex w-[100%]">
              <img
                src={images.img1}
                alt=""
                className="w-[35%] lg:h-screen object-cover pr-3 md:pr-5 cursor-pointer"
                onClick={() => openModal(images.img1)}
              />
              <img
                src={images.img2}
                alt=""
                className="w-[65%] lg:h-screen object-cover cursor-pointer"
                onClick={() => openModal(images.img2)}
              />
            </div>
            <div className="flex mt-3 md:mt-5 w-[100%]">
              <img
                src={images.img3}
                alt=""
                className="w-[65%] lg:h-screen object-cover pr-3 md:pr-5 cursor-pointer"
                onClick={() => openModal(images.img3)}
              />
              <img
                src={images.img4}
                alt=""
                className="w-[35%] lg:h-screen object-cover cursor-pointer"
                onClick={() => openModal(images.img4)}
              />
            </div>
          </div>
        ))}

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <button
              className="absolute top-2 right-2 text-white text-2xl p-2 rounded-full"
              onClick={closeModal}
            >
              ✕
            </button>
            <button
              className={`absolute left-5 text-white text-3xl p-3 rounded-full ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={prevImage}
              disabled={currentIndex === 0}
            >
              ◀
            </button>
            <img src={selectedImage} alt="Full screen" className="max-w-full max-h-screen" />
            <button
              className={`absolute right-5 text-white text-3xl p-3 rounded-full ${currentIndex === imageList.length - 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={nextImage}
              disabled={currentIndex === imageList.length - 1}
            >
              ▶
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ChingsuiHouse;
