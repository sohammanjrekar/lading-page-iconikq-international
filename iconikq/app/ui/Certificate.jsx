"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCertificateStore } from '../store/certificateStore';

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
        className="h-[90vh] rounded-lg object-cover"
        src={certificate.image_url} 
        alt={certificate.title}
        width={800}
        height={800}
        layout="intrinsic"
      />
    </div>
  );
};

const Certificate = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const { certificateData, loading, error, fetchCertificateData } = useCertificateStore();

  useEffect(() => {
    fetchCertificateData(); // Fetch data from the store when the component mounts
  }, [fetchCertificateData]);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="container mx-auto py-5 w-[85vw]">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 lg:!text-4xl">
          Certification
        </h2>
        <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">
          Read about our latest achievements and milestones.
        </p>
        <div className="grid my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificateData.map((certificate) => (
            <div
              key={certificate.id}
              onClick={() => openModal(certificate)}
              className="relative shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 group"
            >
              <div className="relative w-full h-full">
                <Image 
                  loading="lazy"
                  src={certificate.image_url} 
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-70"
                  width={500}
                  height={500}
                  layout="responsive"
                />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-myblue backdrop-blur-xl text-white p-4 rounded-b-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <h1 className="text-xl text-myred font-semibold">{certificate.title}</h1>
                  <p className="mt-2 text-md">{certificate.description}</p>
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
