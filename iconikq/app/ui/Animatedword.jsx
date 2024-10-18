import React from 'react';

const Animatedword = () => {
  return (
    <div className="flex min-h-[30vh] items-center justify-center bg-black font-bold text-white">
      <div className="text-center space-y-5">
        <div className="text-center text-5xl font-bold">
          Services offered
          <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden text-myred">
            <span className="animate-word animate-word-delay-1 col-span-full row-span-full">TRANSPORTATION</span>
            <span className="animate-word animate-word-delay-2 col-span-full row-span-full">FREIGHT FORWARDING</span>
            <span className="animate-word animate-word-delay-3 col-span-full row-span-full">INVENTORY MANAGEMENT</span>
            <span className="animate-word animate-word-delay-4 col-span-full row-span-full">AEO CONSULTANTS</span>
             <span className="animate-word animate-word-delay-5 col-span-full row-span-full">WAREHOUSING</span>
            {/* <span className="animate-word animate-word-delay-5 col-span-full row-span-full">CUSTOM BROKER SERVICES</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animatedword;
