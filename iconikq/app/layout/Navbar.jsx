"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-myblue border w-full fixed z-50 border-gray-700 px-2 sm:px-8 py-[2vh] rounded-b-[20px] shadow-[inset_0_7px_5px_rgba(0,0,0,0.3),_0px_4px_10px_rgba(255,255,255,0.2)]">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            <Image width={500} height={500} layout="responsive" src="/images/logo.png" alt="Logo" className="max-h-[6vh]" />
          </span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg focus:outline-none focus:ring-2 text-white hover:bg-gray-700 focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`w-full sm:hidden ${menuOpen ? '' : 'hidden'}`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
            <li>
              <Link href="/" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/About" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent md:p-0">About</Link>
            </li>
            <li>
              <Link href="/Services" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent md:p-0">Services</Link>
            </li>
            <li>
              <Link href="/Faq" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent md:p-0">FAQ</Link>
            </li>
            <li>
              <Link href="/Blog" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent md:p-0">Blog</Link>
            </li>
            <li>
              <Link href="/Podcast" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent md:p-0">Podcast</Link>
            </li>
            <li>
              <Link href="/Contact" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded md:bg-transparent md:p-0">Contact</Link>
            </li>
            {/* Search bar */}
            <li>
              <form action="" className="relative mx-auto w-max">
                <input
                  type="search"
                  className="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-myred focus:pl-16 focus:pr-4"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-myred peer-focus:stroke-myred" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </form>
            </li>
          </ul>
        </div>

        {/* Desktop Menu (visible on sm and larger screens) */}
        <div className="hidden sm:!flex sm:text-[2vh]  items-center text-xl space-x-8 sm:space-x-4">
          <Link href="/" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded">Home</Link>
          <Link href="/About" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded">About</Link>
          <Link href="/Services" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded">Services</Link>
          <Link href="/Faq" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded">FAQ</Link>
          <Link href="/Blog" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded">Blog</Link>
          <Link href="/Podcast" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded">Podcast</Link>
          <Link href="/Contact" className="block py-2 pr-4 pl-3 text-white hover:text-myred rounded">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
