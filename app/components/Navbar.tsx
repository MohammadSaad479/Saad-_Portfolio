"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ScrambleText } from "@/components/scramble-text";
import GhostIcon from "@/components/ui/ghost-icon";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Projects", link: "/Projects" },
    { title: "Contact", link: "/Contact" },
  ];

  return (
    <nav className=" w-full bg-neutral-950  z-50">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-0">

        {/* Logo */}
        <div className="flex gap-1 items-center">
          <GhostIcon className="size-5 text-white" />
          <h1 className="text-white">Mohammad_Saad</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="relative hover:text-gray-400 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur border-t border-white/10">
          <ul className="flex flex-col gap-4 px-6 py-4 text-white">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="block w-full hover:text-gray-400 transition"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

