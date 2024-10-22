import Link from "next/link";
import Image from "next/image";

const Team = () => {
  return (
    <section className="bg-myblue">
      <div className="container px-6 py-10 mx-auto">
        <div className="xl:flex xl:items-center xl:-mx-4">
          <div className="xl:w-1/2 xl:mx-4">
            <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-myred">
              Our Team
            </h1>
            <p className="max-w-2xl mt-4 text-gray-300">
              At Iconikq International, our team is dedicated to providing top-notch logistics solutions. With extensive industry experience, we ensure timely and secure deliveries, both domestically and internationally. Every member is committed to exceeding client expectations by offering customized, transparent, and efficient services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
          
              <div>
                <Image loading="lazy"  
                  className="object-cover rounded-xl h-[45vh] w-full"
                  src="/images/parth1.jpg" 
                  alt="Mr. Parth Ruparel" 
                  width={600}
                  height={700}
                />
                <h1 className="mt-4 text-2xl font-semibold  capitalize text-white">
                  Mr. Parth Ruparel
                </h1>
                <p className="mt-2 capitalize text-gray-300">Partner</p>
              </div>
           
            
            
              <div>
                <Image loading="lazy"  
                  className="object-cover rounded-xl h-[45vh] w-full"
                  src="/images/drusti2.jpg" 
                  alt="Ms. Drishti Ruparel" 
                  width={600}
                  height={700}
                />
                <h1 className="mt-4 text-2xl font-semibold  capitalize text-white">
                  Ms. Drishti Ruparel
                </h1>
                <p className="mt-2 capitalize text-gray-300">Partner</p>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
