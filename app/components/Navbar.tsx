"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/Projects" },
  { title: "Contact", link: "/Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `relative py-1 text-sm transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-accent after:transition-all after:duration-300 ${
      pathname === href
        ? "text-ink after:w-full"
        : "text-stone hover:text-ink after:w-0 hover:after:w-full"
    }`;

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-between py-6">
        <Link href="/" className="font-serif text-2xl tracking-[-0.5px] text-ink">
          Mohammad Saad<span className="text-accent">.</span>
        </Link>

        <ul className="hidden gap-8 md:flex">
          {navLinks.map((item) => (
            <li key={item.link}>
              <Link href={item.link} className={linkClass(item.link)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="btn-icon md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <ul className="card absolute inset-x-0 top-full flex flex-col gap-3 md:hidden">
          {navLinks.map((item) => (
            <li key={item.link}>
              <Link href={item.link} onClick={() => setOpen(false)} className={linkClass(item.link)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
