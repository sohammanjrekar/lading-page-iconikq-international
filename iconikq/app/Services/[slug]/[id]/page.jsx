"use client";
import { useEffect } from "react";
import { useServicesStore } from "../../store/servicesStore"; // Assuming your store is in this file
import Image from "next/image";
import Head from "next/head";
import Button from "../../ui/Button";

const Page = ({ params }) => {
  const { id } = params;
  const { singleServiceData, loading, error, fetchSingleServiceData } = useServicesStore(); // Use fetchSingleServiceData to fetch a single service

  useEffect(() => {
    // Fetch the service data by ID when the component mounts
    if (id) {
      fetchSingleServiceData(id);
    }
  }, [id, fetchSingleServiceData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching service data: {error}</div>;
  }

  if (!singleServiceData) {
    return <div>Service not found.</div>;
  }

  return (
    <>
      {/* Dynamic Metadata */}
      <Head>
        <title>Iconikq | {singleServiceData.name}</title>
        <meta
          name="description"
          content={`Learn more about ${singleServiceData.name}, a premium service offering from Iconikq.`}
        />
        <meta property="og:title" content={singleServiceData.name} />
        <meta
          property="og:description"
          content={`Learn more about ${singleServiceData.name}, a premium service offering from Iconikq.`}
        />
        <meta property="og:image" content={singleServiceData.image || "/default-image.jpg"} />
        <meta property="og:url" content={`https://yourwebsite.com/services/${id}`} />
      </Head>

      <div className="min-h-screen container w-[70vw] my-8 pt-10 mx-auto">
        <main className="mt-12">
          {/* Header Section */}
          <header className="mb-12 text-center">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-myblue leading-tight mb-4">
              {singleServiceData.name}
            </h1>
            <div className="flex flex-row items-center justify-center mb-2">
              <div className="bg-myred w-[10vw] flex items-center rounded-full text-white py-1 uppercase mr-2">
                <p className="text-sm font-medium text-center mx-auto">
                  {singleServiceData.category}
                </p>
              </div>
              <p className="text-md font-bold text-myblue">
                Price: ${singleServiceData.price} {/* Example field */}
              </p>
            </div>
          </header>

          {/* Top Image */}
          {singleServiceData.image && (
            <div className="relative mb-12">
              <Image
                loading="lazy"
                alt="Primary image related to the service"
                width={800}
                height={500}
                layout="responsive"
                src={singleServiceData.image}
                className="rounded-lg max-h-[70vh] shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          )}

          {/* Service Content Section */}
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            {/* Main Content */}
            <div className="lg:w-3/4 px-4 lg:px-0 mb-12 lg:mb-0">
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-justify mb-8">
                {singleServiceData.description}
              </p>
            </div>

            {/* Sidebar / Contact Section */}
            <div className="w-full lg:w-1/4 max-w-sm mx-auto lg:mx-0 mb-12 lg:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out">
                <p className="text-gray-700 mb-4 text-lg leading-relaxed text-justify">
                  Interested in this service? Get in touch with us to learn more!
                </p>
                <Button className="mx-auto" text="Contact Us" href="/contact" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
