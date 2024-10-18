// components/SocialMediaCards.js

import React from 'react';

const SocialMediaCards = () => {
  return (
    <>
      
      <div className="flex flex-wrap 
      mb-5">
        <div className="w-full max-w-full px-3 mb-6 mx-auto bg-white">
          <div className="flex flex-wrap mt-5 mx-5 removable">
            {/* Instagram Card */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/4 xl:mb-0 xl:w-1/4 drop-zone">
              <div className="shadow-2xl relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
                <div className="flex flex-row items-center justify-center flex-auto py-8 px-9">
                  <img
                    className="w-[10vh] mr-3"
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/instagram.svg"
                    alt="instagram"
                  />
                  <div className="flex flex-col my-7">
                    <span className="text-secondary-inverse text-4xl font-bold">
                      590k
                    </span>
                    <span className="font-medium text-secondary-dark text-lg">
                      Followers
                    </span>
                  </div>
                 
                </div>
              </div>
            </div>

            {/* YouTube Card */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/4 xl:mb-0 xl:w-1/4 drop-zone">
              <div className="shadow-2xl relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
                <div className="flex flex-row items-center justify-center flex-auto py-8 px-9">
                  <img
                    className="w-[10vh] mr-3"
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/youtube.svg"
                    alt="youtube"
                  />
                  <div className="flex flex-col my-7">
                    <span className="text-secondary-inverse text-4xl font-bold">
                      58k
                    </span>
                    <span className="font-medium text-secondary-dark text-lg">
                      Subscribers
                    </span>
                  </div>
                 
                </div>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/4 xl:mb-0 xl:w-1/4 drop-zone">
              <div className="shadow-2xl relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
                <div className="flex flex-row items-center justify-center flex-auto py-8 px-9">
                  <img
                    className="w-[10vh] mr-3"
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/facebook.svg"
                    alt="facebook"
                  />
                  <div className="flex flex-col my-7">
                    <span className="text-secondary-inverse text-4xl font-bold">
                      896k
                    </span>
                    <span className="font-medium text-secondary-dark text-lg">
                      Followers
                    </span>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Twitter Card */}
            <div className="w-full max-w-full px-3 mb-6 sm:w-1/4 xl:mb-0 xl:w-1/4 drop-zone">
              <div className="shadow-2xl relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
                <div className="flex flex-row items-center  justify-center flex-auto py-8 px-9">
                  <img
                    className="w-[10vh] mr-3"
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/twitter.svg"
                    alt="twitter"
                  />
                  <div className="flex flex-col my-7">
                    <span className="text-secondary-inverse text-4xl font-bold">
                      77k
                    </span>
                    <span className="font-medium text-secondary-dark text-lg">
                      Followers
                    </span>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaCards;
