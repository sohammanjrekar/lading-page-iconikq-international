"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "../utils/supabase/client"; // Ensure this path is correct

const Achievements = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [achievementData, setAchievementData] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchAchievements = async () => {
      const { data, error } = await supabase
        .from("achievements") // Your Supabase table name
        .select("id, title, description, image_url"); // Specify the fields you need

      if (error) {
        console.error("Error fetching achievements:", error);
      } else {
        setAchievementData(data);
      }
      setLoading(false); // Stop loading
    };

    fetchAchievements();
  }, []);

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
      <section className="container mx-auto w-[90vw] px-8 py-3">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 lg:!text-4xl">
          Latest Achievements
        </h2>
        <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">
          Read about our latest achievements and milestones.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {achievementData.map((achievement) => (
            <div
              key={achievement.id}
              className="relative flex flex-col bg-clip-border bg-transparent text-gray-700 shadow-md min-h-[30rem] overflow-hidden rounded-xl cursor-pointer"
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
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
                <h4 className="text-white text-2xl font-semibold">{achievement.title}</h4>
                <p className="text-white text-base mt-2">{achievement.description}</p>
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
