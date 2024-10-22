"use client";
import { useEffect, useState } from "react";

const AnimatedWord = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [delays, setDelays] = useState([]);

  // Use useEffect to trigger the mounting state after initial render
  useEffect(() => {
    setIsMounted(true);

    // Set delays for each animation with staggered timing
    const newDelays = Array.from({ length: 5 }, (_, i) => i * 1.4); // Delays: 0s, 1.4s, 2.8s, 4.2s, 5.6s
    setDelays(newDelays);
  }, []);

  return (
    <div className={`flex h-[10vh] container sm:min-h-[20vh] rounded-t-[20px] items-center justify-center font-bold text-myblue`}>
      <div className="text-center md:space-y-5">
        <div className="text-center text-lg md:text-xl lg:text-5xl font-bold">
          Services offered
          <div
            className={`relative inline-grid grid-cols-1 grid-rows-5 gap-2 sm:gap-12 overflow-hidden text-myred transition-opacity duration-500 ${
              isMounted ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Each word spans one row */}
            {["TRANSPORTATION", "FREIGHT FORWARDING", "INVENTORY MANAGEMENT", "AEO CONSULTANTS", "WAREHOUSING"].map((word, index) => (
              <span
                key={index}
                className={`animate-word col-span-full row-span-full flex justify-center items-center`}
                style={{ animationDelay: `${delays[index]}s` }}
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
