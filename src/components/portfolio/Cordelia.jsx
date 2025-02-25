import React, { useState, useEffect } from "react";
import cordelia from "../../assets/cordelia/cordeliaCover.webp";
import cordelia1 from '../../assets/cordelia/cordelia1.webp'
import cordelia2 from '../../assets/cordelia/cordelia2.webp'
import cordelia3 from '../../assets/cordelia/cordelia3.webp'
import cordelia4 from '../../assets/cordelia/cordelia4.webp'
import cordelia5 from '../../assets/cordelia/cordelia5.webp'
import cordelia6 from '../../assets/cordelia/cordelia6.webp'
import cordelia7 from '../../assets/cordelia/cordelia7.webp'
import cordelia8 from '../../assets/cordelia/cordelia8.webp'
import Footer from "../Footer";


const cordeliaImages = [
  { img1: cordelia1, img2: cordelia2, img3: cordelia3, img4: cordelia4 },
  { img1: cordelia5, img2: cordelia6, img3: cordelia7, img4: cordelia8 },
];

const Cordelia = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flatten images array for navigation
  useEffect(() => {
    const imagesArray = cordeliaImages.flatMap((group) => [
      group.img1,
      group.img2,
      group.img3,
      group.img4,
    ]);
    setImageList(imagesArray);
  }, [cordeliaImages]);

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
          src={cordelia}
          alt=""
          className="md:w-full md:h-screen object-cover"
        />
      </div>

      <div className="p-5 md:p-10 md:flex">
        <div className=" md:w-[40%]">
          <h1 className="text-gray-700 text-2xl lg:text-4xl mb-2 tracking-wider">
            Cordelier's Cafe
          </h1>
          <p className="text-gray-500">Commercial | Mumbai, Maharashtra</p>

          <div className="mt-4 md:pr-8 lg:pr-16">
            <p className="text-gray-500">
              <strong className="text-gray-700">Area :</strong> 1000 sq.ft
            </p>
            <p className="text-gray-500">
              <strong className="text-gray-700">Status :</strong> Completed 2023
            </p>
            <p className="text-gray-500">
              <strong className="text-gray-700">Photographer :</strong> Varad Anvekar
            </p>
            <p className="text-gray-500 lg:pr-5">
              <strong className="text-gray-700">Team:</strong> Shirish Kelkar, Taruni Kelkar, Jinal
              Nevadia, Tanishka Kelkar, Gaurav Mishra
            </p>
          </div>
        </div>

        <div className=" mt-5 md:m-0 md:w-[60%]">
          <div className="justify-center md:w-[95%] lg:w-[70%] text-gray-700 tracking-wide">
           <p className="mb-5">Cordelier’s Cafe is a hidden gem nestled in the heart of Airoli's high-tech park, offering a distinctive blend of vibrant yet cozy spaces. Designed specifically to cater to the dynamic office-goers of the tech park, the cafe provides a much-needed retreat from the fast-paced corporate environment. With its peaceful ambience overlooking the park's entrance, it seamlessly integrates comfort and elegance, creating an ideal setting for both work and relaxation.
           </p>
           <p className="mb-5">As soon as you step inside, you are greeted by an atmosphere of tranquillity and warmth, a stark contrast to the bustling world outside. Earthy-toned warm yellow and pastel green hues dominate the walls, evoking a sense of calm and serenity. Deep blue walls, finished with a rich texture, further enhance the luxurious appeal of the cafe.
           </p>
           <p className="mb-5">The seating arrangements are designed with both aesthetics and comfort in mind. Custom-made Chesterfield sofas lend a refined charm to the space while ensuring a cozy experience for patrons. The Cafe pays homage to classical design through its architectural elements. The symmetrical arches adorning the back wall lend a sense of grandeur and harmony to the interiors. These arches are enhanced by backlit niches, which serve as focal points for decorative elements, subtly adding character to the space.
           </p>
           <p className="mb-5">Cordelier’s Cafe redefines dining within Airoli’s high-tech park by seamlessly blending contemporary design with comfort and sophistication. Whether you are looking for a quiet corner to work, a cozy spot to unwind, or an elegant space to connect with colleagues, the Cafe offers the perfect sanctuary within the corporate landscape.
           </p>
          </div>
        </div>
      </div>

      <div>
        {cordeliaImages.map((images, index) => (
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

      <Footer/>
    </div>
  );
};

export default Cordelia;
