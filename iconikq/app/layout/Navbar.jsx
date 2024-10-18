"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-myblue border w-full  fixed z-50  border-gray-700 px-2 sm:px-8 py-[2vh] rounded-b-[20px]   shadow-[inset_0_7px_5px_rgba(0,0,0,0.3),_0px_4px_10px_rgba(255,255,255,0.2)]  ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            <img src="/images/logo.png" alt="Logo" className="max-h-[6vh]" />
          </span>
        </Link>

        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2  text-white hover:bg-gray-700 focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className={`w-full md:block md:w-auto ${menuOpen ? '' : 'hidden'} md:flex`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
            <li>
              <Link href="/" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent  md:p-0" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/About" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent  md:p-0">About</Link>
            </li>
            <li>
              <Link href="/Services" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent  md:p-0">Services</Link>
            </li>
            <li>
              <Link href="/Faq" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent  md:p-0">FAQ</Link>
            </li>
            <li>
              <Link href="/Blog" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent  md:p-0">Blog</Link>
            </li>
            <li>
              <Link href="/Podcast" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent  md:p-0">Podcast</Link>
            </li>
            <li>
              <Link href="/Contact" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent  md:p-0">Contact</Link>
            </li>
            <li>
            <form action="" class="relative mx-auto w-max">
        <input type="search" 
              class="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-myred focus:pl-16 focus:pr-4" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-myred peer-focus:stroke-myred" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>
            </li>
          </ul>
        </div>
        


    


      </div>
    </nav>
  );
};

export default Navbar;
