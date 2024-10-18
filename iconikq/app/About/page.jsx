// components/LandingPage.js
import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Page = () => {
  return (
    <>
    <Navbar/>
    <>
  {/* component */}
  <div className="bg-white relative flex items-center  justify-center overflow-hidden z-30 ">
    <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
      <div className="flex flex-col items-center justify-between lg:flex-row py-16">
        <div className=" relative ">
          <div className=" absolute top-0 -left-48 z-0  opacity-50 ">
            <img
              src="https://placehold.co/200x100"
              className="w-36 z-0  h-full    object-fill fill-y text-y   "
            />
          </div>
          <div className="lg:max-w-xl lg:pr-5 relative z-40">
            <p className="flex text-sm uppercase text-g1  ">About Us</p>
            <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
              We make you look
              <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">
                different
              </span>
            </h2>
            <p className="text-base text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque it.
            </p>
            <div className="mt-10 flex flex-col items-center md:flex-row">
              <a
                href="/"
                className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
              >
                View More
              </a>
              <a
                href="/"
                aria-label=""
                className="group inline-flex items-center font-semibold text-g1"
              >
                Watch how it works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            />
          </svg>
          <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
            <img src="https://placehold.co/400x400" />
          </div>
        </div>
      </div>
    </div>
    <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
      About Us
    </div>
    <div className=" absolute -bottom-24 left-10 z-0  opacity-10 ">
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        className="w-96 z-0  h-full    object-fill fill-gray-300 text-gray-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
        />
      </svg>
    </div>
    <div className=" absolute -bottom-0 left-3/4 z-0  opacity-10 ">
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 z-0  h-full -rotate-90   object-fill fill-red-300 text-red-300"
      >
        <path
          d="M32 225h12.993A4.004 4.004 0 0 0 49 220.997V138.01c0-4.976.724-5.04 1.614-.16l12.167 66.708c.397 2.177 2.516 3.942 4.713 3.942h8.512a3.937 3.937 0 0 0 3.947-4S79 127.5 80 129s14.488 52.67 14.488 52.67c.559 2.115 2.8 3.83 5.008 3.83h8.008a3.993 3.993 0 0 0 3.996-3.995v-43.506c0-4.97 1.82-5.412 4.079-.965l10.608 20.895c1.001 1.972 3.604 3.571 5.806 3.571h9.514a3.999 3.999 0 0 0 3.993-4.001v-19.49c0-4.975 2.751-6.074 6.155-2.443l6.111 6.518c1.51 1.61 4.528 2.916 6.734 2.916h7c2.21 0 5.567-.855 7.52-1.92l9.46-5.16c1.944-1.06 5.309-1.92 7.524-1.92h23.992a4.002 4.002 0 0 0 4.004-3.992v-7.516a3.996 3.996 0 0 0-4.004-3.992h-23.992c-2.211 0-5.601.823-7.564 1.834l-4.932 2.54c-4.423 2.279-12.028 3.858-16.993 3.527l2.97.198c-4.962-.33-10.942-4.12-13.356-8.467l-11.19-20.14c-1.07-1.929-3.733-3.492-5.939-3.492h-7c-2.21 0-4 1.794-4 4.001v19.49c0 4.975-1.14 5.138-2.542.382l-12.827-43.535c-.625-2.12-2.92-3.838-5.127-3.838h-8.008c-2.207 0-3.916 1.784-3.817 4.005l1.92 42.998c.221 4.969-.489 5.068-1.585.224l-15.13-66.825c-.488-2.155-2.681-3.902-4.878-3.902h-8.512a3.937 3.937 0 0 0-3.947 4s.953 77-.047 75.5-13.937-92.072-13.937-92.072C49.252 34.758 47.21 33 45 33H31.999"
          fillRule="evenodd"
        />
      </svg>
    </div>
    <div className=" absolute top-10 left-3/4 z-0  opacity-10 ">
      <svg
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        className="w-96 z-0  h-full    object-fill fill-blue-300 text-blue-300"
      >
        <path
          d="M230.704 99.2a4.004 4.004 0 0 0-4.01-3.995h-50.981c-2.215 0-5.212-1.327-6.693-2.964L155.289 77.08c-17.795-19.65-41.628-16.256-53.234 7.58l-38.736 79.557C60.42 170.172 52.705 175 46.077 175H29.359a3.996 3.996 0 0 0-3.994 3.995v10.01A4 4 0 0 0 29.372 193h24.7c8.835 0 19.208-6.395 23.174-14.293l43.645-86.914c3.964-7.894 12.233-9.228 18.473-2.974l17.184 17.219c3.123 3.13 9.242 5.667 13.647 5.667H226.7a4.005 4.005 0 0 0 4.004-3.994v-8.512z"
          fillRule="evenodd"
        />
      </svg>
    </div>
  </div>
</>

    <section className="relative bg-blueGray-50">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
          }}
        >
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p className="mt-4 text-lg text-blueGray-200">
                  This is a simple example of a Landing Page you can build using
                  Notus JS. It features multiple CSS components based on the
                  Tailwind CSS design system.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-10 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Awarded Agency</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Free Revisions</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Keep your user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Verified Company</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep your user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <>
  {/* component */}
  <section className="container mx-auto px-8 py-8 lg:py-40">
    <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">
      Latest Achievements
    </h2>
    <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">
      Read about our latest achievements and milestones.
    </p>
    <a href="https://www.material-tailwind.com/" target="_blank">
      Generated with <b>Magic AI Blocks</b> by Creative Tim
    </a>
    .
    <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
        <img
          src="https://bucket.material-tailwind.com/magic-ai/58b51625af5803baea7811b7e9128c8b23c0706c3271fa863b6bc287c2d3958a.jpg"
          alt="bg"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="p-6 relative flex flex-col justify-end">
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
            Record-breaking Profits
          </h4>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
            We are proud to announce that our bank has achieved record-breaking
            profits this year. Thanks to our dedicated team and loyal customers,
            we have surpassed all expectations and set new industry standards.
            Read more to learn about our success story.
          </p>
        </div>
      </div>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
        <img
          src="https://bucket.material-tailwind.com/magic-ai/36e7d64250cd9568062f658a26b4d0107c00235cb3b85fa4919b3ba4070c9bed.jpg"
          alt="bg"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="p-6 relative flex flex-col justify-end">
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
            Expansion into New Markets
          </h4>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
            We are excited to share that our bank has successfully expanded into
            new markets. With strategic partnerships and innovative solutions,
            we have established a strong presence in international markets.
            Learn more about our expansion journey and the opportunities it
            brings.
          </p>
        </div>
      </div>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
        <img
          src="https://bucket.material-tailwind.com/magic-ai/36e7d64250cd9568062f658a26b4d0107c00235cb3b85fa4919b3ba4070c9bed.jpg"
          alt="bg"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="p-6 relative flex flex-col justify-end">
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
            Digital Transformation Success
          </h4>
          <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
            Our bank has undergone a successful digital transformation,
            revolutionizing the way we serve our customers. From seamless online
            banking experiences to advanced security measures, we have embraced
            technology to enhance customer satisfaction. Discover the key
            milestones of our digital transformation journey.
          </p>
        </div>
      </div>
    </div>
  </section>
</>

        </div>
      </section>
    </section>
    <Footer/>
    </>
  );
};

export default Page;
