"use client";
import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { handleScroll } from "../utility/utility";
import Logo from "@/public/Logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  // section in the page
  const sections = ["home", "services", "portfolio", "testimonial", "contact"];

  const handleClick = (section) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      handleScroll(section);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = section;
            break;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav className="bg-[#212428] border-b border-gray-700 px-6 md:px-42 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 md:mr-70">
        <Image src={Logo} alt="Logo" width={38} height={38} />
        <h1 className="text-[#FFFFFF] font-semibold text-lg">
          Frontend Solutions
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-[#FFFFFFB2]">
        {sections.map((item) => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            className={`relative cursor-pointer capitalize transition ${
              active === item
                ? "text-[#FFFFFF] font-semibold"
                : "hover:text-white"
            }`}
          >
            {item}
            {active === item && (
              <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-[#EE4036]"></span>
            )}
          </li>
        ))}
      </ul>

      {/* Buttons (Buy Now + Mobile Menu) */}
      <div className="flex items-center gap-3">
        {/* Buy Now Button */}
        <button
          onClick={() => handleClick("contact")}
          className="hidden md:flex items-center gap-2 bg-[#1A1C20] shadow-md shadow-[#63636352] px-4 py-2 rounded-md font-medium hover:scale-105 transition text-[#EE4036]"
        >
          <ShoppingCart size={16} />
          Buy Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#212428] border-t border-gray-700 md:hidden overflow-hidden transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 max-h-96"
            : "opacity-0 -translate-y-4 max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 text-[#FFFFFFB2]">
          {sections.map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={`cursor-pointer capitalize ${
                active === item
                  ? "text-[#FFFFFF] font-semibold"
                  : "hover:text-white"
              }`}
            >
              {item}
            </li>
          ))}
          <button
            onClick={() => handleClick("contact")}
            className={`flex items-center gap-2 bg-[#212428] shadow-md shadow-[#63636352] px-4 py-2 rounded-md font-medium hover:scale-105 transition duration-300 ${
              active === "contact" ? "text-[#EE4036]" : "text-[#EE4036]"
            }`}
          >
            <ShoppingCart size={16} />
            Buy Now
          </button>
        </ul>
      </div>
    </nav>
  );
}
