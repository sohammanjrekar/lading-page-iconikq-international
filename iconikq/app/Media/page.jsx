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
    <div className="flex min-h-screen bg-zinc-900 text-zinc-50 flex-col">
      <div className="flex flex-1">
        <main className="flex-1 bg-myred">
          <div className="bg-gradient-to-br from-myblue py-20">
            <h1 className="mt-20 text-4xl font-semibold ml-5 text-center">Video Library</h1>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3 sm:px-10">
              {mediaData.map((video) => (
                <div key={video.id} className="group my-3 col-span-1">
                  <div className="relative w-full h-0 pb-[56.25%] overflow-hidden bg-black rounded-lg shadow-lg">
                    {/* Responsive Iframe Container */}
                    <div
                      className="absolute top-0 left-0 w-full h-full video-iframe"
                      dangerouslySetInnerHTML={{ __html: video.youtube_iframe }}
                    />
                  </div>
                  <div className="flex flex-row mt-4 pl-5 gap-3">
                    {/* Video Information */}
                    <div className="flex flex-col">
                      <a href="#">
                        <p className="text-white text-md font-semibold group-hover:text-white transition">
                          {video.title}
                        </p>
                      </a>
                      <a className="text-white text-xs mt-2 hover:text-gray-100" href="#">
                        {video.description.slice(0, 100)}{video.description.length > 100 && "..."}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MediaPage;
