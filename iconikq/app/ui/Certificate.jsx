"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { supabase } from '../utils/supabase/client'; // Make sure the path is correct

// Modal Component
const Modal = ({ showModal, setShowModal, certificate }) => {
  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 bg-myblue bg-opacity-75 flex justify-center items-center z-50"
      onClick={() => setShowModal(false)}
    >
      <Image 
        loading="lazy"
        className="h-[80vh] rounded-lg object-cover"
        src={certificate.image_url} // Updated to use image_url from Supabase
        alt={certificate.title}
        width={800} // Adjust width
        height={800} // Adjust height
        layout="intrinsic" // Adjust the layout to fit
      />
    </div>
  );
};

const Certificate = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [certificates, setCertificates] = useState([]); // State for fetched certificates
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchCertificates = async () => {
      const { data, error } = await supabase
        .from("certificate") // Your Supabase table name
        .select("id, title, description, image_url"); // Specify the fields you need

      if (error) {
        console.error("Error fetching certificates:", error);
      } else {
        setCertificates(data);
      }
      setLoading(false); // Stop loading after fetching data
    };

    fetchCertificates();
  }, []);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  if (loading) return <p>Loading...</p>; // Show loading state

  return (
    <>
      <div className="container mx-auto py-5 w-[85vw]">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 lg:!text-4xl">
          Certification
        </h2>
        <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">
          Read about our latest achievements and milestones.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((certificate) => (
            <div
              key={certificate.id} // Use id from Supabase data
              onClick={() => openModal(certificate)}
              className="mx-auto relative shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105"
            >
              <div className="relative w-full h-full">
                <Image 
                  loading="lazy"
                  src={certificate.image_url} // Updated to use image_url from Supabase
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  width={500}
                  height={500}
                  layout="responsive"
                />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-myblue bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg transition-all duration-300 opacity-0 hover:opacity-100">
                  <h1 className="text-2xl font-semibold">{certificate.title}</h1>
                  <p className="mt-2">{certificate.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      {selectedCertificate && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          certificate={selectedCertificate}
        />
      )}
    </>
  );
};

export default Certificate;
