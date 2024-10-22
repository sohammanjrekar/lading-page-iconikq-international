"use client";
import React, { useState } from "react";
import Image from "next/image";

const Achievements = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const achievementImages = [
    "https://bucket.material-tailwind.com/magic-ai/58b51625af5803baea7811b7e9128c8b23c0706c3271fa863b6bc287c2d3958a.jpg",
    "https://bucket.material-tailwind.com/magic-ai/58b51625af5803baea7811b7e9128c8b23c0706c3271fa863b6bc287c2d3958a.jpg",
    "https://bucket.material-tailwind.com/magic-ai/58b51625af5803baea7811b7e9128c8b23c0706c3271fa863b6bc287c2d3958a.jpg",
  ];

  return (
    <>
      <section className="container mx-auto px-8 py-3">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 lg:!text-4xl">
          Latest Achievements
        </h2>
        <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">
          Read about our latest achievements and milestones.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {achievementImages.map((src, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-clip-border bg-transparent text-gray-700 shadow-md min-h-[30rem] overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openModal(src)}
            >
              <Image loading="lazy" 
                width={500}
                height={1000}
                src={src}
                alt={`Achievement ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
                <h4 className="text-white text-2xl font-semibold">
                  Record-breaking Profits
                </h4>
                <p className="text-white text-base mt-2">
                  We are proud to announce that our bank has achieved
                  record-breaking profits this year. Thanks to our dedicated
                  team and loyal customers, we have surpassed all expectations
                  and set new industry standards.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
          />
        </div>
      )}
    </>
  );
};

export default Achievements;
