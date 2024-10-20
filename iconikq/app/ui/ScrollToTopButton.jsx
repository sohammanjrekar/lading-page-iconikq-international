"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Importing next/image for optimized /images

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Manually scroll to top function for slower and smoother behavior
  const scrollToTop = () => {
    const scrollStep = window.scrollY / 50; // Determines the speed
    const scrollInterval = setInterval(() => {
      if (window.scrollY > 0) {
        window.scrollBy(0, -scrollStep); // Scroll up step by step
      } else {
        clearInterval(scrollInterval); // Clear the interval when reaching the top
      }
    }, 30); // 16ms for roughly 60 frames per second
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top" // Accessibility improvement
          className="z-50 shadow-inner shadow-[#e77979] fixed bottom-20 right-5 w-12 h-12 bg-transparent text-white rounded-full flex items-center justify-center transition-all duration-500 ease-in-out transform hover:scale-110 hover:bg-white hover:shadow-xl opacity-0 translate-y-2 hover:translate-y-0 hover:opacity-100"
          style={{
            opacity: isVisible ? "1" : "0",
            transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
          }}
        >
          <Image
            src="/images/up-arrow.png" // Using next/image for image optimization
            alt="Scroll to top"
            width={45} // Set width and height for image optimization
            height={45}
            className="max-h-[7vh] max-w-[8vw] transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
