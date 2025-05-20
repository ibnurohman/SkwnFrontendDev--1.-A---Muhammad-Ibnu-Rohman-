import { useState } from "react";
import IconArrowDown from "./Icon/IconArrowDown";
import IconLogo from "./Icon/IconLogo";
import IconShop from "./Icon/IconShop";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  border-gray-200 w-full z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <IconLogo className="w-8 h-8" />
            <span className="text-[#2F241F] font-semibold text-2xl">Dekoor</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#" className="text-sm text-[#2D2D2D] hover:text-gray-700">About us</a>
            <button className="flex items-center text-sm text-[#2D2D2D] hover:text-gray-700">
              Furniture
              <IconArrowDown width="12" height="7" className="ml-1" />
            </button>
            <a href="#" className="text-sm text-[#2D2D2D] hover:text-gray-700">Partnerships</a>
            <a href="#" className="text-sm text-[#2D2D2D] hover:text-gray-700">Contact</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="bg-[#E5F0B6] text-sm text-[#2D2D2D] font-medium px-4 py-2 rounded-md">
              Sign Up
            </button>
            <button className="bg-[#553B33] w-9 h-9 flex items-center justify-center rounded-md">
              <IconShop width="16" height="20" className="text-white" />
            </button>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2D2D2D] mr-2 rounded focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - visible only when open */}
        <div className={`transition-all duration-200 ease-in-out ${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="flex flex-col space-y-4 mt-4 font-medium text-[#2D2D2D]">
            <a href="#" className="block">About us</a>
            <button className="flex items-center">
              Furniture
              <IconArrowDown width="12" height="7" className="ml-1" />
            </button>
            <a href="#" className="block">Partnerships</a>
            <a href="#" className="block">Contact</a>
            <div className="pt-4 flex flex-col space-y-2">
              <button className="bg-[#E5F0B6] text-sm text-[#2D2D2D] font-medium px-4 py-2 rounded-md w-full">
                Sign Up
              </button>
              <button className="bg-[#553B33] w-10 h-10 flex items-center justify-center rounded-md self-start">
                <IconShop width="16" height="20" className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
