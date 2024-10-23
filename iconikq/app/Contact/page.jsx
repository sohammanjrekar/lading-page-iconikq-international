import React from 'react';

const Page = () => {
  return (
    <>
      <div className="relative w-full py-40 h-full pb-20 flex flex-col flex-wrap overflow-hidden">
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
                  <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                    Fill in the form to start a conversation
                  </p>

                  <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
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
                      Acme Inc, Street, State, Postal Code
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-white dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      +44 1234567890
                    </div>
                  </div>

                  <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      info@acme.org
                    </div>
                  </div>
                </div>

                <form className="p-6 flex flex-col justify-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl rounded-lg">
                  <div className="flex flex-col mb-4">
                    <label htmlFor="name" className="hidden">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-full py-3 px-3 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl border border-gray-400  text-white font-semibold focus:border-myred focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="hidden">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    className="w-full py-3 px-3 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl border border-gray-400  text-white font-semibold focus:border-myred focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label htmlFor="tel" className="hidden">Number</label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="Telephone Number"
                    className="w-full py-3 px-3 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl border border-gray-400  text-white font-semibold focus:border-myred focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="md:w-32 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                  >
                    Submit
                  </button>
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
