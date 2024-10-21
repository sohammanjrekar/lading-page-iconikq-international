"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';

const videoData = {
    0: {
        src: 'videoes/water.mp4',
        name: 'Navigate. Transport. Deliver Globally.',
        description: 'Description for Video 1',
    },
    1: {
        src: 'videoes/Air.mp4',
        name: 'Fly High. Deliver Fast. Reach Global.',
        description: 'Fly High. Deliver Fast. Reach Global.',
    },
    2: {
        src: 'videoes/road.mp4',
        name: 'Smooth. Efficient. Connect Seamlessly.',
        description: 'Smooth. Efficient. Connect Seamlessly.',
    },
    3: {
        src: 'videoes/tain.mp4',
        name: 'Swift. Reliable. Connect Everywhere',
        description: 'Swift. Reliable. Connect Everywhere',
    },
    4: {
        src: 'videoes/warehouse.mp4',
        name: 'Store Smart. Manage Efficiently. Deliver Fast',
        description: 'Description for Video 5',
    },
};

const VideoCarousel = () => {
    const carouselInnerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const totalItems = Object.keys(videoData).length;
    const autoScrollInterval = 7000; // Change video every 7 seconds

    const updateCarousel = useCallback((index) => {
        if (carouselInnerRef.current) {
            const offset = -index * 100;
            carouselInnerRef.current.style.transition = isTransitioning ? 'transform 1s ease-in-out' : 'none';
            carouselInnerRef.current.style.transform = `translateX(${offset}%)`;
        }
    }, [isTransitioning]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === totalItems) {
                    setIsTransitioning(false);
                    return 1; 
                } else {
                    setIsTransitioning(true);
                    return (prevIndex + 1) % (totalItems + 1);
                }
            });
        }, autoScrollInterval);

        return () => clearInterval(interval);
    }, [totalItems]);

    useEffect(() => {
        updateCarousel(currentIndex);

        if (currentIndex === totalItems) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 1000);
        }
    }, [currentIndex, totalItems, updateCarousel]);

    return (
        <div className="relative h-[80vh] overflow-hidden video-carousel">
            <div ref={carouselInnerRef} className="flex transition-transform duration-1000 ease-in-out carousel-inner">
                {/* Video Items */}
                {Object.keys(videoData).map((key) => {
                    const { src, name } = videoData[key];
                    return (
                        <div key={key} className="min-w-full h-[80vh] relative carousel-item">
                            <video
                                className="w-full h-full object-cover object-center" // This ensures the video fills and centers
                                loop
                                muted
                                autoPlay
                                priority
                                quality={75}
                            >
                                <source src={src} type="video/mp4" />
                            </video>
                            <h1 className="shadow-2xl rounded-lg backdrop-blur-sm bg-opacity-10  bg-black h-[18vh] sm:h-[22vh] md:h-[20vh] absolute w-2/3 lg:w-1/2 text-center mx-auto inset-0 flex flex-col flex-wrap items-end justify-center text-white text-[2vh] md:text-[5vh] lg:text-[5vh] font-bold uppercase top-[50vh] z-20">
                                {name}
                            </h1>
                        </div>
                    );
                })}

                {/* Clone the first item for smooth transition */}
                <div className="min-w-full h-full relative carousel-item">
                    <video
                        className="w-full h-full object-cover object-center" // Ensures the video fills and centers
                        loop
                        muted
                        autoPlay
                    >
                        <source src={videoData[0].src} type="video/mp4" />
                    </video>
                    <h1 className="shadow-2xl rounded-lg backdrop-blur-sm bg-opacity-10  bg-black h-[18vh] sm:h-[22vh] md:h-[20vh] absolute w-2/3 lg:w-1/2 text-center mx-auto inset-0 flex flex-col flex-wrap items-end justify-center text-white text-[2vh] md:text-[5vh] lg:text-[5vh] font-bold uppercase top-[50vh] z-20">
                        {videoData[0].name}
                    </h1>
                </div>
            </div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex carousel-controls">
                <button
                    onClick={() => setCurrentIndex((currentIndex - 1 + totalItems) % totalItems)}
                    className="bg-myblue text-white px-4 py-2 rounded-full hover:bg-myred transition duration-300"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button
                    onClick={() => setCurrentIndex((currentIndex + 1) % (totalItems + 1))}
                    className="bg-myblue text-white px-4 py-2 rounded-full hover:bg-myred transition duration-300"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default VideoCarousel;
