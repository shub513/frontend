import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const menuItems = [
  {
    name: "ABOUT",
    dropdown: [
      { label: "Who We Are", path: "/about" },
      { label: "Team", path: "/team" },
      { label: "Our Impact", path: "/Impact" },
    ],
  },
  {
    name: "APPROACH",
    dropdown: [
      { label: "Incubation", path: "/incubation" },
      { label: "Market Partnerships", path: "/partnerships" },
    ],
  },
  {
    name: "EXPERTISE",
    dropdown: [
       { label: "Climate-smart Agriculture", path: "/agriculture" },
      { label: "Healthcare", path: "/health" },
      { label: "Climate", path: "/climate" },
      { label: "livelihood", path: "/livelihood" },
    ],
  },
  {
    name: "PROGRAMS",
    dropdown: [
      { label: "Active Programs", path: "/programs" },
    ],
  },
  {
    name: "PORTFOLIO",
    dropdown: [
      { label: "Startups", path: "/portfolio" },
    ],
  },
  {
    name: "RESOURCES",
    dropdown: [
      { label: "Blogs", path: "/blogs" },
    ],
  },
  {
    name: "CONTACT US",
    dropdown: [
      { label: "Contact Page", path: "/contact" },
      { label: "Partner with us", path: "/partner" },
      { label: "Mentor with us", path: "/mentor" },
      
    ],
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-[#F4F6F2] px-4 py-4 md:px-8 md:py-4 flex items-center justify-between z-50 font-satoshi relative">
      {/* LOGO */}
      <Link to="/" aria-label="Go to homepage" className="flex items-center">
        <img src={logo} alt="logo" className="h-13 w-auto cursor-pointer lg:ml-20" />
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 lg:text-[12px] md:text-sm font-satoshi lg:ml-70">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group">
            <span className="cursor-pointer hover:text-green-400">{item.name}</span>

            <div className="absolute left-1/2 top-full z-50 mt-3 w-48 -translate-x-1/2 overflow-hidden border-t-4 border-[#25c84c] bg-white text-black shadow-[0_20px_40px_rgba(0,0,0,0.12)] opacity-0 translate-y-2  transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
              {item.dropdown.map((sub, i) => (
                <Link
                  key={i}
                  to={sub.path}
                  className="block px-5 py-3 text-[12px] uppercase tracking-[0.02em] transition-colors duration-200 hover:text-[#25c84c]"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP CTA */}
      <Link
        to="/incubation-application/login"
        className="hidden md:inline-flex items-center rounded-full bg-white px-5 py-2 text-[12px] font-medium text-black transition hover:bg-green-400 lg:mr-10"
      >
        APPLY FOR INCUBATION
      </Link>

      {/* MOBILE HAMBURGER */}
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-md border border-white/20 p-2 text-white md:hidden"
      >
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full z-40 border-t border-white/10 bg-black px-4 py-6 md:hidden">
          <div className="space-y-4">
            {menuItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  {item.name}
                </p>
                <div className="space-y-1 pl-2">
                  {item.dropdown.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      to={sub.path}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-200 transition hover:bg-white/10 hover:text-white"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              to="/incubation-application/login"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-green-400"
            >
              APPLY FOR INCUBATION
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
