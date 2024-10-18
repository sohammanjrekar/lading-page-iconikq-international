"use client";
import React, { useState } from 'react';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(9); // Initially show 9 images

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Kashi_Vishwanath_Temple_Banaras.jpg",
    "https://pbs.twimg.com/media/FGRnUzPVEAAbqM8?format=jpg&name=large",
    "https://pbs.twimg.com/media/FGRnNpAVUAYqRYv?format=jpg&name=large",
    "https://pbs.twimg.com/media/FGRnP_TUUAAttG3?format=jpg&name=large",
    "https://i.pinimg.com/originals/c0/7d/17/c07d17d7ca0b9f39f5aded4b6dca8f02.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg/1280px-Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg",
    "https://www.jagranimages.com/images/newimg/27072020/27_07_2020-shri-kashi-vishwanath-temple_20557350.jpg",
    "https://www.jansatta.com/wp-content/uploads/2021/12/Kashi-Vishwanath-Mandir.png?w=1024",
    "https://staticimg.amarujala.com/assets/images/2021/11/07/750x506/kashi-vishwanath-dham_1636258507.jpeg?w=674&dpr=1.0",
    "https://staticimg.amarujala.com/assets/images/2020/01/13/750x506/kashi-vishwanath-mandir-varanasi_1578924152.png?w=700&dpr=2.0",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/800px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/25/Chet_Singh_Ghat_in_Varanasi.jpg"
  ];

  const openModal = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 9); // Load 9 more images
  };

  return (
    <div className="container mx-auto pt-12 p-4">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Master Cleanse Reliac Heirloom
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
      {images.slice(0, visibleImages).map((src, index) => (
    <div
      className="group relative cursor-pointer"
      key={index}
      onClick={() => openModal(src)}
    >
      {/* Image with hover effect */}
      <div className="relative m-0 h-[35vh] rounded-lg shadow-xl ring-gray-900/5 overflow-hidden transition duration-300 ease-in-out">
        <img
          className="z-10 w-full h-full object-cover rounded-lg border border-gray-200 opacity-80 transition-transform duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70 group-hover:scale-110"
          src={src}
          alt={`Image ${index + 1}`}
        />

        {/* Text overlay with hover effects */}
        <div className="absolute bottom-0 z-20 m-0 pb-4 pl-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Title {index + 1}</h1>
          <p className="text-sm font-light text-gray-200 shadow-xl">Description of Image {index + 1}</p>
        </div>
      </div>
    </div>
  ))}
</div>


      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <img
            className="h-[80vh] rounded-lg object-cover"
            src={selectedImage}
            alt="Enlarged"
          />
        </div>
      )}

      {/* Show More Button */}
      {visibleImages < images.length && (
        <div className="flex justify-center mt-6">
          
          <button onClick={loadMoreImages}  class='shadow-inner shadow-[#e77979] group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-center cursor-pointer h-12 border-2 border-solid py-0 px-6 rounded-lg overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-myred text-white border-myred hover:text-myred focus:text-myred'>
                <strong class='font-medium'>Show More</strong>
                
                <span class='absolute bg-white bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]'></span>
            </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
