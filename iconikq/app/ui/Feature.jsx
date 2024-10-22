import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (
    <>
      {/* component */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
          <div>
            <span className="text-center text-myred text-xl font-semibold">
             Our Core values
            </span>
            <h2 className="mt-4 text-2xl text-center uppercase text-gray-900 font-bold md:text-4xl">
            values behind the growth of the company
            </h2>
          </div>
          <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8 flex flex-wrap justify-center items-center">
                <div>
                <Image loading="lazy" 
                  src="/images/edu.png"
                   className="h-[10vh] w-full"
                  width={80}
                  height={80}
                  alt="burger illustration"
                />
                </div>
                <div className="space-y-2">
                  <h5 className="text-xl text-center text-myblue font-medium transition group-hover:text-myred">
                    Always Learning
                  </h5>
                  <p className="text-sm text-center text-myblue">
                   we understand the importance of staying up-to-date with the latest industry trends and regulations. Thats why we are commited to always learning and improving our services.
                  </p>
                </div>
               
              </div>
            </div><div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8 flex flex-wrap justify-center items-center">
                <div>
                <Image loading="lazy" 
                src="/images/tech.png"
                   className="h-[10vh] w-full"
                  width={40}
                  height={40}
                  alt="burger illustration"
                />
                </div>
                <div className="space-y-2">
                  <h5 className="text-xl text-center text-myblue font-medium transition group-hover:text-myred">
                Latest Technology
                  </h5>
                  <p className="text-sm text-center text-myblue">
                    From real-time tracking and automated processes to digital documentation and advanced analytics, these technological advancements are revolutionizing the logistics industry.
                  </p>
                </div>
               
              </div>
            </div><div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8 flex flex-wrap justify-center items-center">
                <div>
                <Image loading="lazy" 
                   src="/images/safty.png"
                   className="h-[10vh] w-full"
                  width={40}
                  height={40}
                  alt="burger illustration"
                />
                </div>
                <div className="space-y-2">
                  <h5 className="text-xl text-myblue text-center font-medium transition group-hover:text-myred">
                   Safety & Quality
                  </h5>
                  <p className="text-sm text-myblue text-center">
                    When it comes to frieght forwarding , safety and quality are essential considerations.At our company, we palce a strong emphasis on both to ensure that ourcustomers receive thier goods in the best possible condition.
                  </p>
                </div>
               
              </div>
            </div><div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8 flex flex-wrap justify-center items-center">
                <div>
                <Image loading="lazy" 
                   src="/images/env.png"
                  className="h-[10vh] w-full"
                  width={40}
                  height={40}
                  alt="burger illustration"
                />
                </div>
                <div className="space-y-2">
                  <h5 className="text-xl text-myblue text-center font-medium transition group-hover:text-myred">
                   Care For Environment
                  </h5>
                  <p className="text-sm text-myblue text-center">
                   We are commited to minimizing our impact on the environment. we believe that it is our responsibility to contribute to a more sustainable future for all.
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature
