import React from 'react';
import Button from '../ui/Button';
export const metadata = {
  title: 'ICONIKQ | Contact Us',
  description: 'Get in touch with ICONIKQ for any inquiries about our logistics services. We’re here to help!',
  keywords: 'contact ICONIKQ, logistics inquiries, customer support',
  openGraph: {
    title: 'ICONIKQ | Contact Us',
    description: 'Reach out to ICONIKQ for any questions or support regarding our logistics services.',
    url: 'https://www.iconikq.com/contact',
    image: 'https://www.iconikq.com/images/contact-banner.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICONIKQ | Contact Us',
    description: 'Have questions? Contact ICONIKQ for expert logistics support.',
    image: 'https://www.iconikq.com/images/contact-banner.jpg',
  },
};

const Page = () => {
  return (
    <>
      <div className="relative w-full py-[20vh] h-full pb-20 flex flex-col flex-wrap overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          preload="auto"
        >
          <source src="/videoes/world.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative flex items-top justify-center min-h-screensm:items-center sm:pt-0">
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Added gap for spacing */}
                <div className="p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl sm:rounded-lg">
                  <h1 className="text-4xl sm:text-5xl text-myred font-extrabold tracking-tight">
                    Get in touch
                  </h1>
                  <p className="text-normal text-lg sm:text-2xl font-medium text-white mt-2">
                    Fill in the form to start a conversation
                  </p>

                  <div className="flex items-center mt-8 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-myred"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    704/705, Filix, Opposite
Asian Paints, LBS Marg,
Bhandup West,
Mumbai – 400078


                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-white ">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-myred"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40 ">
                    +91 9870725060
                    </div>
                  </div>

                  <div className="flex items-center mt-2 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-myred"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    info@iconikqinternational.com
                    </div>
                  </div>
                </div>

                <form className="p-1 py-3 flex items-center flex-col justify-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl rounded-lg">
                  <div className="flex flex-col mb-4">
                    <label htmlFor="name" className="text-lg text-white font-bold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-full md:w-[20vw] py-3 px-3 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl border border-white  text-white font-semibold focus:border-myred focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="text-lg text-white font-bold">Email: </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    className="w-full md:w-[20vw] py-3 px-3 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl border border-white  text-white font-semibold focus:border-myred focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label htmlFor="tel" className="text-lg text-white font-bold">Number:</label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="Telephone Number"
                    className="w-full md:w-[20vw] py-3 px-3 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl border border-white  text-white font-semibold focus:border-myred focus:outline-none"
                    />
                  </div>

                <Button text="Send"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
