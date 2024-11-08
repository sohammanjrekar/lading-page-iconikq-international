"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAchievementStore } from "../store/achievementStore"; // Import the store

const Achievements = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Access store state and actions
  const { achievementData, loading, fetchAchievementData } = useAchievementStore();

  // Fetch achievements on component mount
  useEffect(() => {
    fetchAchievementData();
  }, [fetchAchievementData]);

  const openModal = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  if (loading) return <p>Loading...</p>; // Show loading state

  return (
    <>
      <section className="container mx-auto py-5 w-[85vw]">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 lg:!text-4xl">
          Latest Achievements
        </h2>
        <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">
          Read about our latest achievements and milestones.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {achievementData.map((achievement) => (
            <div
              key={achievement.id}
              className="relative group flex flex-col bg-clip-border bg-transparent text-gray-700 shadow-md min-h-[30rem] overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openModal(achievement.image_url)}
            >
              <Image
                loading="lazy"
                width={500}
                height={1000}
                src={achievement.image_url}
                alt={achievement.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white text-2xl font-semibold">
                  {achievement.title}
                </h4>
                <p className="text-white text-base mt-2">
                  {achievement.description}
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
          <Image
            loading="lazy"
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
