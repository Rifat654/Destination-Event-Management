import { HiMiniBars2 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { navbarLinks } from "../Data/data.js";
import { useState } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="px-4 pt-5 absolute top-0 left-0 right-0 z-50 mx-auto max-w-7xl md:px-8">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-md md:px-8">

        {/* Logo */}
        <div className="flex flex-col items-center rounded-2xl px-3 text-center bg-white/10  backdrop-blur-md">
          <h1 className="font-caveat text-sm text-orange-300 md:text-base">
            <span className="font-bold">Destination</span>
            <br />
            Event Management
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="cursor-pointer font-open-sans text-white transition duration-300 hover:text-orange-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-2xl font-bold text-white transition-transform duration-300 md:hidden"
          aria-label="Toggle menu"
        >

          {open ? <IoClose /> : <HiMiniBars2 />}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`
            
            absolute left-0 right-0 top-full z-50 mt-2
            flex flex-col items-center gap-6 py-3
            rounded-xl border border-white/30
           bg-black/65 text-left shadow-lg backdrop-blur-md
            transition-all duration-500 ease-in-out
            md:hidden
            ${open
              ? "visible translate-x-0 opacity-100"
              : "invisible -translate-x-4 opacity-0"
            }
          `}
        >
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="cursor-pointer font-open-sans text-white transition duration-300 hover:text-orange-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;