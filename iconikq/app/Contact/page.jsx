"use client";
import React, { useState } from "react";
import Image from "next/image";
import { supabase } from "./../utils/supabase/client";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addContact = async (e) => {
    e.preventDefault();
    if (!name || !email || !tel) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    console.log("Adding contact:", { name, email, phone: tel });

    const { data, error } = await supabase
      .from("contacts")
      .insert([{ name, email, phone: tel }]);

    if (error) {
      console.error("Error adding contact:", error);
      setErrorMessage(`Failed to add contact: ${error.message}`);
      setSuccessMessage("");
    } else {
      console.log("Contact added:", data);
      setSuccessMessage("Thank you for getting in touch! We will respond soon.");
      setErrorMessage("");
      setName("");
      setEmail("");
      setTel("");
    }
  };

  return (
    <div className="relative w-full py-[20vh] h-full pb-20 flex flex-col flex-wrap overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/mybazaar/video/upload/v1730380672/iconikq/world_cb2p6k.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-2xl sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-myred font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p className="text-lg sm:text-2xl font-medium text-white mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex justify-start items-center mt-8 text-white">
                  <Image
                    src="https://res.cloudinary.com/mybazaar/image/upload/v1730386968/iconikq/location_q0sjon.png"
                    alt="address"
                    height={50}
                    width={50}
                  />
                  <div className="text-md tracking-wide font-semibold w-full mx-3">
                    704/705, Filix, Opposite Asian Paints, LBS Marg, Bhandup West, Mumbai – 400078
                  </div>
                </div>

                <div className="flex justify-start items-center mt-4 text-white">
                  <Image
                    src="https://res.cloudinary.com/mybazaar/image/upload/v1730386190/iconikq/phone_veerqa.png"
                    alt="phone"
                    height={50}
                    width={50}
                  />
                  <div className="text-md tracking-wide font-semibold w-full ml-3">
                    +91 9870725060
                  </div>
                </div>

                <div className="flex justify-start items-center mt-2 text-white">
                  <Image
                    src="https://res.cloudinary.com/mybazaar/image/upload/v1730386190/iconikq/email_s9ybuk.png"
                    alt="email"
                    height={50}
                    width={50}
                  />
                  <div className="text-md tracking-wide font-semibold w-full ml-3">
                    info@iconikqinternational.com
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form
                onSubmit={addContact}
                className="p-1 py-3 flex items-center flex-col justify-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-2xl rounded-lg"
              >
                <div className="flex flex-col mb-4">
                  <label htmlFor="name" className="text-lg text-myred font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full md:w-[30vw] py-3 px-3 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl border border-white text-white font-semibold focus:border-myred focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="text-lg text-myred font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full md:w-[30vw] py-3 px-3 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl border border-white text-white font-semibold focus:border-myred focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="tel" className="text-lg text-myred font-bold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    placeholder="Telephone Number"
                    className="w-full md:w-[30vw] py-3 px-3 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl border border-white text-white font-semibold focus:border-myred focus:outline-none"
                  />
                </div>

                {successMessage && <p className="text-green-500">{successMessage}</p>}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                <button
                  type="submit"
                  className="mx-2 shadow-inner shadow-[#e77979] group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-center cursor-pointer h-10 border-2 border-solid py-0 px-6 rounded-lg overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-myred text-white border-myred hover:text-myred focus:text-myred"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
