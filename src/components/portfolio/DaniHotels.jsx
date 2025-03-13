import React, { useState, useEffect } from "react";
import cordelia from "../../assets/cordelia/cordeliaCover.webp";
import dani1 from '../../assets/dani/1.jpg'
import dani2 from '../../assets/dani/2.jpg'
import dani3 from '../../assets/dani/3.jpg'
import dani4 from '../../assets/dani/4.jpg'
import dani5 from '../../assets/dani/5.jpg'
import dani6 from '../../assets/dani/6.jpg'
import dani7 from '../../assets/dani/7.jpg'
import dani8 from '../../assets/dani/8.jpeg'
import dani9 from '../../assets/dani/9.jpeg'
import dani10 from '../../assets/dani/10.jpg'
import dani11 from '../../assets/dani/11.jpg'
// import dani12 from '../../assets/dani/12.jpeg'
import dani13 from '../../assets/dani/13.jpg'
import dani14 from '../../assets/dani/14.webp'
import dani15 from '../../assets/dani/15.jpg'
import dani16 from '../../assets/dani/16.jpg'
import dani17 from '../../assets/dani/17.jpeg'
import dani18 from '../../assets/dani/18.jpeg'
import dani19 from '../../assets/dani/19.png'
import dani20 from '../../assets/dani/20.jpg'
import dani21 from '../../assets/dani/21.jpeg'
import dani22 from '../../assets/dani/22.jpeg'
import dani23 from '../../assets/dani/23.jpg'
import dani24 from '../../assets/dani/24.jpg'
import Footer from "../Footer";


const daniImages = [
  { img1: dani1, img2: dani2, img3: dani3, img4: dani4, },
  { img1: dani5, img2: dani6, img3: dani7, img4: dani8, },
  { img1: dani9, img2: dani10, img3: dani11, img4: dani1, },
  { img1: dani13, img2: dani14, img3: dani15, img4: dani16, },
  { img1: dani17, img2: dani18, img3: dani19, img4: dani20, },
  { img1: dani21, img2: dani22, img3: dani23, img4: dani24, },
];

const DaniHotels = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const imagesArray = daniImages.flatMap((group) => [
      group.img1,
      group.img2,
      group.img3,
      group.img4,
    ]);
    setImageList(imagesArray);
  }, [daniImages]);

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
          src={dani19}
          alt=""
          className="md:w-full md:h-screen object-cover"
        />
      </div>

      <div className="p-5 md:p-10 md:flex">
        <div className=" md:w-[40%]">
          <h1 className="text-gray-700 text-2xl lg:text-4xl mb-2 tracking-wider">
            Hotel Daani Continental
          </h1>
          <p className="text-gray-500">Hotel Architecture and Interior I Imphal, Manipur</p>

          <div className="mt-4 md:pr-8 lg:pr-16">
            <p className="text-gray-500">
              <strong className="text-gray-700">Area :</strong> 32000 sq.ft
            </p>
            <p className="text-gray-500">
              <strong className="text-gray-700">Status :</strong> Completed 2020
            </p>
            {/* <p className="text-gray-500">
              <strong className="text-gray-700">Photographer :</strong> Ronald Wangkhem 
            </p> */}
            <p className="text-gray-500 lg:pr-5">
              <strong className="text-gray-700">Team:</strong> Shirish Kelkar, Taruni Kelkar, Suresh Sutar, Shiv Yadav, Dhanashree Gharat
            </p>
          </div>
        </div>

        <div className="mt-5 md:m-0 md:w-[60%]">
          <div className="justify-center md:w-[95%] lg:w-[70%] text-gray-700 tracking-wide">
            <p className="mb-5">
              Originally constructed as a standard building, this property was transformed into a luxurious four-star hotel by our design firm. Situated in Manipur’s seismic zone 5, we faced significant structural challenges that pushed our design expertise to new heights. To mitigate seismic vulnerabilities, we implemented innovative techniques to reduce the building’s load, ensuring long-term stability and safety. One such method involved replacing traditional brick-coba with upside-down earthen pots, effectively minimizing structural strain and potential earthquake vibrations.
            </p>

            <p className="mb-5">
              Stepping into this hotel, guests are greeted by a grand double-height entrance lobby that exudes warmth through a rich, earth-toned palette. The interplay of natural wood tones and soft lighting establishes a welcoming atmosphere, setting the tone for an experience that is both luxurious and soul-soothing. The hotel comprises 40 spacious rooms and two premium suites, each spanning 500 to 600 sq. ft. To maintain a refined aesthetic, the existing structural columns were seamlessly concealed, enhancing the overall design cohesion.
            </p>

            {/* Show the remaining paragraphs only when expanded */}
            {isExpanded && (
              <>
                <p className="mb-5 font-bold">Aroma Restaurant – </p>
                <p className="mb-5">
                  Designed with a continuity of theme, Aroma Restaurant extends the hotel’s inviting ambiance into its 60-seater dining space. The minimalist yet warm interiors are brought to life with exposed brick walls.
                </p>

                <p className="mb-5 font-bold">An Elevated Retreat – Rooftop Pool with Mountain Views </p>

                <p className="mb-5">
                  The top floor of this palatial retreat features a small swimming pool, strategically designed to maintain structural balance. Here, guests can unwind while taking in the breathtaking Cheiraoching mountain views, watching the sun dip below the horizon—a truly unforgettable experience.
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
        {daniImages.map((images, index) => (
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

export default DaniHotels;
