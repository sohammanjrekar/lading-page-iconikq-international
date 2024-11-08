// Button.js
import Link from "next/link";

const Button = ({ text, href }) => {
  return (
    <Link href={href || "#"} passHref>
      <button className="mx-2 shadow-inner shadow-[#e77979] group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-center cursor-pointer h-10 border-2 border-solid py-0 px-6 rounded-lg overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-myred text-white border-myred hover:text-myred focus:text-myred">
        <strong className="font-medium">{text}</strong>

        <span className="absolute bg-white bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]"></span>
      </button>
    </Link>
  );
};

export default Button;
