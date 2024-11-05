"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSessionStore } from '../store/sessionStore';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logout = useSessionStore((state) => state.logout);
  const router = useRouter();

  // Check if user is authenticated
  const isAdmin = useSessionStore((state) => state.isAuthenticated);
  console.log('Is Authenticated:', isAdmin); // Debugging line

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logout();
    router.push('/Admin/Login');
  };

  const commonLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Services", label: "Services" },
    { href: "/Faq", label: "FAQ" },
    { href: "/Blog", label: "Blog" },
    { href: "/Media", label: "Media" },
    { href: "/Contact", label: "Contact" },
  ];
  
  const adminLinks = [
    { href: "/Admin", label: "Dashboard" },
    { href: "/Admin/faq", label: "FAQ" },
    { href: "/Admin/Services", label: "Services" },
    { href: "/Admin/Contacts", label: "Contacts" },
    { href: "/Admin/Blog", label: "Blog" },
    { href: "/Admin/Media", label: "Media" },
    { href: "/Admin/Gallery", label: "Gallery" },
    { href: "/Admin/Certificates", label: "Certificates" },
    { href: "/Admin/Achievements", label: "Achievements" },
  ];

  const renderLinks = (links) => (
    links.map(link => (
      <li key={link.href}>
        <Link href={link.href} className="block py-2 px-4 text-white hover:text-myred rounded md:bg-transparent md:px-2">
          {link.label}
        </Link>
      </li>
    ))
  );

  return (
    <nav className="bg-myblue border w-full fixed z-50 border-gray-700 px-2 sm:px-8 py-[2vh] rounded-b-[20px] shadow-[inset_0_7px_5px_rgba(0,0,0,0.3),_0px_4px_10px_rgba(255,255,255,0.2)]">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex flex-col items-center">
          <Image
            width={500}
            height={500}
            layout="responsive"
            priority
            quality={75}
            src="/images/logo.png"
            alt="Logo"
            className="max-h-[3vh] md:max-h-[4vh] lg:max-h-[6vh]"
          />
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
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center list-none">
            {renderLinks(isAdmin ? [...adminLinks] : commonLinks)}
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
        <div className="hidden sm:flex items-center text-sm lg:text-xl space-x-7 md:space-x-4 sm:space-x-2 list-none">
          {renderLinks(isAdmin ? [...adminLinks] : commonLinks)}
          {isAdmin && (
            <button onClick={handleLogout} className="text-red-500">
              Logout
            </button>
          )}
        </div>

        {/* Debugging information for authentication status */}
        {!isAdmin && <p className="text-red-500">User is not authenticated!</p>}
      </div>
    </nav>
  );
};

export default Navbar;
