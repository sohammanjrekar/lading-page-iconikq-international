// components/LandingPage.js
import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Page = () => {
  return (
    <>
    <Navbar/>
  
    <section className="relative mt-10 bg-blueGray-50">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/images/cfd.jpg')",
          }}
        >
          <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-myblue"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-myred font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p className="mt-4 text-lg text-white">
                Welcome to Iconikq International, a leading logistics company based in Mumbai, MH. With our extensive industry experience and a dedicated team of professionals, we are committed to providing efficient and reliable logistics solutions to our clien
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
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-white">
                    <img src="images/icon4.png" alt=""/>
                  </div>
                  <h6 className="text-xl font-semibold text-myred">FREIGHT FORWARDING</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                  Iconikq International offers reliable global freight forwarding with tailored air and sea cargo solutions. Our expert team ensures smooth shipping and flexible delivery to key markets worldwide.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                  <img src="images/icon5.png" alt=""/>
                  </div>
                  <h6 className="text-xl font-semibold text-myred">INVENTORY MANAGEMENT</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                  Iconikq International offers expert inventory management services to streamline your supply chain. Our solutions ensure optimal stock levels, reduce costs, and enhance order accuracy. Trust us to maximize efficiency and support your business growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-white">
                  <img src="images/icon1.png" alt=""/>
                  </div>
                  <h6 className="text-xl font-semibold text-myred">Warehousing Solutions</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                  Iconikq International provides tailored transportation and warehousing solutions for your logistics needs. Our secure facilities ensure timely delivery and safe storage of your goods. Trust us to optimize your supply chain for maximum efficiency
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
        <div className="absolute inset-0 bg-myblue/70" />
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
        <div className="absolute inset-0 bg-myblue/70" />
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
        <div className="absolute inset-0 bg-myblue/70" />
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
