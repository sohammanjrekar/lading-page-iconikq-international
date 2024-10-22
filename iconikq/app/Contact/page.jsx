import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import Button from '../ui/Button'
import Image from 'next/image'

const page = () => {
  return (
    <>
  <Navbar/>
 
      <div className="container flex flex-col items-center mb-24  mx-3 sm:mx-auto my-21">
      <div class="relative w-full h-[50vh]"><Image loading="lazy"  loading="lazy" class="absolute h-full w-full object-cover object-center" src="/images/contact.jpg" width={1000} height={500} alt="contact image" />
    <div class="absolute inset-0 h-full w-full bg-black/50"></div>
    <div class="relative pt-24 sm:pt-36 text-center">
      <h2 class="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-5xl lg:text-4xl">Contact Information</h2>
      <p class="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-90">We	&apos;re here to help you, every step of the way.</p>
    </div>
  </div>
  
 

    {/* COMPONENT CODE */}
   
      <div className="container w-[90%] z-30 -mt-20 p-2 sm:p-6 mb-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40  rounded-2xl bg-white shadow-2xl">
        <div className="flex">
          <h1 className="font-bold uppercase text-4xl sm:text-5xl">
            Send us a <br /> message
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="First Name*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Phone*"
          />
        </div>
        <div className="my-4">
          <textarea
            placeholder="Message*"
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            defaultValue={""}
          />
        </div>
        <div className="my-2 w-1/2 lg:w-1/4">
        <Button text="Send Message"/>
        </div>
      </div>
      <div className="w-full z-40 lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-myblue rounded-2xl">
        <div className="flex flex-col text-white">
          <h1 className="font-bold uppercase text-4xl my-4  text-myred">
            Drop in our office
          </h1>
          <p className="text-white">
          We&apos;d love to meet you in person! Visit us at our Mumbai office for a consultation or to discuss your logistics needs.
          </p>
          <div className="flex my-4 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
              <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
            </div>
            <i className="fas fa-map-marker-alt pt-2 pr-2">
              <div className="flex flex-col">
                <h2 className="text-2xl text-myred">Main Office</h2>
                <p className="text-white">
                704/705, Filix, Opposite
Asian Paints, LBS Marg,
Bhandup West,
Mumbai:  400078
                </p>
              </div>
            </i>
          </div>
          <i className="fas fa-map-marker-alt pt-2 pr-2">
            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-phone-alt pt-2 pr-2"></i>
              </div>
              <i className="fas fa-phone-alt pt-2 pr-2">
                <div className="flex flex-col">
                  <h2 className="text-2xl  text-myred">Call Us</h2>
                  <p className="text-white">+919870176503</p>
                  <p className="text-white">+91 9870725060</p>
                </div>
              </i>
            </div>
            
          </i>
        </div>
      
      
   
   
  </div>
 
  </div>
    


  <Footer/>
</>

  )
}

export default page