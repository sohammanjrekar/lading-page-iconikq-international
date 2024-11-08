"use client"
// components/SocialButtons.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faWhatsapp, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Link from "next/link"; // Import Next.js Link
const SocialButtons = () => {
  return (
    <div className="flex space-x-4">
      {/* YouTube Button */}
      <Tippy content="YouTube" animation="fade">
        <Link href="https://www.youtube.com/@ICONIKQINTERNATIONAL">
        <button className="bg-white border-2 border-red-500 text-red-500 w-10 h-10 rounded-full transition-transform transform hover:-translate-y-3 hover:bg-red-500 hover:text-white duration-500">
          <FontAwesomeIcon icon={faYoutube} size="x" />
        </button>
        </Link>
      </Tippy>

    

      {/* Twitter Button */}
      <Tippy content="Twitter" animation="fade">
        <button className="bg-white border-2 border-blue-400 text-blue-400 w-10 h-10 rounded-full transition-transform transform hover:-translate-y-3 hover:bg-blue-400 hover:text-white duration-500">
          <FontAwesomeIcon icon={faTwitter} size="x" />
        </button>
      </Tippy>

      {/* LinkedIn Button */}
      <Tippy content="LinkedIn" animation="fade">
        <button className="bg-white border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full transition-transform transform hover:-translate-y-3 hover:bg-blue-500 hover:text-white duration-500">
          <FontAwesomeIcon icon={faLinkedinIn} size="x" />
        </button>
      </Tippy>
    </div>
  );
};

export default SocialButtons;
