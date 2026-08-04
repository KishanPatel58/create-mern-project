import { MenuIcon, XIcon, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GenieEffect from "../../components/uilayouts/genie-effect";

export default function Navbar({ onSignUpClick, signUpBtnRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 flex w-full items-center justify-between bg-white/50 px-4 py-3.5 backdrop-blur-md md:px-16 lg:px-24">
        <Link to="/">
          <h1 className="text-2xl font-bold italic">MERN</h1>
        </Link>

        <div className="hidden items-center space-x-7 text-gray-700 md:flex">
          {links.map((link) =>
            link.subLinks ? (
              // ... keep your existing dropdown code ...
              <div key={link.name}>...</div>
            ) : (
              <Link key={link.name} to={link.href} className="transition hover:text-black">
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Desktop Sign Up */}
        <button
          ref={signUpBtnRef}
          onClick={onSignUpClick}
          className="hidden rounded-full btn px-8 py-2.5 font-medium text-white transition hover:opacity-90 md:inline-block"
        >
          Sign Up
        </button>

        <button onClick={() => setIsOpen(true)} className="transition active:scale-90 md:hidden">
          <MenuIcon className="size-6.5" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ... your existing mobile links ... */}

        <button
          className="rounded-full btn px-8 py-2.5 font-medium text-white transition hover:opacity-90"
          onClick={() => {
            setIsOpen(false);
            onSignUpClick();
          }}
        >
          Sign Up
        </button>

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-md btn p-2 text-white ring-white active:ring-2"
        >
          <XIcon />
        </button>
      </div>
    </>
  );
}