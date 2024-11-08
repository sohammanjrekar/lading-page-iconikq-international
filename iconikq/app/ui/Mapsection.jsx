"use client";
import React, { useState } from "react";
import { supabase } from "../utils/supabase/client";

const MapSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addContact = async (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!name || !email || !tel || !message) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    // Insert contact details into the 'contacts' table in Supabase
    const { data, error } = await supabase
      .from("contacts")
      .insert([{ name, email, phone: tel, messages: message }]);

    if (error) {
      setErrorMessage(`Failed to add contact: ${error.message}`);
      setSuccessMessage("");
    } else {
      setSuccessMessage("Thank you for your feedback!");
      setErrorMessage("");
      
      // Clear input fields after successful submission
      setName("");
      setEmail("");
      setTel("");
      setMessage("");

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    }

    // Clear error message after 3 seconds
    setTimeout(() => setErrorMessage(""), 3000);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3768.8085565081515!2d72.9345031!3d19.1598556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9b18fe9f6a7%3A0x7fa376a0e7022678!2sFilix%20Towers!5e0!3m2!1sen!2sin!4v1731059006105!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex items-center">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Share Your Experience
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Your feedback helps us grow and deliver even better logistics
            solutions. We’re always eager to hear about your experience with
            Iconikq International.
          </p>

          <form onSubmit={addContact}>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded py-3 px-[14px] text-body-color text-base border border-gray-300 outline-none focus:border-primary"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded py-3 px-[14px] text-body-color text-base border border-gray-300 outline-none focus:border-primary"
              />
            </div>
            <div className="mb-6">
              <input
                type="tel"
                placeholder="Your Phone"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                className="w-full rounded py-3 px-[14px] text-body-color text-base border border-gray-300 outline-none focus:border-primary"
              />
            </div>
            <div className="mb-6">
              <textarea
                rows="6"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded py-3 px-[14px] text-body-color text-base border border-gray-300 resize-none outline-none focus:border-primary"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full text-white bg-myred rounded shadow-inner shadow-red-200 p-3 transition hover:bg-opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>

          {successMessage && (
            <p className="text-green-600 mt-4">{successMessage}</p>
          )}
          {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
