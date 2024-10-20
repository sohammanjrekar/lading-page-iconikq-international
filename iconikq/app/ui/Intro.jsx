
import Button from './Button';
import Image from 'next/image'; // Added for optimized /images

const Intro = () => {
  return (
    <>
      {/* component */}
      <div
        className="px-4 md:px-20 lg:px-40 border-t border-b py-20 bg-opacity-10"
        style={{
          backgroundImage:
            'url("https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png")',
        }}
      >
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            What We Offer
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Comprehensive logistics solutions tailored to meet your unique needs, ensuring seamless transportation and handling of goods, both locally and globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 group bg-white shadow-xl shadow-neutral-100 border">
          <div className="p-10 flex flex-col items-center text-center group border-b md:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-white text-white shadow-lg shadow-myblue">
              <Image src="/images/icon1.png" alt="Warehousing Solutions" width={80} height={80} />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">Warehousing Solutions</p>
            <p className="mt-2 text-sm text-slate-500">
              Secure and efficient storage facilities for all your logistics needs.
            </p>
          </div>
          <div className="p-10 flex flex-col items-center text-center group border-b md:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-white text-white shadow-lg shadow-myblue">
              <Image src="/images/icon2.png" alt="Customs Clearance" width={80} height={80} />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">Customs Clearance</p>
            <p className="mt-2 text-sm text-slate-500">
              Efficient customs clearance services to ensure smooth import and export procedures.
            </p>
          </div>
          <div className="p-10 flex flex-col items-center text-center group border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-white text-white shadow-lg shadow-myblue">
              <Image src="/images/icon3.png" alt="Supply Chain Consulting" width={80} height={80} />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">Supply Chain Consulting</p>
            <p className="mt-2 text-sm text-slate-500">
              Expert consultancy services to enhance your supply chain efficiency and maximize profitability.
            </p>
          </div>
          <div className="p-10 flex flex-col items-center text-center group border-b md:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-white text-white shadow-lg shadow-myblue">
              <Image src="/images/icon4.png" alt="Transportation Services" width={80} height={80} />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">Transportation Services</p>
            <p className="mt-2 text-sm text-slate-500">
              Reliable and timely transportation solutions for hassle-free deliveries.
            </p>
          </div>
          <div className="p-10 flex flex-col items-center text-center group border-b md:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-white text-white shadow-lg shadow-myblue">
              <Image src="/images/icon5.png" alt="Inventory Management" width={80} height={80} />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">Inventory Management</p>
            <p className="mt-2 text-sm text-slate-500">
              Effective inventory management solutions to optimize stock control and streamline operations.
            </p>
          </div>
          <div className="p-10 flex flex-col items-center text-center group border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-white text-white shadow-lg shadow-myblue">
              <Image src="/images/icon6.png" alt="Last-Mile Delivery" width={80} height={80} />
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">Last-Mile Delivery</p>
            <p className="mt-2 text-sm text-slate-500">
              Fast and accurate last-mile delivery solutions to ensure customer satisfaction.
            </p>
          </div>
        </div>

        <div className="w-full bg-myblue shadow-xl shadow-indigo-200 py-10 px-5 lg:px-20 flex flex-wrap justify-center sm:justify-between items-center">
  <p className="text-white text-center">
    <span className="text-4xl font-medium text-myred block">Still Confused?</span>
    <span className="text-lg block">Book for Free Career Consultation Today!</span>
  </p>
  <div className="mt-5"> {/* Added margin-top to provide space between text and button */}
    <Button text="Contact Us" href="Contact/" />
  </div>
</div>

      </div>
    </>
  );
};

export default Intro;
