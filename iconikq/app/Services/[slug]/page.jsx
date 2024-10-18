import React from 'react';
import { useRouter } from 'next/router';

// Sample transportation data
const transportationData = [
  {
    image: 'images/transport.jpg',
    title: 'TRANSPORTATION & WAREHOUSING',
    description: 'We provide efficient transportation and warehousing solutions to manage your logistics needs with utmost precision and care.',
    link: 'javascript:void(0)', // replace with actual link when available
  },
  // Add other transportation services...
];

// Sample AEO data
const aeodata = [
  {
    image: 'images/aeo_consultants.jpg',
    title: 'AEO CONSULTANTS',
    description: 'Certified AEO consultants ready to help your business comply with customs procedures and international trade regulations.',
    link: 'javascript:void(0)', // replace with actual link when available
  },
  // Add other AEO services...
];

const ServicesPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Get the slug from the URL

  // Determine which data to use based on the slug
  const serviceData = slug === 'transportdata' ? transportationData : aeodata;

  return (
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold mb-10">
          {slug === 'transportdata' ? 'Transportation Services' : 'AEO Services'}
        </h2>
        <div className="flex flex-wrap -mx-4">
          {serviceData.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="shadow-2xl bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3 className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    {service.description}
                  </p>
                  {service.link && (
                    <a
                      href={service.link}
                      className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition"
                    >
                      View Details
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
