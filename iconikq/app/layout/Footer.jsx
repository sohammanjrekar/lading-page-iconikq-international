import Image from "next/image";
import Button from "../ui/Button";
import Social from "../ui/Social"

const Footer = () => {
  return (
    <footer className="bg-myblue shadow-2xl shadow-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">

          <div className="sm:col-span-2">
            <Image  width={500}
              height={500}
              layout="responsive" className="mb-4 h-[6vh]" src="/images/logo.png" alt="" />
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl text-white">
              Subscribe to our newsletter for updates.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="shadow-inner ring-2 ring-myred ring-offset-2 px-4 py-1 text-gray-700 bg-white border rounded-md bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-400 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <Button text="Subscribe" />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4 items-start justify-center text-center">
  <div class="flex flex-col">
    <p class="font-medium text-myred">Company</p>
    <nav class="flex flex-col mt-4 space-y-2 text-sm text-mylight">
      <a class="hover:opacity-75" href="#">About</a>
      <a class="hover:opacity-75" href="#">Meet the Team</a>
      <a class="hover:opacity-75" href="#">History</a>
      <a class="hover:opacity-75" href="#">Careers</a>
    </nav>
  </div>
  <div class="flex flex-col col-span-2">
    <p class="font-medium text-myred">Services</p>
    <nav class="flex flex-col mt-4 space-y-2 text-sm text-mylight">
      <a class="hover:opacity-75" href="#">TRANSPORTATION</a>
      <a class="hover:opacity-75" href="#">WAREHOUSING</a>
      <a class="hover:opacity-75" href="#">FREIGHT FORWARDING</a>
      <a class="hover:opacity-75" href="#">INVENTORY MANAGEMENT</a>
      <a class="hover:opacity-75" href="#">SUPPLY CHAIN CONSULTING</a>
      <a class="hover:opacity-75" href="#">AEO CONSULTANTS</a>
    </nav>
  </div>
  
  <div class="flex flex-col">
    <p class="font-medium text-myred">Legal</p>
    <nav class="flex flex-col mt-4 space-y-2 text-sm text-mylight">
      <a class="hover:opacity-75" href="#">Privacy Policy</a>
      <a class="hover:opacity-75" href="#">Terms & Conditions</a>
      <a class="hover:opacity-75" href="#">Returns Policy</a>
      <a class="hover:opacity-75" href="#">Accessibility</a>
    </nav>
  </div>
</div>

        </div>
      </div>

      <div className="px-8 py-3 mt-10 flex justify-between items-center shadow-white shadow-xl bg-myblue ">
        
        <div className="text-[2vh] md:text-sm text-gray-300 ">
          © 2024 <span className="text-myred">ICONIKQ</span>. All rights reserved.
        </div>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
