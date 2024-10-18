import React from 'react'

const Live = () => {
  return (
    <>
    {/* component */}
    <div className="py-8 bg-black text-white">
      <h1 className="text-3xl md:text-5xl text-yellow-500 text-center mt-20 leading-relaxed md:leading-snug">
        Youtube Live Stream
      </h1>
      <h2 className="text-center">
        Get the popcorns ready and enjoy the live stream of i-GNEz Tech Fest at
        your home :)
      </h2>
      <div className="flex w-full h-screen justify-center pt-12 pb-36">
        <iframe
          className=" w-5/6 h-full border-2 border-yellow-500"
          src="https://www.youtube.com/embed/X5YNMYg6uCc"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
        />
      </div>
      <div></div>
    </div>
  </>
  
  )
}

export default Live