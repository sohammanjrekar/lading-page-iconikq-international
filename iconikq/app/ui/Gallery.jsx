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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {images.slice(0, visibleImages).map((src, index) => (
    <div
      className="group relative cursor-pointer"
      key={index}
      onClick={() => openModal(src)}
    >
      <div className="overflow-hidden  bg-red-400 cursor-pointer rounded-xl relative group">
  <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
    <div>
      <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
        <div className="font-bold">Jessie Watsica</div>
        <div className="opacity-60 text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          dolores error iure, perferendis sequi totam. Ad aliquam aperiam atque
          deleniti dolor dolorem enim esse et in, inventore itaque, pariatur
          reprehenderit.
        </div>
      </div>
    </div>
  </div>
  <img
    
    className="object-cover w-full h-[40vh] aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
    src={src}
    alt={`Image ${index + 1}`}
  />
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
