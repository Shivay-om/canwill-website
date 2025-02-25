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
    { img1: cordelia1, img2: cordelia2, },
    { img3: cordelia3, img4: cordelia4, },
    { img1: cordelia5, img2: cordelia6, },
    { img3: cordelia7, img4: cordelia8, }
];

const Iyer = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageList, setImageList] = useState([cordeliaImages]);
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
                    src={cordelia}
                    alt=""
                    className="md:w-full md:h-screen object-cover"
                />
            </div>

            <div className="p-5 md:p-10 md:flex">
                <div className=" md:w-[40%]">
                    <h1 className="text-gray-700 text-2xl lg:text-4xl mb-2 tracking-wider">
                        Iyer House
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

            <div className="border">
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
                    </div>
                ))}

                {cordeliaImages.map((images, index) => (
                    <div key={index} className={index !== 0 ? "mt-3 md:mt-5" : ""}>
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
