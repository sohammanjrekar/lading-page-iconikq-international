"use client";
import { useEffect, useRef } from 'react';

const AutoCarousel = () => {
  const carouselRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        // Animate the transition
        const firstElement = carouselRef.current.firstElementChild;
        const lastElement = carouselRef.current.lastElementChild;

        // Move the carousel left
        carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
        carouselRef.current.style.transform = 'translateX(-20vh)';

        // Wait for the transition to finish, then reset the position
        setTimeout(() => {
          carouselRef.current.style.transition = 'none';
          carouselRef.current.appendChild(firstElement);
          carouselRef.current.style.transform = 'translateX(0)';
        }, 500); // Wait for half a second before resetting the transform
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const images = [
    {
      src: "https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png",
      name: "Feature 1",
    },
    {
      src: "https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png",
      name: "Feature 2",
    },
    {
      src: "https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png",
      name: "Feature 3",
    },
    {
      src: "https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png",
      name: "Feature 4",
    },
    {
      src: "https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png",
      name: "Feature 5",
    },
    {
      src: "https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png",
      name: "Feature 6",
    },
    {
      src: "https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png",
      name: "Feature 7",
    },
    {
      src: "https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png",
      name: "Feature 8",
    },
  ];

  return (
    <div className="container mx-auto h-64 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        ref={carouselRef}
        style={{ width: `${images.length * 20}vh` }} // Dynamic width based on image count
      >
        {images.map((image) => (
          <img
            key={image.name}
            src={image.src}
            alt={image.name}
            className="w-[20vh] h-[20vh] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
