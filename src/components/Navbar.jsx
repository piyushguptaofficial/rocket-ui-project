import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import icon from "../assets/icon.png";
import Button from "./Button";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = ["about", "course", "contact"];

  const toggleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false); // hide navbar
      } else {
        setShowNav(true); // show navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const NavLinks = ({ isMobile = false, onClick }) => (
    <ul
      className={`${
        isMobile
          ? "space-y-6 text-2xl font-medium text-[var(--color-text)]"
          : "hidden md:flex gap-6"
      }`}
    >
      {links.map((link) => (
        <li key={link}>
          <Link
            to={link}
            smooth
            spy={true}
            duration={500}
            offset={-70}
            onClick={onClick}
            activeClass="active-nav"
            className="capitalize cursor-pointer transition-all border-b-2 border-transparent hover:border-[var(--color-accent-from)]"
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300
      ${showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      backdrop-blur-md border-b border-white shadow-lg bg-[var(--glass-bg)]`}
    >
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="home" smooth duration={500} offset={-70}>
          <img
            src={icon}
            alt="Logo"
            className="h-16 cursor-pointer transition-all duration-300"
          />
        </Link>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleNav}>
            {navOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </button>
        </div>

        {/* Desktop nav */}
        <NavLinks />

        <Button
          button_text="Apply Now"
          className="px-4 py-2 transition-all duration-300
            shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
            dark:shadow hover:dark:shadow-[0_10px_30px_rgba(56,189,248,0.4)]
            hover:scale-105"
        />
      </div>

      {/* Mobile dropdown */}
      {navOpen && (
        <div className="md:hidden w-full bg-[var(--color-bg)] backdrop-blur-lg border-b border-white/10 shadow-lg transition-all duration-300">
          <div className="p-6 flex flex-col items-center">
            <NavLinks isMobile={true} onClick={() => setNavOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;