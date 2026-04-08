import React, { useEffect, useState } from "react";

import healthBg from "../assets/healthbg.png";
import vectorBg from "../assets/Vector 26.png";
import icon1 from "../assets/h1.png";
import icon2 from "../assets/h2.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCarSide, FaHandshake, FaSeedling } from "react-icons/fa";
import { FiAward, FiFileText, FiRefreshCcw } from "react-icons/fi";
import curve from "../assets/Vector 28.png"; // your curve bg


import illustration from "../assets/illustration.png";
import programImg from "../assets/program.png";
import saafImg from "../assets/saaf.png";
import vector30 from "../assets/Vector 30.png";


const donorLogos = [
    { name: "StartupTN" },
    { name: "The Lemelson Foundation" },
    { name: "Titan Company" },
    { name: "Habitat for Humanity" },
    { name: "AFD" },
];

const stats = [
  { value: 21, label: "Startups supported" },
  { value: 157924, label: "Lives impacted" },
  { value: 274, suffix: "M", label: "Investments raised (INR)" },
  { value: 260, label: "Direct jobs" },
  { value: 11, label: "Women-led enterprises" },
];

const howWeWork = [
    {
        number: "01",
        text: "We facilitate partnerships\nwith rural distributors,\nSRLMs, FPOs",
        icon: FaHandshake,
    },
    {
        number: "02",
        text: "We assist in quantifying\nenvironmental impact",
        icon: FiFileText,
    },
    {
        number: "03",
        text: "We enable\nenvironmental\ncertifications and\ncarbon offset\nprojects",
        icon: FiAward,
    },
     {
        number: "04",
        text: "We facilitate partnerships\nwith rural distributors,\nSRLMs, FPOs",
        icon: FaHandshake,
    },
];

const programs = [
  {
    title: "MAP-Health",
    img: illustration,
  },
  {
    title: "MAP-Health (Market Access Partnerships for Healthcare)",
    img: programImg,
  },
  {
    title: "Scaling Invention-Based Enterprises",
    img: saafImg,
  },
];
const programCards = [
    {
        image: saafImg,
        title: "SAAF Cities 2.0",
        subtitle: "Digital, circular and water-focused urban waste solutions",
    },
    {
        image: saafImg,
        title: "The Water Lab",
        subtitle: "Supporting innovations that manage water at the ground level",
    },
    {
        image: saafImg,
        title: "SAAF Cities: Shaping Waste-Free Communities",
        subtitle: "Scaling community-led circular economy pilots",
    },
];
const resourceTabs = {
    Reports: [
        {
            image: saafImg,
            title: "SAAF Cities: Scaling Waste Management Solution in India",
        },
        {
            image: saafImg,
            title: "Impact Report 2025",
        },
        {
            image: saafImg,
            title: "Impact Report 2023",
        },
        {
            image: saafImg,
            title: "Impact Report 2024",
        },
    ],
    Videos: [
        {
            image: illustration,
            title: "Communities Building Climate Resilience",
        },
        {
            image: illustration,
            title: "Innovations Driving Climate Action",
        },
        {
            image: illustration,
            title: "Stories From the Field",
        },
        {
            image: illustration,
            title: "Inside Villgro Climate Programs",
        },
    ],
    News: [
        {
            image: saafImg,
            title: "Climate Startups Shaping Better Businesses",
        },
        {
            image: saafImg,
            title: "Waste Management Innovation Expands Across Cities",
        },
        {
            image: saafImg,
            title: "Grassroots Climate Solutions Reach New Communities",
        },
        {
            image: saafImg,
            title: "Impact Stories From Villgro Climate Portfolio",
        },
    ],
};

const fadeSlide = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.16,
            duration: 0.7,
            ease: "easeOut",
        },
    }),
};

