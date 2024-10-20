import Image from "next/image";
import Button from "../ui/Button";
import Social from "../ui/Social";

const Footer = () => {
  return (
    <footer className="bg-myblue shadow-2xl shadow-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

         {/* Newsletter Section */}
<div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
  <Image
    width={300}
    height={200}
    layout="responsive"
    className="mb-4 max-h-[15vh] lg:max-h-[25vh] w-auto"
    src="/images/logo.png"
    alt="Logo"
  />
  <h1 className="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl text-white text-center lg:text-left">
    Subscribe to our newsletter for updates.
  </h1>

  <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
    <input
      id="email"
      type="email"
      className="shadow-inner ring-2 ring-myred ring-offset-2 px-4 py-1 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full md:w-auto"
      placeholder="Email Address"
    />
    <Button text="Subscribe" />
  </div>
</div>


          {/* Footer Links Section */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2 lg:col-span-3 items-start justify-center text-center">
            
            {/* Company Section */}
            <div className="flex flex-col">
              <p className="font-medium text-myred">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-mylight">
                <a className="hover:opacity-75" href="#">About</a>
                <a className="hover:opacity-75" href="#">Meet the Team</a>
                <a className="hover:opacity-75" href="#">History</a>
                <a className="hover:opacity-75" href="#">Careers</a>
              </nav>
            </div>

            {/* Services Section */}
            <div className="flex flex-col">
              <p className="font-medium text-myred">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-mylight">
                <a className="hover:opacity-75" href="#">TRANSPORTATION</a>
                <a className="hover:opacity-75" href="#">WAREHOUSING</a>
                <a className="hover:opacity-75" href="#">FREIGHT FORWARDING</a>
                <a className="hover:opacity-75" href="#">INVENTORY MANAGEMENT</a>
                <a className="hover:opacity-75" href="#">SUPPLY CHAIN CONSULTING</a>
                <a className="hover:opacity-75" href="#">AEO CONSULTANTS</a>
              </nav>
            </div>

            {/* Legal Section */}
            <div className="flex flex-col">
              <p className="font-medium text-myred">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-mylight">
                <a className="hover:opacity-75" href="#">Privacy Policy</a>
                <a className="hover:opacity-75" href="#">Terms & Conditions</a>
                <a className="hover:opacity-75" href="#">Returns Policy</a>
                <a className="hover:opacity-75" href="#">Accessibility</a>
              </nav>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="px-8 py-3 mt-10 flex flex-row flex-wrap justify-between items-center  shadow-white shadow-xl bg-myblue">
        <div className="text-[2vh] md:text-sm my-4 text-gray-300">
          © 2024 <span className="text-myred">ICONIKQ</span>. All rights reserved.
        </div>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
