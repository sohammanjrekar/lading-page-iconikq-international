"use client";
import { useState } from 'react';
import Image from 'next/image';

// Modal Component
const Modal = ({ showModal, setShowModal, certificate }) => {
  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 bg-myblue bg-opacity-75 flex justify-center items-center z-50"
      onClick={() => setShowModal(false)}
    >
      <Image
        className="h-[80vh] rounded-lg object-cover"
        src={certificate.image}
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

  const certificates = [
    {
      title: 'STARTUP INDIA CERTIFICATE',
      image: '/images/c1.jpg',
      description:
        'This certificate recognizes the startup’s potential and innovation under the Startup India initiative, a flagship program of the Government of India.',
    },
    {
      title: 'MSME CERTIFICATE',
      image: '/images/c2.jpg',
      description:
        'This certificate validates the registration of the company under the Ministry of Micro, Small, and Medium Enterprises (MSME), recognizing its contribution to the Indian economy.',
    },
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

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
          {certificates.map((certificate, index) => (
            <div
              key={index}
              onClick={() => openModal(certificate)}
              className="mx-auto relative shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105"
            >
              <div className="relative w-full h-full">
                <Image
                  src={certificate.image}
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
