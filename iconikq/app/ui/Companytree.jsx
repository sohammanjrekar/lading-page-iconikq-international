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

      {/* Parent Company Section */}
      <section className="bg-blue-50 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
        <Image
          src="/path/to/parent-company-logo.png" // Replace with actual logo path
          alt="Parent Company Logo"
          width={120}
          height={120}
          className="mb-4"
        />
        <h2 className="text-3xl font-semibold text-blue-gray-900">Parent Company</h2>
        <p className="text-gray-700 mt-2 max-w-md">
          Leading the charge in innovation and commitment, our parent company drives success across all our sister companies with a focus on quality, growth, and sustainability.
        </p>
      </section>

      {/* Sister Companies Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sister Company 1 */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/path/to/sister-company1-logo.png" // Replace with actual logo path
            alt="Sister Company 1 Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-blue-gray-900">Sister Company 1</h3>
          <p className="text-gray-600 mt-2">
            Focused on delivering exceptional services in [industry 1], Sister Company 1 has set benchmarks with its innovative solutions and dedicated team.
          </p>
        </div>

        {/* Sister Company 2 */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/path/to/sister-company2-logo.png" // Replace with actual logo path
            alt="Sister Company 2 Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-blue-gray-900">Sister Company 2</h3>
          <p className="text-gray-600 mt-2">
            A leader in [industry 2], Sister Company 2 offers pioneering solutions that enhance efficiency and bring about transformative change.
          </p>
        </div>

        {/* Sister Company 3 */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/path/to/sister-company3-logo.png" // Replace with actual logo path
            alt="Sister Company 3 Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-blue-gray-900">Sister Company 3</h3>
          <p className="text-gray-600 mt-2">
            With an unwavering focus on [industry 3], Sister Company 3 is committed to driving excellence and delivering superior value to its customers.
          </p>
        </div>
      </section>

     
    </div>
  );
};

export default Companies;
