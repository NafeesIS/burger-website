"use client";

import Image from "next/image";
import React, { useState } from "react";
import RiCloseLine from "../../public/close-line.svg";
import RiMoonLine from "../../public/moon-line.svg";
import RiMenuLine from "../../public/menu-2-line.svg";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primaryColor w-full fixed top-0 left-0 z-50">
      <nav className="container relative h-14 flex justify-between items-center">
        <a href="#" className="text-2xl uppercase font-oswald">
          Bur<span className="text-secondaryColor font-oswald">ger</span>
        </a>
        <div
          className={`${
            isMenuOpen
              ? "block md:hidden absolute top-0 left-0 w-full py-14 bg-primaryColor border-b border-secondaryColor"
              : "hidden absolute top-0 left-0 w-full py-14 bg-primaryColor dark:bg-darkColor border-b border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto"
          }`}
        >
          <ul className="flex sm:flex-col md:flex-row lg:flex-row items-center justify-center text-center gap-5">
            <li>
              <a
                href="#home"
                className="hover:text-secondaryColor ease-in duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-secondaryColor ease-in duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="hover:text-secondaryColor ease-in duration-200"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondaryColor ease-in duration-200"
                href="#review"
              >
                Review
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondaryColor ease-in duration-200"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <div
            className="absolute top-[0.7rem] right-4 cursor-pointer text-2xl hover:bg-secondaryColor ease-in duration-200 md:hidden"
            onClick={toggleMenu}
          >
            <Image src={RiCloseLine} alt="closeIcon" />
          </div>
        </div>
        <div className="flex items-center gap-5 cursor-pointer">
          <Image className="ml-4 text-xl" src={RiMoonLine} alt="moonIcon" />
          <div>
            <Image
              className="text-xl sm:block md:hidden lg:hidden"
              src={RiMenuLine}
              alt="menuIcon"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
