
import Certificate from '../ui/Certificate';
import Achevements from '../ui/Achevements';
import Feature from '../ui/Feature';
import Image from 'next/image';
export const metadata = {
  title: 'ICONIKQ | About Us',
  description: 'Learn more about ICONIKQ, our mission, and how we provide exceptional logistics solutions for our clients.',
  keywords: 'about ICONIKQ, logistics company, transportation services',
  
};

const Page = () => {
  return (
    <>
   
      <section className="relative mt-10 bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/cfd.jpg')",
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-myblue"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-myred font-semibold text-5xl">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-white">
                    Welcome to Iconikq International, a leading logistics company based in Mumbai, MH. With our extensive industry experience and a dedicated team of professionals, we are committed to providing efficient and reliable logistics solutions to our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-white">
                      <Image loading="lazy"  width={500} height={500} layout="responsive" src="/images/icon4.png" alt="Freight Forwarding Icon" />
                    </div>
                    <h6 className="text-xl font-semibold text-myred">FREIGHT FORWARDING</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Iconikq International offers reliable global freight forwarding with tailored air and sea cargo solutions. Our expert team ensures smooth shipping and flexible delivery to key markets worldwide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <Image loading="lazy"  width={500} height={500} layout="responsive" src="/images/icon5.png" alt="Inventory Management Icon" />
                    </div>
                    <h6 className="text-xl font-semibold text-myred">INVENTORY MANAGEMENT</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Iconikq International offers expert inventory management services to streamline your supply chain. Our solutions ensure optimal stock levels, reduce costs, and enhance order accuracy. Trust us to maximize efficiency and support your business growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-white">
                      <Image loading="lazy"   width={500} height={500} layout="responsive" src="/images/icon1.png" alt="Warehousing Solutions Icon" />
                    </div>
                    <h6 className="text-xl font-semibold text-myred">WAREHOUSING SOLUTIONS</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Iconikq International provides tailored transportation and warehousing solutions for your logistics needs. Our secure facilities ensure timely delivery and safe storage of your goods. Trust us to optimize your supply chain for maximum efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Feature/>
            <Achevements />
            <Certificate />
         
          </div>
        </section>
      </section>

    </>
  );
};

export default Page;
