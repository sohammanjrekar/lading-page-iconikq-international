"use client";
import { useEffect, useState } from "react";

const AnimatedWord = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`flex h-[10vh] container sm:min-h-[20vh] rounded-t-[20px] items-center justify-center font-bold text-myblue`}>
      <div className="text-center md:space-y-5">
        <div className="text-center text-lg md:text-xl lg:text-5xl font-bold">
          Services offered
          <div
            className={`relative1 grid grid-cols-1 grid-rows-5 gap-4 overflow-hidden transition-opacity duration-500 ${
              isMounted ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Each word spans one row */}
            {["TRANSPORTATION", "FREIGHT FORWARDING", "INVENTORY MANAGEMENT", "AEO CONSULTANTS", "WAREHOUSING"].map((service, index) => (
              <span key={index} className={`animate-word animate-word-delay-${index + 1} col-span-full row-span-full flex justify-center items-center`}>
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedWord;
