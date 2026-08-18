import React, { useState, useEffect } from "react";
import cordelia from "../../assets/cordelia/cordeliaCover.webp";
import forest1 from '../../assets/house of forest/forest1.webp'
import forest2 from '../../assets/house of forest/forest2.webp'
import forest3 from '../../assets/house of forest/forest3.webp'
import forest4 from '../../assets/house of forest/forest4.webp'
import forest5 from '../../assets/house of forest/forest5.webp'
// import forest6 from '../../assets/house of forest/forest6.webp'
import forest7 from '../../assets/house of forest/forest7.webp'
import forest8 from '../../assets/house of forest/forest8.webp'
import forest9 from '../../assets/house of forest/forest9.webp'
import forest10 from '../../assets/house of forest/forest10.webp'
import forest11 from '../../assets/house of forest/forest11.webp'
import forest12 from '../../assets/house of forest/forest12.webp'
import forest13 from '../../assets/house of forest/forest13.webp'
// import forest14 from '../../assets/house of forest/forest14.webp'
import forest15 from '../../assets/house of forest/forest15.webp'
import forest16 from '../../assets/house of forest/forest16.webp'
import forest17 from '../../assets/house of forest/forest17.webp'
import forest18 from '../../assets/house of forest/forest18.webp'
import forest19 from '../../assets/house of forest/forest19.webp'
import forest20 from '../../assets/house of forest/forest20.webp'
import Footer from "../Footer";


const forestImages = [
  { img1: forest1, img2: forest2, img3: forest3, img4: forest4, },
  { img1: forest5, img2: forest2, img3: forest7, img4: forest8, },
  { img1: forest9, img2: forest10, img3: forest11, img4: forest12, },
  { img1: forest13, img2: forest3, img3: forest15, img4: forest16, },
  { img1: forest17, img2: forest18, img3: forest19, img4: forest20, },
//   { img1: forest5, img2: forest6, },
];

const HouseForest = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const imagesArray = forestImages.flatMap((group) => [
      group.img1,
      group.img2,
      group.img3,
      group.img4,
    ]);
    setImageList(imagesArray);
  }, [forestImages]);

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
          src={forest3}
          alt=""
          className="md:w-full md:h-screen object-cover"
        />
      </div>

      <div className="p-5 md:p-10 md:flex">
        <div className=" md:w-[40%]">
          <h1 className="text-gray-700 text-2xl lg:text-4xl mb-2 tracking-wider">
          House Overlooking the Forest
          </h1>
          <p className="text-gray-500">Residential Interior I Aarey, Mumbai, Maharashtra</p>

          <div className="mt-4 md:pr-8 lg:pr-16">
            <p className="text-gray-500">
              <strong className="text-gray-700">Area :</strong> 1100 sq.ft
            </p>
            <p className="text-gray-500">
              <strong className="text-gray-700">Status :</strong> Completed 2024
            </p>
            <p className="text-gray-500">
              <strong className="text-gray-700">Photographer :</strong> Varad Anvekar
            </p>
            <p className="text-gray-500 lg:pr-5">
              <strong className="text-gray-700">Team:</strong> Shirish Kelkar, Taruni Kelkar, Jinal
              Nevadia, Tanishka Kelkar
            </p>
          </div>
        </div>

        <div className="mt-5 md:m-0 md:w-[60%]">
          <div className="justify-center md:w-[95%] lg:w-[70%] text-gray-700 tracking-wide">
            <p className="font-semibold tracking-wider text-lg mb-3"></p>
            <p className="mb-5">
            A Serene Urban Retreat Overlooking Aarey Forest. Perched above the lush expanse of Aarey Forest, this thoughtfully designed apartment offers a seamless blend of warmth, elegance, and nature. Expansive windows frame breathtaking green views, while arched passageways, rich wood accents, and soft furnishings create a timeless and inviting atmosphere.
            </p>

            <p className="font-semibold tracking-wider text-lg mb-3"></p>
            <p className="mb-5">
            The living room is designed for both comfort and style, featuring cozy seating that encourages relaxation. A bespoke bar unit with fluted glass and deep wood tones adds a refined touch, perfect for entertaining. Over the dining table, a statement chandelier casts a warm glow, enhancing the space’s intimate, sophisticated feel.
            </p>

            {/* Show the remaining paragraphs only when expanded */}
            {isExpanded && (
              <>
                <p className="font-semibold tracking-wider text-lg mb-3"></p>
                <p className="mb-5">
                The primary bedroom is a serene sanctuary, where delicate floral wallpaper meets fluted wood paneling, bringing texture and charm. Thoughtful accent lighting adds depth, creating a cozy yet elegant retreat. In contrast, the kids’ room is playful and imaginative, with a vibrant blue palette and a hand-painted mountainscape that sparks creativity and adventure. 
                </p>

                <p className="font-semibold tracking-wider text-lg mb-3"></p>
                <p className="mb-5">
                Designed as a harmonious escape from the city’s fast pace, this home captures the essence of modern living, balancing refined aesthetics with the tranquility of nature.
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
        {forestImages.map((images, index) => (
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

export default HouseForest;
