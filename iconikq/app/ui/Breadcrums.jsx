import React from "react";

const Breadcrums = () => {
  return (
    <>
      {/* component */}
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <nav className="text-sm sm:text-base bg-white p-4 md:p-6 lg:p-6 rounded-md shadow-lg">
          <ol className="list-none p-0 inline-flex space-x-2">
            <li className="flex items-center">
              <svg
                onclick="window.location.href='/';"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                className="cursor-pointer hover:fill-blue-500 transition-colors duration-300"
                fill="#4b5563"
              >
                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>{" "}
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
              >
                Tools
              </a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-800">Qr Code Generator</span>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Breadcrums;
