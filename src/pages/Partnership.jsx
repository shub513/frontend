
import React, {useEffect, useState}from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutBg from "../assets/partner.png";
import aboutBg2 from "../assets/about-bg2.png";
import globeImg from "../assets/globe.png";
import illustration from "../assets/partenr-hero.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import v3 from "../assets/Vector 26.png";
import { FaCarSide, FaHandshake, FaSeedling } from "react-icons/fa";
import { FiAward, FiFileText, FiRefreshCcw } from "react-icons/fi";
import saafImg from "../assets/saaf.png";
import heroImg from "../assets/hero.png";
import eventImg from "../assets/event.png";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import programImg from "../assets/program.png";
import vector30 from "../assets/Vector 30.png";
   




const climateActions = [
    {
        number: "01",
        title: "Enable women to become an integral part of the economy",
        image: l1,
    },
    {
        number: "02",
        title: "Help them overcome business challenges, accelerate growth, and create a level the playing field for success.",
        image: l2,
    },
];
const howWeWork = [
    {
        text: "  We offer business opportunities to our partners by providing innovations that meet their growth aspirations.",
      




        icon: FaHandshake,
    },
    {
        
        text: "Equip enterprises with a robust go-to-market model, developed in conjunction with advisors and experts.",
        icon: FiFileText,
    },
    {
        
        text: "Offer access to rural/healthcare distribution channels and drive utilisation through partnerships",
        icon: FiAward,
    },
];

const programCards = [
    {
        image: saafImg,
        title: "SAAF Cities 2.0",
        subtitle: "Digital, circular and water-focused urban waste solutions",
    },
    {
        image: heroImg,
        title: "The Water Lab",
        subtitle: "Supporting innovations that manage water at the ground level",
    },
   
];


const donorLogos = [
    { name: "StartupTN" },
    { name: "The Lemelson Foundation" },
    { name: "Titan Company" },
    { name: "Habitat for Humanity" },
    { name: "AFD" },
];


const resourceTabs = {
    Reports: [
        {
            image: saafImg,
            title: "SAAF Cities: Scaling Waste Management Solution in India",
        },
        {
            image: blog1,
            title: "Impact Report 2025",
        },
        {
            image: blog2,
            title: "Impact Report 2023",
        },
        {
            image: blog3,
            title: "Impact Report 2024",
        },
    ],
    Videos: [
        {
            image: eventImg,
            title: "Communities Building Climate Resilience",
        },
        {
            image: heroImg,
            title: "Innovations Driving Climate Action",
        },
        {
            image: illustration,
            title: "Stories From the Field",
        },
        {
            image: programImg,
            title: "Inside Villgro Climate Programs",
        },
    ],
    News: [
        {
            image: blog3,
            title: "Climate Startups Shaping Better Businesses",
        },
        {
            image: saafImg,
            title: "Waste Management Innovation Expands Across Cities",
        },
        {
            image: eventImg,
            title: "Grassroots Climate Solutions Reach New Communities",
        },
        {
            image: blog2,
            title: "Impact Stories From Villgro Climate Portfolio",
        },
    ],
};




const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.16,
            duration: 0.7,
            ease: "easeOut",
        },
    }),
};

const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        },
    },
};

const whatWeDoCards = [
    {
        icon: icon1,
        copy: (
            <>
                We help social enterprises achieve{" "}
                <span className="font-bold transition duration-300 group-hover:text-white">
                    sustainable impact
                </span>{" "}
                at scale
            </>
        ),
    },
    {
        icon: icon2,
        copy: (
            <>
                We help philanthropic foundations achieve their{" "}
                <span className="font-bold transition duration-300 group-hover:text-white">
                    sustainability &amp; impact goals
                </span>
            </>
        ),
    },
    {
        icon: icon3,
        copy: (
            <>
                We identify and scale social inventions to achieve policy objectives
                and support innovations for a{" "}
                <span className="font-bold transition duration-300 group-hover:text-white">
                    self-reliant India
                </span>
            </>
        ),
    },
];

