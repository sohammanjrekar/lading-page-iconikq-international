"use client";
import Image from "next/image";

const Companies = () => {
  return (
    <div className="container mx-auto py-16 px-8 space-y-12">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-blue-gray-900 mb-4">Our Companies</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We’re proud to be part of a family of companies delivering excellence across industries. Meet our parent company and our sister companies, each with a unique impact.
        </p>
      </section>

      {/* Sister Companies Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* IconikQ (Freight Forwarding) */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <Image
            src="https://res.cloudinary.com/mybazaar/image/upload/v1731050860/iconikq/logo_dt9v6c.png"
            alt="Iconikq"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-blue-gray-900">IconikQ - Freight Forwarding</h3>
          <p className="text-gray-600 mt-2">
            IconikQ specializes in freight forwarding, providing efficient and reliable logistics solutions. We manage the movement of goods globally, ensuring timely delivery and cost-effective shipping strategies.
          </p>
        </div>

        {/* Sheran (Customs Brokers) */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <Image
            src="https://res.cloudinary.com/mybazaar/image/upload/v1731050532/iconikq/amity_sharon_logo_1_i8ptah.png"
            alt="Sheran Customs Broker"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-blue-gray-900">Sheran - Customs Brokers</h3>
          <p className="text-gray-600 mt-2">
            Sheran is a leading customs brokerage firm specializing in navigating the complexities of customs clearance. We provide expert advice and smooth handling of import/export processes to ensure compliance and efficiency.
          </p>
        </div>

        {/* Amity (Logistics and Customs Broker) */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <Image
            src="https://res.cloudinary.com/mybazaar/image/upload/v1731050533/iconikq/amity_sharon_logo_2_zu2nex.png"
            alt="Amity Logistics and Customs Broker"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-blue-gray-900">Amity - Logistics & Customs Broker</h3>
          <p className="text-gray-600 mt-2">
            Amity excels in logistics and customs brokerage services, offering tailored solutions for freight forwarding, supply chain management, and customs clearance. We help clients optimize their global supply chains with strategic insights and reliable execution.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Companies;
