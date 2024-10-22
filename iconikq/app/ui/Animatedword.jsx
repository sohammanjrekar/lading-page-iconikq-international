"use client";
import { useEffect, useState } from "react";

const AnimatedWord = () => {
  const [visibleWords, setVisibleWords] = useState([false, false, false, false, false]);

  // Use useEffect to control visibility of each word after mounting
  useEffect(() => {
    const timers = [];
    
    // Set a timeout for each word to become visible
    const words = [0, 1, 2, 3, 4]; // Array representing the index of words
    words.forEach((index, i) => {
      timers.push(setTimeout(() => {
        setVisibleWords((prev) => {
          const newVisible = [...prev];
          newVisible[index] = true; // Set the current word to visible
          return newVisible;
        });
      }, i * 1400)); // Staggered delay (1400ms for each word)
    });

    // Cleanup timers on unmount
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const wordsList = [
    "TRANSPORTATION",
    "FREIGHT FORWARDING",
    "INVENTORY MANAGEMENT",
    "AEO CONSULTANTS",
    "WAREHOUSING",
  ];

  return (
    <div className={`flex h-[10vh] container sm:min-h-[20vh] rounded-t-[20px] items-center justify-center font-bold text-myblue`}>
      <div className="text-center md:space-y-5">
        <div className="text-center text-lg md:text-xl lg:text-5xl font-bold">
          Services offered
          <div className="relative inline-grid grid-cols-1 grid-rows-5 gap-2 sm:gap-12 overflow-hidden text-myred">
            {wordsList.map((word, index) => (
              <span
                key={index}
                className={`animate-word col-span-full row-span-full flex justify-center items-center ${
                  visibleWords[index] ? `animate-word-delay-${index + 1}` : "invisible"
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedWord;
"use client";
import { useEffect, useState } from "react";

const AnimatedWord = () => {
  const [visibleWords, setVisibleWords] = useState([false, false, false, false, false]);

  // Use useEffect to control visibility of each word after mounting
  useEffect(() => {
    const timers = [];
    
    // Set a timeout for each word to become visible
    const words = [0, 1, 2, 3, 4]; // Array representing the index of words
    words.forEach((index, i) => {
      timers.push(setTimeout(() => {
        setVisibleWords((prev) => {
          const newVisible = [...prev];
          newVisible[index] = true; // Set the current word to visible
          return newVisible;
        });
      }, i * 1400)); // Staggered delay (1400ms for each word)
    });

    // Cleanup timers on unmount
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const wordsList = [
    "TRANSPORTATION",
    "FREIGHT FORWARDING",
    "INVENTORY MANAGEMENT",
    "AEO CONSULTANTS",
    "WAREHOUSING",
  ];

  return (
    <div className={`flex h-[10vh] container sm:min-h-[20vh] rounded-t-[20px] items-center justify-center font-bold text-myblue`}>
      <div className="text-center md:space-y-5">
        <div className="text-center text-lg md:text-xl lg:text-5xl font-bold">
          Services offered
          <div className="relative inline-grid grid-cols-1 grid-rows-5 gap-2 sm:gap-12 overflow-hidden text-myred">
            {wordsList.map((word, index) => (
              <span
                key={index}
                className={`animate-word col-span-full row-span-full flex justify-center items-center ${
                  visibleWords[index] ? `animate-word-delay-${index + 1}` : "invisible"
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedWord;
