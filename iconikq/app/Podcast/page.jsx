import Image from 'next/image';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const page = () => {
  const videos = [
    {
      id: 1,
      iframeHTML: `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      `,
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
      title: "Learn CSS Box Model in 8 Minutes",
      channel: "Web Dev Simplified",
      views: "241K views",
      time: "3 years ago",
      profilePic: "https://picsum.photos/seed/1/40/40"
    },
    {
      id: 2,
      iframeHTML: `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/eVTX3p5HnFQ" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      `,
      thumbnail: "https://img.youtube.com/vi/eVTX3p5HnFQ/0.jpg",
      title: "Learn Flexbox in 10 Minutes",
      channel: "Traversy Media",
      views: "100K views",
      time: "1 year ago",
      profilePic: "https://picsum.photos/seed/2/40/40"
    },
    {
      id: 3,
      iframeHTML: `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_cLynFz6P_4" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      `,
      thumbnail: "https://img.youtube.com/vi/_cLynFz6P_4/0.jpg",
      title: "HTML5 Video Tutorials",
      channel: "Academind",
      views: "300K views",
      time: "6 months ago",
      profilePic: "https://picsum.photos/seed/3/40/40"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="flex bg-zinc-900 text-zinc-50 flex-col">
        <div className="flex flex-1">
          <main className="flex-1 bg-myred">
            <div className="bg-gradient-to-tr from-myblue py-20">
              <h1 className="mt-10 text-3xl font-semibold ml-5">Video Library</h1>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3 sm:px-10">
                {videos.map((video) => (
                  <div key={video.id} className="group col-span-1">
                    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden bg-black rounded-lg shadow-lg">
                      {/* Responsive Iframe Container */}
                      <div
                        className="absolute top-0 left-0 w-full h-full video-iframe"
                        dangerouslySetInnerHTML={{ __html: video.iframeHTML }}
                      />
                    </div>
                    <div className="flex flex-row mt-4 gap-3">
                      {/* Profile Picture */}
                      <a href="#">
                        <Image
                          src={video.profilePic}
                          alt="Profile Picture"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </a>
                      {/* Video Information */}
                      <div className="flex flex-col">
                        <a href="#">
                          <p className="text-gray-100 text-sm font-semibold group-hover:text-white transition">
                            {video.title}
                          </p>
                        </a>
                        <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#">
                          {video.channel}
                        </a>
                        <p className="text-gray-400 text-xs mt-1">
                          {video.views} . {video.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
