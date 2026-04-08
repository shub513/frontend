import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import footer from "../../assets/footer.png";

const footerSections = [
  {
    title: "ABOUT",
    items: [
      { label: "About Us", path: "/about" },
      { label: "Our Team", path: "/team" },
      { label: "Our Impact", path: "/impact" },
    ],
  },
  {
    title: "APPROACH",
    items: [{ label: "Incubation", path: "/incubation-application/login" }],
  },
  {
    title: "EXPERTISE",
    items: [
      { label: "Agriculture", path: "/" },
      { label: "Healthcare", path: "/" },
      { label: "Climate Action", path: "/climate", key: "climate" },
      { label: "Gender Inclusion", path: "/" },
    ],
  },
  {
    title: "PROGRAMS",
    items: [
      { label: "Current Programs", path: "/programs" },
      { label: "Past Programs", path: "/programs" },
      { label: "Ecosystem Development", path: "/programs" },
    ],
  },
  {
    title: "PORTFOLIO",
    items: [{ label: "Our Portfolio", path: "/" }],
  },
  {
    title: "RESOURCES",
    items: [
      { label: "Reports", path: "/" },
      { label: "Blog", path: "/" },
      { label: "Videos", path: "/" },
      { label: "News", path: "/" },
      { label: "Archives", path: "/" },
    ],
  },
  {
    title: "CONTACT",
    items: [
      { label: "Contact Us", path: "/contact" },
      { label: "Mentor With Us", path: "/" },
      { label: "Partner With Us", path: "/" },
      { label: "Careers", path: "/" },
    ],
  },
];

const Footer = () => {
  const location = useLocation();
  const isClimatePage = location.pathname === "/climate";
  const isHealthPage= location.pathname === "/health";
  const isclimateAgriPage= location.pathname === "/agriculture";
  const isLivelihoodPage= location.pathname === "/livelihood";
  const isImpactPage= location.pathname === "/Impact";

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative">
      {isClimatePage ? (
        <div className="relative h-28 overflow-hidden bg-[#f8f4e6] md:h-32">
          <div className="absolute -bottom-3 left-1/2 h-20 w-[145%] -translate-x-1/2 rounded-[50%] bg-[#18a9d8] md:h-24" />
          <div className="absolute -bottom-7 left-1/2 h-20 w-[142%] -translate-x-1/2 rounded-[50%] bg-[#1E1E1E] md:h-24" />
        </div>
      ) : isHealthPage ? (
        <div className="relative h-28 overflow-hidden bg-[#f8f4e6] md:h-32">
          <div className="absolute -bottom-3 left-1/2 h-20 w-[145%] -translate-x-1/2 rounded-[50%] bg-[#EC784C] md:h-24" />
          <div className="absolute -bottom-7 left-1/2 h-20 w-[142%] -translate-x-1/2 rounded-[50%] bg-[#1E1E1E] md:h-24" />
        </div>
      ) :
       isLivelihoodPage ? (
        <div className="relative h-28 overflow-hidden bg-[#f8f4e6] md:h-32">
          <div className="absolute -bottom-3 left-1/2 h-20 w-[145%] -translate-x-1/2 rounded-[100%] bg-[#AF4AFE] md:h-24" />
          <div className="absolute -bottom-7 left-1/2 h-20 w-[142%] -translate-x-1/2 rounded-[100%] bg-[#1E1E1E] md:h-24" />
        </div>
      )
      :
       isclimateAgriPage ? (
        <div className="relative h-28 overflow-hidden bg-[#f8f4e6] md:h-32">
          <div className="absolute -bottom-3 left-1/2 h-20 w-[145%] -translate-x-1/2 rounded-[100%] bg-[#FFC800] md:h-24" />
          <div className="absolute -bottom-7 left-1/2 h-20 w-[142%] -translate-x-1/2 rounded-[100%] bg-[#1E1E1E] md:h-24" />
        </div>
      )
      :
       isImpactPage ? (
        <div className="relative h-28 overflow-hidden bg-[#FFFF] md:h-32">
          <div className="absolute -bottom-3 left-1/2 h-20 w-[145%] -translate-x-1/2 rounded-[100%] bg-[#23C550] md:h-24" />
          <div className="absolute -bottom-7 left-1/2 h-20 w-[142%] -translate-x-1/2 rounded-[100%] bg-[#1E1E1E] md:h-24" />
        </div>
      )
       :
       (
        <img src={footer} alt="" />
      )}

      <div className="relative bg-[#1E1E1E] font-satoshi px-4 py-8 pb-12 text-gray-400 sm:px-8 md:px-10 md:py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {footerSections.map((section) => (
            <div key={section.title} className="min-w-0">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-white sm:text-base">
                {section.title}
              </p>

              <ul className="space-y-2 text-xs leading-6 sm:text-sm">
                {section.items.map((item) => {
                  return (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        className="block transition-colors duration-300 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleBackToTop}
          aria-label="Back to top"
          className="absolute bottom-8 right-5 inline-flex h-8 w-8 items-center justify-center text-white md:hidden"
        >
          <FaChevronUp className="text-xl" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
