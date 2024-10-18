"use client"
import React from 'react';
import Button from '../../ui/Button';

// Sample transportation data
const transportationData = [
  {
    image: '/images/CARGO FLIGHT.jpg',
    title: 'TRANSPORTATION & WAREHOUSING',
    description: 'We provide efficient transportation and warehousing solutions to manage your logistics needs with utmost precision and care.',
    link: 'javascript:void(0)',
  },
  {
    image: 'images/freight_forwarder.png',
    title: 'FREIGHT FORWARDING',
    description: 'Our freight forwarding services ensure your shipments are handled with professionalism, from point of origin to destination.',
    link: 'javascript:void(0)',
  },
  // Add other entries here...
];

// Sample AEO data
const aeodata = [
  {
    image: 'images/aeo_consultants.jpg',
    title: 'AEO CONSULTANTS',
    description: 'Certified AEO consultants ready to help your business comply with customs procedures and international trade regulations.',
    link: 'javascript:void(0)',
  },
  // Add other entries here...
];

const SlugPage = ({ params }) => {
  const slug= params.slug 

  let dataToUse = aeodata; // Default to aeodata

  // Check if slug is 'transportdata'
  if (slug === 'transportationData') {
    dataToUse = transportationData;
  }

  return (
    <section className="pt-10 lg:pt-[120px] pb-5 lg:pb-10 bg-[#F3F4F6]">
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        {dataToUse.map((item, index) => (

               <div key={index} className=" w-full md:w-1/2 xl:w-1/3 px-4">
                 <div className="shadow-2xl bg-white rounded-lg overflow-hidden mb-10">
                   <img
                     src={item.image}
                     alt="image"
                     className="w-full h-[35vh]"
                   />
                   <div className="p-4 sm:p-6 md:p-4 xl:p-6 text-center">
                     <h3>
                       <a
                         href={item.link}
                         className="
                           font-semibold
                           text-dark text-xl
                           sm:text-[20px]
                           md:text-[20px]
                           lg:text-[20px]
                           xl:text-xl
                           2xl:text-[20px]
                           mb-4
                           block
                           hover:text-primary
                         "
                       >
                         {item.title}
                       </a>
                     </h3>
                     <p className="text-base text-body-color leading-relaxed mb-7">
                       {item.description}
                     </p>
                     <Button text="View Details" href={`/Services/${item.link}`} />
                       
                     
                   </div>
                 </div>
               </div>
             ))}
          
          </div>
        </div>
      </section>
  );
};

export default SlugPage;