const howWeWorkCards = [
    {
        image: work1,
        description:
            "We maximise the potential of social enterprises building disruptive solutions through our highly customised, hands-on approach to incubation.",
        cardClassName:
            " bg-[#f7f5ea] text-[#111111] shadow-[0_18px_45px_rgba(35,31,32,0.06)]",
        imageClassName: "w-[260px] md:w-[340px]",
    },
    {
        image: work2,
        description:
            "We build innovative partnership models and financing solutions to help social enterprises create impact at scale",
        cardClassName:
            "text-[#111111] shadow-[0_28px_60px_rgba(32,200,79,0.18)]",
        imageClassName: "w-[280px] md:w-[360px]",
    },
];
const fadeSlide = {
    hidden: { opacity: 0, y: 28 },
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


const Partnership = () => {
     const { ref: actionRef, inView: actionInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [activeTab, setActiveTab] = useState("Reports");
        const [hoveredTab, setHoveredTab] = useState(null);
        const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
        });


     const { ref: workRef, inView: workInView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
        });

        const { ref: resourcesRef, inView: resourcesInView } = useInView({
                triggerOnce: true,
                threshold: 0.15,
            });


    return (
        <section className="w-full overflow-hidden bg-white font-satoshi">
            <div
                className="bg-cover h-[475px] bg-center bg-no-repeat "
                style={{ backgroundImage: `url(${aboutBg})` }}
            >
                <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-14 px-6 pb-24 pt-14 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:pb-28 md:pt-20">
                    <div className="max-w-2xl pt-2 md:pt-8">
                        <div>
                            <motion.h4
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                className="mb-4 text-[50px] font-boska font-[700] text-white "
                            >
                                Market Partnerships & Channel Development
                            </motion.h4>



                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={2}
                                className="max-w-xl text-xl leading-[32px] text-[#1E1E1E] sm:text-2xl md:max-w-lg md:text-[28px]"
                            >
                                Connecting innovations with markets
                            </motion.p>
                        </div>


                    </div>

                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        animate="visible"
                        className="flex items-end justify-center md:justify-end"
                    >
                        <img
                            src={illustration}
                            alt="Villgro mission illustration"
                            className="w-full max-w-md md:max-w-[400px]   "
                        />
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg
                        viewBox="0 0 1440 150"
                        className="w-full h-[120px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#ffffff"
                            d="M0,100 C300,0 1100,200 1440,100 L1440,150 L0,150 Z"
                        />
                    </svg>
                </div>
            </div>

            

            <div ref={actionRef} className="bg-white  pb-24  ">
                            <div className="w-[100%]    h-[500px]  sm:px-10 md:px-16 md:py-10 lg:rounded-t-[8rem]">
                                <motion.h2
                                    variants={fadeSlide}
                                    initial="hidden"
                                    animate={actionInView ? "visible" : "hidden"}
                                    custom={0}
                                    className="text-center font-boska text-[44px] font-bold leading-none text-[#2a2420] md:text-[40px]"
                                >
                                    What we do?
                                </motion.h2>
            
                                <motion.p
                                    variants={fadeSlide}
                                    initial="hidden"
                                    animate={actionInView ? "visible" : "hidden"}
                                    custom={1}
                                    className="mx-auto mt-16 max-w-6xl text-center font-sans text-[20px] leading-[1.65] text-[#2f405f] md:text-[20px]"
                                >
                                   
            
                              


                                    We build dedicated channels tailored to the needs of both rural markets and the healthcare sector, to bridge value chain gaps and help innovations commercialize.
                                </motion.p>
            
                                <div className="mt-16 px-[100px] grid gap-10 lg:grid-cols-2 lg:gap-16">
                                    {climateActions.map((item, i) => {
                                        return (
                                            <motion.div
                                                key={item.title}
                                                variants={fadeSlide}
                                                initial="hidden"
                                                animate={actionInView ? "visible" : "hidden"}
                                                custom={i + 2}
                                                className="group flex cursor-pointer items-center justify-center gap-8 rounded-[2rem] border border-[#d8d8d8] bg-white p-8 text-center shadow-[0_20px_45px_rgba(35,31,32,0.05)] transition duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white lg:justify-start lg:text-left"
                                            >
                                               
                                                     <span
                                            className={`font-sans text-[80px] font-black leading-none tracking-[-0.06em] transition-colors duration-500 md:text-[80px] ${
                                                item.featured
                                                    ? "text-white/95"
                                                    : "text-[#d8d8d8] group-hover:text-white/95"
                                            }`}
                                        >
                                            {item.number}
                                        </span>
                                                
            
                                                <motion.p
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={actionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                                    transition={{ delay: 0.35 + i * 0.15, duration: 0.7, ease: "easeOut" }}
                                                    className="whitespace-pre-line font-sans text-[22px] font-semibold leading-[1.25] text-[#101820] transition duration-300 group-hover:text-white md:text-[14px]"
                                                >
                                                    {item.title}
                                                </motion.p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

            <div
                className="bg-white bg-cover bg-top bg-no-repeat px-6 py-24 md:py-28"
                style={{ backgroundImage: `url(${v3})` }}
            >
                <div ref={workRef} className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center md:mb-20">
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.35 }}
                            className="mb-6 text-4xl font-boska font-bold text-[#231f20] md:text-[40px]"
                        >
                            Here's how we work
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.35 }}
                            custom={1}
                            className="mx-auto max-w-5xl text-lg leading-[2] text-[#2d2d2d] md:text-[20px]"
                        >
                          

                            We partner with last mile distributors and channel partners who work with FPOs and SHGs, and healthcare networks to enhance market-product fit and facilitate market penetration for social enterprises.
                        </motion.p>
                    </div>

                    

                     <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-30">
                                            {howWeWork.map((item, i) => {
                                                const Icon = item.icon;
                    
                                                return (
                                                    <motion.article
                                                        key={item.number}
                                                        variants={fadeSlide}
                                                        initial="hidden"
                                                        animate={workInView ? "visible" : "hidden"}
                                                        custom={i + 1}
                                                        className={`group relative  h-[255px] overflow-hidden rounded-[30px] border px-9 pb-8 pt-5 transition-all duration-500  hover:shadow-[0_22px_44px_rgba(24,34,44,0.18)] ${
                                                            item.featured
                                                                ? "border-[#23C550] bg-black text-black "
                                                                : "border-[#ece7db] bg-white text-[#111111] shadow-[0_14px_34px_rgba(18,28,45,0.14)] hover:border-[#23C550] hover:bg-[#23C550] hover:text-white"
                                                        }`}
                                                    >
                                                        <div className="flex h-full flex-col">
                                                           
                    
                                                            <p
                                                                className={`mt-2 whitespace-pre-line font-sans text-[22px] leading-[2] transition-colors duration-500 md:text-[14px] ${
                                                                    item.featured
                                                                        ? "text-white"
                                                                        : "text-[#121212] group-hover:text-white"
                                                                }`}
                                                            >
                                                                {item.text}
                                                            </p>
                    
                                                            <div className="mt-auto flex justify-end">
                                                                <div
                                                                    className={`flex h-18 w-18 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-100 group-hover:rotate-3 ${
                                                                        item.featured
                                                                            ? "bg-[#f3eadf] text-[#2f2f2f]"
                                                                            : "bg-[#f3eadf] text-[#4a4a4a] group-hover:bg-white "
                                                                    }`}
                                                                >
                                                                    <Icon className="text-[24px]" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.article>
                                                );
                                            })}
                                        </div>
                </div>
            </div>






                      <div className=" px-6 pb-28 pt-20 md:px-10 md:pb-32">
                            <div className="mx-auto max-w-7xl">
                                <motion.h2
                                    variants={fadeSlide}
                                    initial="hidden"
                                    animate={workInView ? "visible" : "hidden"}
                                    custom={0}
                                    className="text-center font-boska text-[46px] font-bold leading-none text-[#2a2420] md:text-[40px]"
                                >
                                     Programs 
                                </motion.h2>
            
                                <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3 h-[400px] ">
                                    {programCards.map((card) => (
                                        <article
                                            key={card.title}
                                            className="group overflow-hidden rounded-[32px]  bg-white text-[#1d1d1d] transition-all duration-500 hover:border-transparent hover:bg-[#]  "
                                        >
                                            <div className="overflow-hidden bg-white">
                                                <img
                                                    src={card.image}
                                                    alt={card.title}
                                                    className="h-[220px] w-full object-cover  "
                                                />
                                            </div>
            
                                            <div className="space-y-4 px-6 py-7 transition-colors duration-500 group-hover:bg-[#23C550]">
                                                <h3 className="text-[18px] font-normal leading-[1.3] text-[#8D8F92] transition-colors rounded-full duration-500 group-hover:text-white">
                                                    {card.title}
                                                </h3>
                                                
                                                <div className="pt-3">
                                                    <span className="text-[12px] font-normal uppercase tracking-[0.18em] transition-colors duration-500 ml-32 ">
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
                                        className="rounded-full bg-[#ebe0b8] px-8 py-4 text-[18px] text-[#1e1e1e] shadow-[0_8px_18px_rgba(60,52,30,0.08)] transition-all duration-300 hover:bg-[#23C550] hover:text-white md:px-12 md:text-[13px]"
                                    >
                                        View All →
                                    </button>
                                </div>
                            </div>
                        </div>
            
  

                        <div className="bg-white px-6 pb-28 pt-20 md:px-10 md:pb-32">
  <div className="mx-auto max-w-4xl">
    
    {/* TITLE */}
    <h2 className="text-center font-boska text-[46px] font-bold leading-none text-[#2a2420] md:text-[40px]">
      Our Donors
    </h2>

    {/* 🔥 NEW GRID */}
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-y-14 gap-x-10 max-w-2xl mx-auto">
      
      {donorLogos.map((donor, i) => (
        <div
          key={donor.name}
          className="flex items-center gap-6"
        >
          {/* ✅ CIRCLE */}
          <div className="w-24 h-24 rounded-full bg-[#E6DCC6] flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-110">
            
            {/* 👉 If you have logo */}
            {donor.logo ? (
              <img
                src={donor.logo}
                alt={donor.name}
                className="w-12 object-contain"
              />
            ) : (
              <span className="text-sm font-semibold text-gray-700 text-center px-2">
                {donor.name}
              </span>
            )}
          </div>

          {/* NAME */}
          <p className="text-[18px] text-[#2a2420] font-medium">
            {donor.name}
          </p>
        </div>
      ))}
    </div>

    {/* BUTTON */}
    <div className="mt-16 flex justify-center">
      <button
        type="button"
        className="rounded-full bg-[#ebe0b8] px-10 py-4 text-[16px] font-semibold text-[#1e1e1e] shadow-[0_12px_28px_rgba(60,52,30,0.12)] transition-all duration-300 hover:bg-[#23C550] hover:text-white"
      >
        View All
      </button>
    </div>

  </div>
</div>
            
                        <div
                            ref={resourcesRef}
                            className="overflow-hidden rounded-t-[90px] px-6 pb-20 pt-16 md:rounded-t-[50px] md:px-50 md:pb-24 md:pt-20"
                            style={{
                                backgroundImage: `url(${vector30})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="mx-auto">
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
                                            className={`rounded-[20px] px-6 py-3 text-[22px] transition-all duration-300 md:min-w-[140px] md:text-[20px] ${
                                                activeTab === tab
                                                    ? " text-[#1c1c1c] font-semibold shadow-[0_16px_34px_rgba(36,31,24,0.16)]"
                                                    : "bg-transparent text-[#4a4a4a] font-medium  hover:text-[#1c1c1c]"
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </motion.div>
            
                                <div className="grid justify-items-center gap-x-19 gap-y-16 md:grid-cols-2 xl:grid-cols-4">
                                    {resourceTabs[activeTab].map((item, index) => (
                                        <motion.article
                                            key={`${activeTab}-${item.title}`}
                                            variants={fadeSlide}
                                            initial="hidden"
                                            animate={resourcesInView ? "visible" : "hidden"}
                                            custom={index + 1}
                                            className="group w-[300px] max-w-[280px]"
                                        >
                                            <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_24px_56px_rgba(15,20,32,0.08)] transition-all duration-500  group-hover:shadow-[0_28px_64px_rgba(15,20,32,0.12)]">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="h-[340px] w-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                
            
                                                <div className="absolute inset-0 flex items-center justify-center bg-[#2FA4FF]/0 opacity-0 transition-all duration-500 group-hover:bg-[#23C550]/80 group-hover:opacity-100">
                                                    <button
                                                        type="button"
                                                        className=" bg-white px-6 py-3 text-[14px] font-semibold text-[#1d1d1d] shadow-md"
                                                    >
                                                        Download
                                                    </button>
                                                </div>
                                            </div>
            
                                            <h3 className="mt-6 text-[18px] font-normal leading-[1.4] text-[#1d1d1d] md:text-[16px]">
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
                                        className="rounded-full bg-[#ebe0b8] px-8 py-4 text-[18px] text-[#1e1e1e] shadow-[0_8px_18px_rgba(60,52,30,0.08)] transition-all duration-300 hover:bg-[#23C550] hover:text-white md:px-12 md:text-[13px]"
                                    >
                                        View All →
                                    </button>
                                </motion.div>
                            </div>
                        </div>

            


        </section>

    )
}

export default Partnership