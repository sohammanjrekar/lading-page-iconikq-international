// export const metadata = {
//   title: 'ICONIKQ | Media',
//   description: 'Explore our media page at ICONIKQ, where you can watch success story videos and podcasts showcasing our logistics solutions and client experiences on YouTube.',
//   keywords: 'media, logistics, ICONIKQ, podcasts, success stories, YouTube, video content',
// };
"use client";

import { useEffect } from 'react';
import { useMediaStore } from '../store/mediaStore';
import Image from 'next/image';

const MediaPage = () => {
  const { mediaData, loading, error, fetchMediaData } = useMediaStore();

  useEffect(() => {
    fetchMediaData();
  }, [fetchMediaData]);

  if (loading) return <p>Loading videos...</p>;
  if (error) return <p>{error}</p>;

  return (
  
          <div className="bg-mylight py-20 ccontainer w-[90vw] mx-auto min-h-screen">
            <h1 className="mt-20 text-4xl font-semibold uppercase ml-5 text-center">Video Library</h1>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3 sm:px-10">
              {mediaData.map((video) => (
                <div key={video.id} className="group my-3 col-span-1">
                  <div className="relative w-full h-0 pb-[56.25%] overflow-hidden bg-black rounded-lg shadow-lg">
                    {/* Responsive Iframe Container */}
                    <div
                      className="absolute  shadow-2xl top-0 left-0 w-full h-full video-iframe"
                      dangerouslySetInnerHTML={{ __html: video.youtube_iframe }}
                    />
                  </div>
                  <div className="flex flex-row mt-4 pl-5 gap-3">
                    {/* Video Information */}
                    <div className="flex flex-col">
                      <a href="#">
                        <p className="text-myred text-lg font-semibold  transition">
                          {video.title}
                        </p>
                      </a>
                      <a className="text-myblue text-md mt-2" href="#">
                        {video.description.slice(0, 100)}{video.description.length > 100 && "..."}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
       
  );
};

export default MediaPage;