const Counter = ({ end, duration = 2000, suffix = "", start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const value = Math.min((progress / duration) * end, end);
      setCount(value);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return (
    <span>
      {Number.isInteger(end)
        ? Math.floor(count).toLocaleString("en-IN")
        : count.toFixed(1)}
      {suffix}
    </span>
  );
};

const Health = () => {
  const [activeTab, setActiveTab] = useState("Reports");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [activeWorkCard, setActiveWorkCard] = useState(null);
  const [activeProgramCard, setActiveProgramCard] = useState(null);
  const [activeDonorCard, setActiveDonorCard] = useState(null);
  const [activeResourceCard, setActiveResourceCard] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const updateViewportFlag = () => setIsMobileView(window.innerWidth < 768);
    updateViewportFlag();
    window.addEventListener("resize", updateViewportFlag);
    return () => window.removeEventListener("resize", updateViewportFlag);
  }, []);

  useEffect(() => {
    if (!isMobileView) {
      setActiveWorkCard(null);
      setActiveProgramCard(null);
      setActiveDonorCard(null);
      setActiveResourceCard(null);
    }
  }, [isMobileView]);

  useEffect(() => {
    setActiveResourceCard(null);
  }, [activeTab]);

  const handleDownload = (assetUrl, title) => {
    const safeTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    const cleanedUrl = assetUrl.split("?")[0];
    const extension = cleanedUrl.includes(".")
      ? cleanedUrl.split(".").pop()
      : "png";
    const link = document.createElement("a");
    link.href = assetUrl;
    link.download = `${safeTitle || "file"}.${extension || "png"}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const { ref: workRef, inView: workInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: resourcesRef, inView: resourcesInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px]"
          style={{ backgroundImage: `url(${healthBg})` }}
        >

          
          <div className="relative h-full flex">
            <div className="mx-0 w-full px-4 py-12 sm:mx-[25px] sm:px-6 sm:py-20 md:px-28 md:py-24 lg:px-36">
              <div className="grid gap-2 lg:grid-cols-2">
                <div className="max-w-3xl text-white mt-10 sm:mt-16 md:mt-10">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] mb-4 leading-tight font-bold text-white mb-6">
                    Healthcare
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black/60 leading-relaxed">
                    Advancing medical innovations and driving <br className="hidden sm:block" /> transformation to improve lives
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>


         {/* Stats Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[35px] font-bold text-[#E86A39] mb-3">
                  <Counter end={item.value} suffix={item.suffix || ""} start={true} />
                </p>
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative overflow-hidden py-12 sm:py-14 md:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${vectorBg})` }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 animate-fade">
              What we do?
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-[20px] text-gray-700 leading-relaxed">
              We work with social entrepreneurs creating innovations that drive change at the community level by
            </p>
          </div>
          <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2">
            <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6">
              <div className="flex flex-shrink-0 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-[#E86A39] text-white shadow-lg">
                <img src={icon1} alt="Diagnostics icon" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              </div>
              <p className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed animate-fade">
                Building diagnostics and screening solutions for early identification of infectious & non-communicable diseases.
              </p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 justify-end">
              <div className="flex flex-shrink-0 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-[#E86A39] text-white shadow-lg">
                <img src={icon2} alt="Women's health icon" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              </div>
              <p className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed animate-fade">
                Creating a spectrum of solutions addressing women's health.
              </p>
              
            </div>
          </div>
        </div>
      </section>


      <section ref={workRef} className="relative overflow-hidden py-16 sm:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${vectorBg})` }}
        />
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
          <motion.h2
            variants={fadeSlide}
            initial="hidden"
            animate={workInView ? "visible" : "hidden"}
            custom={0}
            className="text-center font-boska text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold leading-none text-[#2a2420] animate-fade"
          >
            Here&apos;s how we work
          </motion.h2>
      
                          <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                              {howWeWork.map((item, i) => {
                                  const Icon = item.icon;
                                  const isActiveMobileCard = isMobileView && activeWorkCard === i;
      
                                  return (
                                      <motion.article
                                          key={item.number}
                                          variants={fadeSlide}
                                          initial="hidden"
                                          animate={workInView ? "visible" : "hidden"}
                                          custom={i + 1}
                                          onClick={() => {
                                            if (!isMobileView) return;
                                            setActiveWorkCard((prev) => (prev === i ? null : i));
                                          }}
                                          className={`group relative w-full max-w-sm h-[280px] sm:h-[300px] md:h-[305px] overflow-hidden rounded-[30px] border px-4 sm:px-6 md:px-9 pb-6 sm:pb-8 pt-4 sm:pt-5 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_22px_44px_rgba(24,34,44,0.18)] max-md:cursor-pointer ${
                                              item.featured
                                                  ? "border-[#1ca9cf] bg-black text-black "
                                                  : isActiveMobileCard
                                                  ? "-translate-y-2 border-[#1ca9cf] bg-[#EC784C] text-white shadow-[0_22px_44px_rgba(24,34,44,0.18)]"
                                                  : "border-[#ece7db] bg-white text-[#111111] shadow-[0_14px_34px_rgba(18,28,45,0.14)] hover:border-[#1ca9cf] hover:bg-[#EC784C] hover:text-white"
                                          }`}
                                      >
                                          <div className="flex h-full flex-col">
                                              <span
                                                  className={`font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-none tracking-[-0.06em] transition-colors duration-500 ${
                                                      item.featured
                                                          ? "text-white/95"
                                                          : isActiveMobileCard
                                                          ? "text-white/95"
                                                          : "text-[#d8d8d8] group-hover:text-white/95"
                                                  }`}
                                              >
                                                  {item.number}
                                              </span>
      
                                              <p
                                                  className={`mt-8 sm:mt-10 whitespace-pre-line font-sans text-sm sm:text-base md:text-lg lg:text-[22px] leading-[1.25] transition-colors duration-500 ${
                                                      item.featured
                                                          ? "text-white"
                                                          : isActiveMobileCard
                                                          ? "text-white"
                                                          : "text-[#121212] group-hover:text-white"
                                                  }`}
                                              >
                                                  {item.text}
                                              </p>
      
                                              <div className="mt-auto flex justify-end">
                                                  <div
                                                      className={`flex h-12 w-12 sm:h-16 sm:w-16 md:h-18 md:w-18 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-100 group-hover:rotate-3 ${
                                                          item.featured
                                                              ? "bg-[#f3eadf] text-[#2f2f2f]"
                                                              : isActiveMobileCard
                                                              ? "bg-white text-[#1ca9cf]"
                                                              : "bg-[#f3eadf] text-[#4a4a4a] group-hover:bg-white group-hover:text-[#1ca9cf]"
                                                      }`}
                                                  >
                                                      <Icon className="text-lg sm:text-xl md:text-2xl lg:text-[24px]" />
                                                  </div>
                                              </div>
                                          </div>
                                      </motion.article>
                                  );
                              })}
                          </div>
                      </div>
                  </section>

               
      
     

       <div className="bg-[#fbf7e7] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:pb-32">
                      <div className="mx-auto max-w-7xl">
                          <motion.h2
                              variants={fadeSlide}
                              initial="hidden"
                              animate={workInView ? "visible" : "hidden"}
                              custom={0}
                              className="text-center font-boska text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold leading-none text-[#2a2420]"
                          >
                              Our programs that drive positive change
                          </motion.h2>
      
                          <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                              {programCards.map((card) => (
                                  <article
                                      key={card.title}
                                      className="group overflow-hidden rounded-[32px]  bg-white text-[#1d1d1d] transition-all duration-500 hover:border-transparent hover:bg-[#EC784C] hover:text-white"
                                  >
                                      <div className="overflow-hidden bg-white">
                                          <img
                                              src={card.image}
                                              alt={card.title}
                                              className="h-[220px] w-full object-cover  "
                                          />
                                      </div>
      
                                      <div className="space-y-4 px-4 sm:px-6 py-6 sm:py-7 transition-colors duration-500 group-hover:bg-[#EC784C]">
                                          <h3 className="text-base sm:text-lg md:text-[18px] font-normal leading-[1.3] text-[#8D8F92] transition-colors duration-500 group-hover:text-white">
                                              {card.title}
                                          </h3>
                                          
                                          <div className="pt-3">
                                              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-500 group-hover:text-white">
                                                  Explore →
                                              </span>
                                          </div>
                                      </div>
                                  </article>
                              ))}
                          </div>
      
                          <div className="mt-12 flex justify-center">
                             
      
      
                               <button
                                  type="button"
                                  className="rounded-full bg-[#ebe0b8] px-6 py-3 text-base text-[#1e1e1e] shadow-[0_8px_18px_rgba(60,52,30,0.08)] transition-all duration-300 hover:bg-[#EC784C] hover:text-white sm:px-8 sm:py-4 sm:text-lg md:px-10 md:text-[16px] lg:px-12"
                              >
                                  View All →
                              </button>
                          </div>
                      </div>
                  </div>
    

    <div className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:pb-32">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-center font-boska text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold leading-none text-[#2a2420]">
                        Our Donors
                    </h2>

                    <div className="mt-12 sm:mt-16 grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {donorLogos.map((donor) => (
                            <div
                                key={donor.name}
                                className="flex h-32 w-full items-center justify-center rounded-[28px] border border-[#ece7db] bg-white px-4 py-6 text-center shadow-[0_10px_30px_rgba(15,20,32,0.04)] transition-all duration-300 hover:bg-[#EC784C] hover:text-white sm:h-[140px] sm:px-6 md:h-[150px]"
                            >
                                <span className="text-base sm:text-lg font-semibold leading-none">
                                    {donor.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 flex justify-center">
                        <button
                            type="button"
                            className="rounded-full bg-[#ebe0b8] px-6 py-3 text-sm font-semibold text-[#1e1e1e] shadow-[0_12px_28px_rgba(60,52,30,0.12)] transition-all duration-300 hover:bg-[#EC784C] hover:text-white sm:px-8 sm:py-4 sm:text-base md:px-10 md:text-[16px]"
                        >
                            View All
                        </button>
                    </div>
                </div>
            </div>


            <div
                            ref={resourcesRef}
                            className="overflow-hidden rounded-t-[40px] px-4 py-12 sm:rounded-t-[60px] sm:px-6 sm:py-16 md:rounded-t-[70px] md:px-8 md:py-20 lg:rounded-t-[80px] lg:px-12 lg:pb-24 lg:pt-20 xl:rounded-t-[90px] xl:px-50"
                            style={{
                                backgroundImage: `url(${vector30})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="mx-auto ]">
                                <motion.div
                                    variants={fadeSlide}
                                    initial="hidden"
                                    animate={resourcesInView ? "visible" : "hidden"}
                                    className="mb-14 flex flex-wrap items-center justify-center gap-4 rounded-full  p-2 md:gap-6"
                                >
                                    {Object.keys(resourceTabs).map((tab) => (
                                        <button
                                            key={tab}
                                            type="button"
                                            onClick={() => setActiveTab(tab)}
                                            onMouseEnter={() => setHoveredTab(tab)}
                                            onMouseLeave={() => setHoveredTab(null)}
                                            className={`rounded-[20px] px-4 py-2 text-lg transition-all duration-300 sm:px-6 sm:py-3 sm:text-xl md:min-w-[120px] md:text-[20px] lg:min-w-[140px] ${
                                                activeTab === tab
                                                    ? " text-[#1c1c1c] font-semibold shadow-[0_16px_34px_rgba(36,31,24,0.16)]"
                                                    : "bg-transparent text-[#4a4a4a] font-medium  hover:text-[#1c1c1c]"
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </motion.div>
            
                                <div className="grid justify-items-center gap-6 sm:gap-x-8 sm:gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:grid-cols-3 xl:grid-cols-4">
                                    {resourceTabs[activeTab].map((item, index) => (
                                        <motion.article
                                            key={`${activeTab}-${item.title}`}
                                            variants={fadeSlide}
                                            initial="hidden"
                                            animate={resourcesInView ? "visible" : "hidden"}
                                            custom={index + 1}
                                            className="group w-full max-w-xs sm:max-w-sm md:max-w-[280px] lg:max-w-[300px]"
                                        >
                                            <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_24px_56px_rgba(15,20,32,0.08)] transition-all duration-500  group-hover:shadow-[0_28px_64px_rgba(15,20,32,0.12)]">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="h-64 w-full object-cover sm:h-72 md:h-80 lg:h-[340px] transition-transform duration-700 group-hover:scale-105"
                                                />
                                                  <div className="absolute inset-0 flex items-center justify-center bg-[#2FA4FF]/0 opacity-0 transition-all duration-500 group-hover:bg-[#EC784C]/80 group-hover:opacity-100">
                                                    <button
                                                        type="button"
                                                        className="bg-white px-4 py-2 text-sm font-semibold text-[#1d1d1d] shadow-md sm:px-6 sm:py-3 sm:text-[14px]"
                                                    >
                                                        Download
                                                    </button>
                                                </div>
                                            </div>
            
                                            <h3 className="mt-4 text-base font-normal leading-[1.4] text-[#1d1d1d] sm:mt-6 sm:text-lg md:text-[16px] lg:text-[18px]">
                                                {item.title}
                                            </h3>
                                        </motion.article>
                                    ))}
                                </div>
            
                                <motion.div
                                    variants={fadeSlide}
                                    initial="hidden"
                                    animate={resourcesInView ? "visible" : "hidden"}
                                    custom={5}
                                    className="mt-14 flex justify-center"
                                >
                                    <button
                                        type="button"
                                        className="rounded-full bg-[#ebe0b8] px-6 py-3 text-base text-[#1e1e1e] shadow-[0_8px_18px_rgba(60,52,30,0.08)] transition-all duration-300 hover:bg-[#EC784C] hover:text-white sm:px-8 sm:py-4 sm:text-lg md:px-10 md:text-[16px] lg:px-12"
                                    >
                                        View All →
                                    </button>
                                </motion.div>
                            </div>
                        </div>

   
    </div>
  );
};

export default Health;
