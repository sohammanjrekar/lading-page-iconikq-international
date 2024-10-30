"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { supabase } from '../utils/supabase/client'; // Adjust path as needed

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(6);
  const [images, setImages] = useState([]); 

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.from('gallery').select('id, title, description, image_url');
      if (error) {
        console.error("Error fetching images:", error);
      } else {
        setImages(data);
      }
    };

    fetchImages();
  }, []);

  const openModal = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 6);
  };

  return (
    <div className="container mx-auto pt-12 p-4">
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Our Journey in Photos
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          A glimpse into our work, dedicated team, and the valued clients who trust us to deliver excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {images.slice(0, visibleImages).map((image, index) => (
          <div
            className="group relative cursor-pointer"
            key={image.id}
            onClick={() => openModal(image.image_url)}
          >
            <div className="overflow-hidden bg-red-400 cursor-pointer rounded-xl relative group">
              <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div>
                  <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                    <div className="font-bold">{image.title}</div>
                    <div className="opacity-60 text-sm ">
                      {image.description.slice(0, 100)}{image.description.length > 100 && "..."}
                    </div>
                  </div>
                </div>
              </div>
              <Image loading="lazy" 
                className="object-cover w-full h-[40vh] aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src={image.image_url}
                alt={image.title}
                width={500}
                height={500}
              />
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-myblue bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <Image loading="lazy" 
            className="h-[80vh] rounded-lg object-cover"
            src={selectedImage}
            alt="Enlarged"
            width={800}
            height={800}
            layout="intrinsic"
          />
        </div>
      )}

      {visibleImages < images.length && (
        <div className="flex justify-center mt-6">
          <button onClick={loadMoreImages} className='shadow-inner shadow-[#e77979] group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-center cursor-pointer h-12 border-2 border-solid py-0 px-6 rounded-lg overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-myred text-white border-myred hover:text-myred focus:text-myred'>
            <strong className='font-medium'>Show More</strong>
            <span className='absolute bg-white bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]'></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
