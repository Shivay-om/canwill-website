import React, { useState, useEffect } from "react";
import iyer from "../../assets/iyer/iyerCover.webp";
import iyer1 from '../../assets/iyer/iyer1.webp'
import iyer2 from '../../assets/iyer/iyer2.webp'
import iyer3 from '../../assets/iyer/iyer3.webp'
import iyer4 from '../../assets/iyer/iyer4.webp'
import iyer5 from '../../assets/iyer/iyer5.webp'
import iyer6 from '../../assets/iyer/iyer6.webp'
import iyer7 from '../../assets/iyer/iyer7.webp'
import iyer8 from '../../assets/iyer/iyer8.webp'
import iyer9 from '../../assets/iyer/iyer9.webp'
import iyer10 from '../../assets/iyer/iyer10.webp'
import iyer11 from '../../assets/iyer/iyer11.webp'
import iyer12 from '../../assets/iyer/iyer12.webp'
import iyer13 from '../../assets/iyer/iyer13.webp'
import iyer14 from '../../assets/iyer/iyer14.webp'
import iyer15 from '../../assets/iyer/iyer15.webp'
import iyer16 from '../../assets/iyer/iyer16.webp'
import iyer17 from '../../assets/iyer/iyer17.webp'
import iyer18 from '../../assets/iyer/iyer18.webp'
import iyer19 from '../../assets/iyer/iyer19.webp'
import iyer20 from '../../assets/iyer/iyer20.webp'
import iyer21 from '../../assets/iyer/iyer21.webp'
import iyer22 from '../../assets/iyer/iyer22.webp'
import iyer23 from '../../assets/iyer/iyer23.webp'
import iyer24 from '../../assets/iyer/iyer24.webp'
import iyer25 from '../../assets/iyer/iyer25.webp'
import iyer26 from '../../assets/iyer/iyer26.webp'
import iyer27 from '../../assets/iyer/iyer27.webp'
import iyer28 from '../../assets/iyer/iyer28.webp'
import iyer29 from '../../assets/iyer/iyer29.webp'
import iyer30 from '../../assets/iyer/iyer30.webp'
import iyer31 from '../../assets/iyer/iyer31.webp'
import iyer32 from '../../assets/iyer/iyer32.webp'
import Footer from "../Footer";


const iyerImages = [
  { img1: iyer1, img2: iyer2, img3: iyer3, img4: iyer4, },
  { img1: iyer5, img2: iyer6, img3: iyer7, img4: iyer8, },
  { img1: iyer9, img2: iyer10, img3: iyer11, img4: iyer12, },
  { img1: iyer13, img2: iyer14, img3: iyer15, img4: iyer16, },
  { img1: iyer17, img2: iyer18, img3: iyer19, img4: iyer20, },
  { img1: iyer21, img2: iyer22, img3: iyer23, img4: iyer24, },
  { img1: iyer25, img2: iyer26, img3: iyer27, img4: iyer28, },
  { img1: iyer29, img2: iyer30, img3: iyer31, img4: iyer32, },
];

const Iyer = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageList, setImageList] = useState([iyerImages]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    // Flatten images array for navigation
    // useEffect(() => {
    //     const imagesArray = cordeliaImages.flatMap((group) => [
    //         group.img1,
    //         group.img2,
    //         group.img3,
    //         group.img4,
    //     ]);
    //     setImageList(imagesArray);
    // }, [cordeliaImages]);

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
                    src={iyer}
                    alt=""
                    className="md:w-full md:h-screen object-cover"
                />
            </div>

            <div className="p-5 md:p-10 md:flex">
                <div className=" md:w-[40%]">
                    <h1 className="text-gray-700 text-2xl lg:text-4xl mb-2 tracking-wider">
                        Iyer Residence
                    </h1>
                    <p className="text-gray-500">Residential Interior | Mumbai, Maharashtra</p>

                    <div className="mt-4 md:pr-8 lg:pr-16">
                        <p className="text-gray-500">
                            <strong className="text-gray-700">Area :</strong> 1200 sq.ft
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

                <div className="mt-5 md:m-0 md:w-[60%]">
                    <div className="justify-center md:w-[95%] lg:w-[70%] text-gray-700 tracking-wide">
                        <p className="mb-5">
                            The Iyer family resides in a splendid 900 sq ft House in Mumbai, exuding warmth and coziness, designed by Ar. Shirish Kelkar and Taruni Kelkar (Canwill Design Associates). Nestled within the vibrant cityscape of Mumbai, this 3BHK residence transports its inhabitants to the cultural charm of Palakkad, Kerala. From the outset, the design directive was clear: create modern, inviting, and refined spaces infused with elements of South Indian architecture. Canwill Design, committed to crafting enduring spaces that highlight skilled artistry, delved into the intricate technicalities and details.
                        </p>
                        <p className="mb-5">
                            The residence unfolds through a lengthy corridor leading to the living room, extending into the kitchen and bedrooms. The living room, a seamless fusion of traditional South Indian architectural nuances and contemporary aesthetics, sets the tone,The drawing room stands as the epitome of this pursuit, featuring a traditional swing crafted from Burma teak wood and brass interlocking kadis, elaborate wood carvings, and the finesse of rattan craftsmanship.To complement the rich woodwork, vibrant fabrics inject pops of color, showcasing shades of blue and pink. Canwill Design seamlessly marries tradition with modernity, creating spaces that stand the test of time.These elements, thoughtfully incorporated, create an inviting space that not only reflects the family’s heritage but also embraces the elegance of contemporary living.
                        </p>

                        {/* Show the remaining paragraphs only when expanded */}
                        {isExpanded && (
                            <>
                                <p className="mb-5">
                                    The idea was to seamlessly weave elements from the rich tapestry of South Indian architecture into the modern aesthetics.These elements, thoughtfully incorporated, create an inviting space that not only reflects the family’s heritage but also embraces the elegance of contemporary living. The idea was to seamlessly weave elements from the rich tapestry of South Indian architecture into the modern aesthetics.A beautiful vintage wooden pillar was sourced from a local store tucked away in streets of Mumbai. This pillar, reminiscent of the traditional columns found in Tamil households, stands as a substantial and nostalgic feature within the home.
                                </p>
                                <p className="mb-5">
                                    The parents bedroom again is a refreshing palette of yellow and teal green shades. The wallpaper with palm tree motifs taking them back to streets in palakkad.The bedrooms’ flooring adorned with kota stone, intricately inlaid with pristine white Indian marbles. This unique combination not only draws attention to the striking colour contrast but also skillfully balances the warm tones of wood throughout the house.The inlay pattern, reminiscent of a traditional rangoli, reflects the intricate designs typically crafted with wet rice flour in Hindu decorations.The geometric aesthetics of the rooms show clean, straight lines, evoking a sense of simplicity and relaxation.
                                </p>
                                <p className="mb-5">
                                    The children’s bedroom exudes a vibrant atmosphere with its lively green hues, illuminated by an ample infusion of natural light pouring in from floor-to-ceiling windows.
                                    Our client’s commitment, coupled with the dedication of our skilled artisans, designers, and contractors, played a pivotal role in ensuring the seamless execution of the project.It adorns in carefully curated paintings and photographs. The space exudes an undeniable elegance that resonates with the Iyers’ vision of a perfect home.

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

            <div className="">
                {iyerImages.map((images, index) => (
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

export default Iyer;
