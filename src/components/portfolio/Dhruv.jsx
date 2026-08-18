import React, { useState, useEffect } from "react";
import cordelia from "../../assets/cordelia/cordeliaCover.webp";
import dhruv1 from '../../assets/dhruv/dhruv1.webp'
import dhruv2 from '../../assets/dhruv/dhruv2.webp'
import dhruv3 from '../../assets/dhruv/dhruv3.webp'
import dhruv4 from '../../assets/dhruv/dhruv4.webp'
import dhruv5 from '../../assets/dhruv/dhruv5.webp'
import dhruv6 from '../../assets/dhruv/dhruv6.webp'
import dhruv7 from '../../assets/dhruv/dhruv7.webp'
import dhruv8 from '../../assets/dhruv/dhruv8.webp'
import dhruv9 from '../../assets/dhruv/dhruv9.webp'
import dhruv10 from '../../assets/dhruv/dhruv10.webp'
import dhruv11 from '../../assets/dhruv/dhruv11.webp'
import dhruv12 from '../../assets/dhruv/dhruv12.webp'
import dhruv13 from '../../assets/dhruv/dhruv13.webp'
import dhruv14 from '../../assets/dhruv/dhruv14.webp'
import dhruv15 from '../../assets/dhruv/dhruv15.webp'
import dhruv16 from '../../assets/dhruv/dhruv16.webp'
import dhruv17 from '../../assets/dhruv/dhruv17.webp'
import dhruv18 from '../../assets/dhruv/dhruv18.webp'
import dhruv19 from '../../assets/dhruv/dhruv19.webp'
import dhruv20 from '../../assets/dhruv/dhruv20.webp'
import Footer from "../Footer";


const dhruvImages = [
  { img1: dhruv1, img2: dhruv2, img3: dhruv3, img4: dhruv4, },
  { img1: dhruv5, img2: dhruv6, img3: dhruv7, img4: dhruv8, },
  { img1: dhruv9, img2: dhruv10, img3: dhruv11, img4: dhruv12, },
  { img1: dhruv13, img2: dhruv14, img3: dhruv15, img4: dhruv16, },
  { img1: dhruv17, img2: dhruv18, img3: dhruv19, img4: dhruv20, },
//   { img1: dhruv5, img2: dhruv6, },
];

const Dhruv = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const imagesArray = dhruvImages.flatMap((group) => [
      group.img1,
      group.img2,
      group.img3,
      group.img4,
    ]);
    setImageList(imagesArray);
  }, [dhruvImages]);

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
          src={dhruv3}
          alt=""
          className="md:w-full md:h-screen object-cover"
        />
      </div>

      <div className="p-5 md:p-10 md:flex">
        <div className=" md:w-[40%]">
          <h1 className="text-gray-700 text-2xl lg:text-4xl mb-2 tracking-wider">
          Sky City Residence
          </h1>
          <p className="text-gray-500">Residential | Mumbai, Maharashtra</p>

          <div className="mt-4 md:pr-8 lg:pr-16">
            <p className="text-gray-500">
              <strong className="text-gray-700">Area :</strong> 1700 sq.ft
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
            <p className="font-semibold tracking-wider text-lg mb-3">Minimal Elegance Meets Warmth and Functionality</p>
            <p className="mb-5">
            This home in a high rise residential tower in Borivali exudes a harmonious blend of minimalism and warmth, with clean lines and a soft, natural palette. The design embraces an understated elegance, enhanced by warm wood tones, sleek details, and an abundance of natural light streaming in through expansive windows that frame breathtaking views of the city from every room.
            </p>

            <p className="font-semibold tracking-wider text-lg mb-3">Living Spaces</p>
            <p className="mb-5">
            The living and dining areas are thoughtfully designed to prioritize comfort and openness. The clean aesthetics and the warm tones of wood used in the furnishings are contrasted with a few quirky accents. Every corner invites relaxation while maintaining a sleek, modern appeal. A sleek and sophisticated bar counter with warm wood tones and a polished stone top serves as a stunning focal point. Ambient lighting and seamless storage make it both functional and inviting for social gatherings.
            </p>

            {/* Show the remaining paragraphs only when expanded */}
            {isExpanded && (
              <>
                <p className="font-semibold tracking-wider text-lg mb-3">Kitchen</p>
                <p className="mb-5">
                The kitchen is an elegant haven, featuring a sleek, interactive island counter that serves as a hub for casual dining and entertaining. A sliding fluted glass partition allows for flexibility and privacy when needed, suiting Indian cooking requirements. The combination of clean Italian marble countertops, fluted glass and ergonomic design makes this space both stylish and practical. 
                </p>

                <p className="font-semibold tracking-wider text-lg mb-3">Bedroom 1</p>
                <p className="mb-5">
                Inspired by Japandi aesthetics, this room offers a serene retreat with a raised platform bed and a light wood finish. The design balances Japanese minimalism and Scandinavian warmth, creating a calming atmosphere perfect for rest and relaxation.
                </p>

                <p className="font-semibold tracking-wider text-lg mb-3">Daughter's Bedroom</p>
                <p className="mb-5">
                The young daughter’s room is a charming, girly sanctuary filled with personality and comfort. Soft colours and whimsical design elements make this room a delightful haven while maintaining a sophisticated balance with the rest of the home. A decked out vanity table with open shelves throughout to display her soft toys make this space every little girl’s dream. 
                </p>

                <p className="font-semibold tracking-wider text-lg mb-3">Master Bedroom</p>
                <p className="mb-5">
                The master bedroom is an expansive, luxurious space that feels like a private oasis. Large windows maximize natural light and showcase the city views, while the design incorporates warm tones, plush textures, and understated elegance to create an inviting and tranquil environment.
                </p>

                <p className="font-semibold tracking-wider text-lg mb-3">Details & Finishing Touches</p>
                <p className="mb-5">
                The design prioritizes subtle yet impactful details that elevate the overall aesthetic. Thoughtful lighting, stylish furnishings and clean hardware contribute to the home's sleek, cohesive look. Every element is chosen with precision, ensuring that functionality meets refined beauty in every space.
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
        {dhruvImages.map((images, index) => (
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

export default Dhruv;
