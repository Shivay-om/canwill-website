import React, { useState, useEffect } from "react";
// import colonial from "../../assets/colonial/colonialCover.webp";
import colonial1 from '../../assets/colonial/colonial1.webp'
import colonial2 from '../../assets/colonial/colonial2.webp'
import colonial3 from '../../assets/colonial/colonial3.webp'
import colonial4 from '../../assets/colonial/colonial4.webp'
import colonial5 from '../../assets/colonial/colonial5.webp'
import colonial6 from '../../assets/colonial/colonial6.webp'
import colonial7 from '../../assets/colonial/colonial7.webp'
import colonial8 from '../../assets/colonial/colonial8.webp'
import Footer from "../Footer";


const colonialImages = [
  { img1: colonial1, img2: colonial2, img3: colonial3, img4: colonial4 },
  { img1: colonial5, img2: colonial6, img3: colonial7, img4: colonial8 },
];

const Colonial = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Flatten images array for navigation
  useEffect(() => {
    const imagesArray = colonialImages.flatMap((group) => [
      group.img1,
      group.img2,
      group.img3,
      group.img4,
    ]);
    setImageList(imagesArray);
  }, [colonialImages]);

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
          src={colonial2}
          alt=""
          className="md:w-full md:h-screen object-cover"
        />
      </div>

      <div className="p-5 md:p-10 md:flex">
        <div className=" md:w-[40%]">
          <h1 className="text-gray-700 text-2xl lg:text-4xl mb-2 tracking-wider">
          A Colonial Abode 
          </h1>
          <p className="text-gray-500">Residential Interior | Mumbai, Maharashtra</p>

          <div className="mt-4 md:pr-8 lg:pr-16">
            <p className="text-gray-500">
              <strong className="text-gray-700">Area :</strong> 200 sq.ft
            </p>
            <p className="text-gray-500">
              <strong className="text-gray-700">Status :</strong> Completed 2022
            </p>
            {/* <p className="text-gray-500">
              <strong className="text-gray-700">Photographer :</strong> Varad Anvekar
            </p> */}
            <p className="text-gray-500 lg:pr-5">
              <strong className="text-gray-700">Team:</strong> Shirish Kelkar, Taruni Kelkar, 
            </p>
          </div>
        </div>

        <div className="mt-5 md:m-0 md:w-[60%]">
          <div className="justify-center md:w-[95%] lg:w-[70%] text-gray-700 tracking-wide">
            <p className="mb-5"><strong>Colonial-Inspired Bedroom Design</strong></p>
            <p className="mb-5">
            A timeless blend of grandeur and grace, this colonial-inspired bedroom exudes warmth and elegance. At the heart of the space stands a majestic poster bed, its wooden ornate posts anchoring the room with a regal presence. Delicate sheer curtains drape around the bed, creating a dreamy, ethereal ambiance while adding a layer of intimacy and softness.
            </p>
            <p className="mb-5">
            The room is enveloped in crisp white cabinetry and wall paneling, lending a refined charm and a sense of classic sophistication. Thoughtfully chosen elaborate lamps cast a warm glow, while fresh flowers breathe life and vibrancy into the setting.
            </p>

            {/* Show the remaining paragraphs only when expanded */}
            {isExpanded && (
              <>
                <p className="mb-5">
                Completing the intricate detailing is a golden ceiling fan, a statement piece adorned with sculptural lights, seamlessly merging functionality with artistry. Every element in this space is curated to evoke a sense of nostalgia and luxury, making it an inviting sanctuary of comfort and style.
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
        {colonialImages.map((images, index) => (
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

export default Colonial;
