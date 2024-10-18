"use client"
// components/VideoCarousel.js
import React, { useEffect, useRef, useState } from 'react';

const VideoCarousel = () => {
    const carouselInnerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = 7; // Total number of video items
    const autoScrollInterval = 4000; // Change video every 4 seconds

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
    }, []);

    useEffect(() => {
        updateCarousel(currentIndex); // Update carousel on index change
    }, [currentIndex]);

    return (
        <div className="relative h-[80vh] overflow-hidden video-carousel">
            <div ref={carouselInnerRef} className="flex transition-transform duration-1000 ease-in-out carousel-inner">
                {/* Video Items */}
                {Array.from({ length: totalItems }).map((_, index) => (
                    <div key={index} className="min-w-full h-full relative carousel-item">

                        
                        <video className="w-full h-full object-cover" loop muted autoPlay>
                            <source src={`videoes/v${index + 1}.mp4`} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center text-white text-[15vh] font-bold">
                            Video {index + 1} Text
                        </div>
                    </div>
                ))}
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
