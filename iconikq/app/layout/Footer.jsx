import Image from "next/image";
import Button from "../ui/Button";
import Social from "../ui/Social";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-myblue shadow-3xl shadow-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Newsletter Section */}
          <div className="sm:col-span-2 pl-7 lg:col-span-1 flex flex-col items-center lg:items-start">
            <Image 
              width={500}
              height={500}
              priority
              quality={75}
              className="mb-4 max-h-[50vh] sm:max-h-[20vh] lg:max-h-[20vh] max-w-[50vw] sm:!max-w-[20vw]"
              src="/images/logo.png"
              alt="Logo"
            />
            <h1 className="text-lg font-semibold tracking-tight xl:text-xl text-white text-center lg:text-left">
              Subscribe To Our Newsletter For Updates.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 justify-center items-center md:space-y-0 md:flex-row">
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
          <div className="grid grid-cols-1 sm:col-span-2 gap=8 md:gap-10 lg:grid-cols-3 sm:grid-cols-3 lg:col-span-3 mx-auto items-start justify-items-center text-center">

            {/* Company Section */}
            <div className="flex flex-col my-4">
              <p className="font-medium text-bold text-2xl text-myred">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-md text-mylight">
                <Link className="hover:text-myred" href="/About">About</Link>
                <Link className="hover:text-myred" href="/Faq">FAQ</Link>
                <Link className="hover:text-myred" href="/Media">Media</Link>
                <Link className="hover:text-myred" href="/Blog">Blogs</Link>
              </nav>
            </div>

            {/* Services Section */}
            <div className="flex flex-col my-4">
              <p className="font-medium text-bold text-2xl text-myred">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-md text-mylight">
                <Link className="hover:text-myred" href="/services/transportation">Transportation</Link>
                <Link className="hover:text-myred" href="/services/warehousing">Warehousing</Link>
                <Link className="hover:text-myred" href="/services/freight-forwarding">Freight Forwarding</Link>
                <Link className="hover:text-myred" href="/services/inventory-management">Inventory Management</Link>
                <Link className="hover:text-myred" href="/services/supply-chain-consulting">Supply Chain Consulting</Link>
                <Link className="hover:text-myred" href="/services/aeo-consultants">AEO Consultants</Link>
              </nav>
            </div>

            {/* Legal Section */}
            <div className="flex flex-col my-4">
              <p className="font-medium text-bold text-2xl text-myred">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-md text-mylight">
                <Link className="hover:text-myred" href="/Privacy">Privacy Policy</Link>
                <Link className="hover:text-myred" href="/Terms">Terms & Conditions</Link>
                <Link className="hover:text-myred" href="/Accessibility">Accessibility</Link>
              </nav>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="px-8 py-3 mt-10 flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-center shadow-2xl bg-myblue shadow-white">
        <div className="text-[2vh] md:text-sm text-bold my-4 mx-2 text-gray-300">
          © 2024 <span className="text-myred">ICONIKQ</span>. All Rights Reserved.
        </div>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
