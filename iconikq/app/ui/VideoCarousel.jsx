"use client";
import React, { useEffect, useRef, useState } from 'react';
const videoData = {
    0: {
        src: 'videoes/water.mp4',
        name: 'Video 1',
        description: 'Description for Video 1',
    },
    1: {
        src: 'videoes/Air.mp4',
        name: 'Video 2',
        description: 'Description for Video 2',
    },
    2: {
        src: 'videoes/road.mp4',
        name: 'Video 3',
        description: 'Description for Video 3',
    },
    3: {
        src: 'videoes/tain.mp4',
        name: 'Video 4',
        description: 'Description for Video 4',
    },
    4: {
        src: 'videoes/warehouse.mp4',
        name: 'Video 5',
        description: 'Description for Video 5',
    },
    
};

const VideoCarousel = () => {
    const carouselInnerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = Object.keys(videoData).length; // Use the length of the video data object
    const autoScrollInterval = 6000; // Change video every 6 seconds

    const updateCarousel = (index) => {
        if (carouselInnerRef.current) {
            const offset = -index * 100; // Calculate offset based on current index
            carouselInnerRef.current.style.transform = `translateX(${offset}%)`; // Move to the correct item
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems); // Automatically move to the next item
        }, autoScrollInterval);

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, [totalItems]);

    useEffect(() => {
        updateCarousel(currentIndex); // Update carousel on index change
    }, [currentIndex]);

    return (
        <div className="relative h-[80vh] overflow-hidden video-carousel">
            <div ref={carouselInnerRef} className="flex transition-transform duration-1000 ease-in-out carousel-inner">
                {/* Video Items */}
                {Object.keys(videoData).map((key) => {
                    const { src, name, description } = videoData[key];
                    return (
                        <div key={key} className="min-w-full h-full relative carousel-item">
                            <video className="w-full h-full object-cover" loop muted autoPlay>
                                <source src={src} type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-[15vh] font-bold">
                                <div>{name}</div>
                                <div className="text-sm">{description}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex carousel-controls">
                <button 
                    onClick={() => setCurrentIndex((currentIndex - 1 + totalItems) % totalItems)} 
                    className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button 
                    onClick={() => setCurrentIndex((currentIndex + 1) % totalItems)} 
                    className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default VideoCarousel;
