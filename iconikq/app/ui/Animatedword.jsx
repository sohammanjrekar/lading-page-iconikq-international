"use client";
import { useEffect, useState } from "react";

const AnimatedWord = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Use useEffect to trigger the mounting state after initial render
  useEffect(() => {
    setIsMounted(true);
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
            <span className="animate-word animate-word-delay-1 col-span-full row-span-full flex justify-center items-center">
              TRANSPORTATION
            </span>
            <span className="animate-word animate-word-delay-2 col-span-full row-span-full flex justify-center items-center">
              FREIGHT FORWARDING
            </span>
            <span className="animate-word animate-word-delay-3 col-span-full row-span-full flex justify-center items-center">
              INVENTORY MANAGEMENT
            </span>
            <span className="animate-word animate-word-delay-4 col-span-full row-span-full flex justify-center items-center">
              AEO CONSULTANTS
            </span>
            <span className="animate-word animate-word-delay-5 col-span-full row-span-full flex justify-center items-center">
              WAREHOUSING
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedWord;
