import React, { useState, useEffect } from "react";
// import exquisite from "../../assets/exquisite/exquisiteCover.webp";
import exquisite1 from '../../assets/Exquisite/1.webp'
import exquisite2 from '../../assets/Exquisite/2.webp'
import exquisite3 from '../../assets/Exquisite/3.webp'
import exquisite4 from '../../assets/Exquisite/4.webp'
import exquisite5 from '../../assets/Exquisite/5.webp'
import exquisite6 from '../../assets/Exquisite/6.webp'
import exquisite7 from '../../assets/Exquisite/7.webp'
import exquisite8 from '../../assets/Exquisite/8.webp'
import Footer from "../Footer";


const exquisiteImages = [
  { img1: exquisite1, img2: exquisite2, img3: exquisite3, img4: exquisite4 },
  { img1: exquisite5, img2: exquisite6, img3: exquisite7, img4: exquisite8 },
];

const Exquisite = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Flatten images array for navigation
  useEffect(() => {
    const imagesArray = exquisiteImages.flatMap((group) => [
      group.img1,
      group.img2,
      group.img3,
      group.img4,
    ]);
    setImageList(imagesArray);
  }, [exquisiteImages]);

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

  // Keyboard navigation
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
          src={exquisite2}
          alt=""
          className="md:w-full md:h-screen object-cover"
        />
      </div>

      <div className="p-5 md:p-10 md:flex">
        <div className=" md:w-[40%]">
          <h1 className="text-gray-700 text-2xl lg:text-4xl mb-2 tracking-wider">
          Exquisite Home  
          </h1>
          <p className="text-gray-500">Residential  Interior | Mumbai, Maharashtra</p>

          <div className="mt-4 md:pr-8 lg:pr-16">
            <p className="text-gray-500">
              <strong className="text-gray-700">Area :</strong> 1300 sq.ft
            </p>
            <p className="text-gray-500">
              <strong className="text-gray-700">Status :</strong> Completed 2016
            </p>
            <p className="text-gray-500">
              <strong className="text-gray-700">Photographer :</strong> Nilesh Kale
            </p>
            <p className="text-gray-500 lg:pr-5">
              <strong className="text-gray-700">Team:</strong> Shirish Kelkar, Taruni Kelkar, 
            </p>
          </div>
        </div>

        <div className="mt-5 md:m-0 md:w-[60%]">
          <div className="justify-center md:w-[95%] lg:w-[70%] text-gray-700 tracking-wide">
            <p className="mb-5">
            A seamless blend of sophistication and simplicity, this luxury minimalist interior design embraces elegance through clean lines, high-end materials, and a restrained color palette. The foundation of the space is polished marble flooring, adding a timeless opulence while enhancing the airy and expansive feel of the interiors.
            </p>
            <p className="mb-5">
            Sleek furnishings in rich dark wood contrast with a predominantly white and grey color scheme, creating a refined balance between warmth and modernity. Carefully curated modern chandeliers serve as statement pieces, illuminating the space with an understated yet striking presence.
            </p>

            {/* Show the remaining paragraphs only when expanded */}
            {isExpanded && (
              <>
                <p className="mb-5">
                While the design remains rooted in minimalism, selective pops of color—whether through artwork, accent cushions, or sculptural décor—add personality without overwhelming the serene ambiance. The result is an effortlessly luxurious space that embodies both functionality and high design, offering a tranquil yet indulgent living experience.
                </p>
              </>
            )}

            {/* Read More / Read Less Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:underline"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>

      <div>
        {exquisiteImages.map((images, index) => (
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

export default Exquisite;
