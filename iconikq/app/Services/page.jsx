import React from 'react'
import {data} from '../Data';
import Image from 'next/image';
export const metadata = {
  title: 'ICONIKQ | Our Services',
  description: 'Explore the range of logistics services offered by ICONIKQ, tailored to meet your business needs.',
  keywords: 'logistics services, shipping, freight forwarding, ICONIKQ',
 
};

const page = () => {
  return (
   <>
  
   <section className="pt-20 lg:pt-[120px] pb-5 lg:pb-10 bg-[#F3F4F6]">
        <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
      All  Services 
      </h1>
          <div className="flex flex-wrap mx-4">
           
            {data.map((card, index) => (
              <div key={index} className=" w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="shadow-2xl bg-white rounded-lg overflow-hidden mb-10">
                <Image loading="lazy" 
  width={500}
  height={300}
  src={card.image}
  alt="image"
    quality={75}
  className="w-[500px] h-[300px] object-cover"
/>

                  <div className="p-4 sm:p-6 md:p-4 xl:p-6 text-center">
                    <h3>
                      <a
                        href={card.link}
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
                        {card.title}
                      </a>
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                    {card.description.length > 100 ? `${card.description.slice(0, 130)}...` : card.description}
                    </p>
                    {/* <Button text="View Details" href={`/Services/${card.categorySlug}`} />
                       */}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
   </>
  )
}

export default page