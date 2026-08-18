import React, { useState, useEffect } from "react";
// import powai from "../../assets/powai/powaiCover.webp";
import powai1 from '../../assets/powai/powai1.webp'
import powai2 from '../../assets/powai/powai2.webp'
import powai3 from '../../assets/powai/powai5.webp'
import powai4 from '../../assets/powai/powai6.webp'
import powai5 from '../../assets/powai/powai7.webp'
import powai6 from '../../assets/powai/powai8.webp'
import powai7 from '../../assets/powai/powai9.webp'
import powai8 from '../../assets/powai/powai10.webp'
import Footer from "../Footer";


const powaiImages = [
    { img1: powai1, img2: powai2, img3: powai3, img4: powai4 },
    { img1: powai5, img2: powai6, img3: powai7, img4: powai8 },
];

const Powai = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageList, setImageList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    // Flatten images array for navigation
    useEffect(() => {
        const imagesArray = powaiImages.flatMap((group) => [
            group.img1,
            group.img2,
            group.img3,
            group.img4,
        ]);
        setImageList(imagesArray);
    }, [powaiImages]);

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
                    src={powai1}
                    alt=""
                    className="md:w-full md:h-screen object-cover"
                />
            </div>

            <div className="p-5 md:p-10 md:flex">
                <div className=" md:w-[40%]">
                    <h1 className="text-gray-700 text-2xl lg:text-4xl mb-2 tracking-wider">
                        Powai Residence
                    </h1>
                    <p className="text-gray-500">Residential Interior I Mumbai, Maharashtra</p>

                    <div className="mt-4 md:pr-8 lg:pr-16">
                        <p className="text-gray-500">
                            <strong className="text-gray-700">Area :</strong> 1200 sq.ft
                        </p>
                        <p className="text-gray-500">
                            <strong className="text-gray-700">Status :</strong> Completed 2021
                        </p>
                        <p className="text-gray-500">
                            <strong className="text-gray-700">Photographer :</strong> Binisha Ajmera
                        </p>
                        <p className="text-gray-500 lg:pr-5">
                            <strong className="text-gray-700">Team:</strong> Shirish Kelkar, Taruni Kelkar, Gaurav Mishra
                        </p>
                    </div>
                </div>

                <div className="mt-5 md:m-0 md:w-[60%]">
                    <div className="justify-center md:w-[95%] lg:w-[70%] text-gray-700 tracking-wide">
                        <p className="mb-5">Bold and Beautiful Blue!</p>
                        <p className="mb-5">
                            A 4bhk home in Powai, crafted in Bold, Beautiful, and trendy shades of Blue by Canwill Design Associates
                            The house begins with a spacious lobby which expands as you move into the living room, slowly revealing itself.
                        </p>
                        <p className="mb-5">
                            The upholstered marine blue sofas are the talk of the town this season. Along with that, the floral printed cushions absolutely never go out of fashion. The key is to create an equilibrium between bold and soft color palettes. The color palette of the living room is balanced hence, the room looks immaculately pulled together.
                        </p>

                        {/* Show the remaining paragraphs only when expanded */}
                        {isExpanded && (
                            <>
                                <p className="mb-5">
                                    The house also features a Sitar room, showcasing our client’s interest in sitar. Using a mix of contemporary & classical elements, we created a sophisticated yet relaxed space for our clients. Besides the 3 bedrooms, the fourth room is used to explore the limits with music!
                                </p>
                                <p className="mb-5">
                                    The designer chooses to continue the play of blues through this passage. <br />
                                    To break the monotony of the long passage a bright yellow frame in the backdrop catches your attention making you feel more intrigued. The designer chooses to continue the play of blues through this passage.

                                </p>
                                <p className="mb-5">"Making use of the abundant natural light, we focused on showcasing the depth of space." <br /> - Canwill Design Associates</p>
                                <p className="mb-5">
                                    Located in Powai this spacious home provides scenic views of the city. There seems to be a play of colors floating around the room where lavender seems to dominate. Soft accents are added with the choice of floral fabrics for the bed. Stealing the continuity grey curtains fit in perfectly.To break the monotony of the long passage, a bright yellow frame in the backdrop catches your attention making you feel more intrigued.
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
                {powaiImages.map((images, index) => (
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

export default Powai;
