"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { TiWeatherSunny } from "react-icons/ti";
import { LuMoon } from "react-icons/lu";
import { GiSoundOn } from "react-icons/gi";
import { RiMenu5Fill } from "react-icons/ri";
import { IoClose, IoReorderThreeOutline } from "react-icons/io5";

import IconWrapper from "@/my-components/iconWrapper";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* Navbar  */}
            <div className="fixed top-0 left-0 w-full z-50">

      <div className="mx-auto w-full max-w-437 px-8 lg:px-12 flex items-center justify-between pt-8">
        {/* Logo */}
        <div className="w-28 sm:w-32 md:w-40">
          <Image src="/assets/logo.svg" alt="Logo" width={118} height={22} />
        </div>

        {/* Dark mode and sound */}
        <div className="flex gap-1 items-center justify-center flex-1 max-w-xs mx-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-lg bg-gray-200 dark:bg-card w-8 h-8 rounded-full flex items-center justify-center"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <TiWeatherSunny /> : <LuMoon />}
          </button>

          <IconWrapper className="w-8 h-8">
            <GiSoundOn className="text-lg" />
          </IconWrapper>
        </div>

        {/*  menu and  icon */}
        <div className="flex items-center gap-4">
          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-xl text-primary select-none dark:text-cyan-50">
              MENU
            </span>
            <IconWrapper className="w-10 h-10">
              <RiMenu5Fill className="text-lg" />
            </IconWrapper>
          </div>

          {/* Mobile navbar */}
          <button
            className="flex lg:hidden items-center gap-2 text-primary dark:text-cyan-50 text-xl font-semibold select-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span>{isOpen ? "CLOSE" : "MENU"}</span>
            {isOpen ? (
              <IoClose className="text-3xl" aria-hidden="true" />
            ) : (
              <IoReorderThreeOutline className="text-3xl" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile dropdown  */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="lg:hidden mx-auto w-full max-w-437 px-8 lg:px-12 bg-card py-4 border-t border-gray-700"
        >
          <div className="flex flex-col space-y-4 text-primary dark:text-cyan-50 text-lg font-medium">
            <Link
              href="/#work"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent"
            >
              Work
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent"
            >
              About
            </Link>
            <Link
              href="/#services"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent"
            >
              Services
            </Link>
            <Link
              href="/#team"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent"
            >
              Team
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
