import React, { useEffect, useState } from "react";
import climateBg from "../assets/climate.png";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import eventImg from "../assets/event.png";
import heroImg from "../assets/heroImg2.png";
import illustration from "../assets/illustration.png";
import programImg from "../assets/program.png";
import saafImg from "../assets/saaf.png";
import vector30 from "../assets/Vector 30.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCarSide, FaHandshake, FaSeedling } from "react-icons/fa";
import { FiAward, FiFileText, FiRefreshCcw } from "react-icons/fi";

const stats = [
    { value: 33, label: "Startups supported" },
    { value: 47501, label: "Lives impacted" },
    { value: 68.1, suffix: "M", label: "Investments raised (INR)" },
    { value: 148, label: "Direct jobs" },
    { value: 9, label: "Women-led enterprises" },
];

const climateActions = [
    {
        title: "Enabling Climate\nResilient Livelihoods",
        icon: FaSeedling,
    },
    {
        title: "Reimagining\nwaste",
        icon: FiRefreshCcw,
    },
    {
        title: "Making mobility\naccessible and sustainable",
        icon: FaCarSide,
    },
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
    {
        image: eventImg,
        title: "SAAF Cities: Shaping Waste-Free Communities",
        subtitle: "Scaling community-led circular economy pilots",
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
            {Number.isInteger(end) ? Math.floor(count).toLocaleString("en-IN") : count.toFixed(1)}
            {suffix}
        </span>
    );
};

const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: "easeOut",
        },
    }),
};

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

const ClimateHero = () => {
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

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { ref: actionRef, inView: actionInView } = useInView({
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
        <section className="overflow-hidden bg-white">
            <div
                ref={ref}
                className="relative h-[480px] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${climateBg})`,
                }}
            >
                <div className="mx-auto flex min-h-[620px] max-w-7xl items-start px-6 pb-28 pt-24 md:px-10 md:pb-36 md:pt-36 max-md:min-h-[430px] max-md:pb-12 max-md:pt-12">
                    <div className="max-w-[42rem]">
                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={0}
                            className="font-boska text-[4rem] leading-[0.95] text-white md:text-[50px] font-bold"
                        >
                            Climate Action
                        </motion.h1>
                        

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={1}
                            className="mt-10 max-w-[39rem] text-[1.9rem] leading-[1.45] text-[#111111] md:text-[28px] max-md:mt-6 max-md:max-w-[16rem] max-md:text-[1rem]"
                        >
                            Cultivating a greener future by nurturing sustainable innovations
                        </motion.p>
                    </div>

                    
                </div>
            </div>

            <div className="bg-white px-6 pb-20 pt-8 md:px-10 md:pb-24 md:pt-10">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-12 text-center md:grid-cols-5 md:gap-x-12">
                        {stats.map((item, i) => (
                            <motion.div
                                key={item.label}
                                variants={fadeUp}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                custom={i + 2}
                                className="mx-auto flex max-w-[12rem] flex-col items-center"
                            >
                                <h2
                                    className="leading-none text-[#19a8d8] md:text-[36px] max-md:text-[42px]"
                                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 900 }}
                                >
                                    <Counter
                                        end={item.value}
                                        duration={2000}
                                        suffix={item.suffix || ""}
                                        start={inView}
                                    />
                                </h2>

                                <p
                                    className="mt-2 leading-[20px] text-[#111111] md:text-[18px] max-md:text-[14px]"
                                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700 }}
                                >
                                    {item.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div ref={actionRef} className="bg-white  pb-24  ">
                <div className="h-[400px] w-[100%] bg-[#f8f4e6] sm:px-10 md:px-16 md:py-20 lg:rounded-t-[8rem] max-md:h-auto max-md:px-4 max-md:py-10">
                    <motion.h2
                        variants={fadeSlide}
                        initial="hidden"
                        animate={actionInView ? "visible" : "hidden"}
                        custom={0}
                        className="text-center font-boska text-[44px] font-bold leading-none text-[#2a2420] md:text-[40px] max-md:text-[34px]"
                    >
                        What we do?
                    </motion.h2>

                    <motion.p
                        variants={fadeSlide}
                        initial="hidden"
                        animate={actionInView ? "visible" : "hidden"}
                        custom={1}
                        className="mx-auto mt-6 max-w-5xl text-center font-sans text-[20px] leading-[1.65] text-[#2f405f] md:text-[20px] max-md:text-[16px]"
                    >
                        We work with social entrepreneurs creating innovations that drive
                        change at the community level by
                    </motion.p>

                    <div className="mt-16 grid gap-10 px-[100px] lg:grid-cols-3 lg:gap-16 max-md:mt-8 max-md:px-0">
                        {climateActions.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    variants={fadeSlide}
                                    initial="hidden"
                                    animate={actionInView ? "visible" : "hidden"}
                                    custom={i + 2}
                                    className="flex items-center justify-center  gap-8 text-center lg:justify-start lg:text-left"
                                >
                                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#11add4] shadow-[0_14px_32px_rgba(17,173,212,0.18)]">
                                        <Icon className="text-[40px] text-white" />
                                    </div>

                                    <motion.p
                                        initial={{ opacity: 0, x: 24 }}
                                        animate={actionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                                        transition={{ delay: 0.45 + i * 0.18, duration: 0.65, ease: "easeOut" }}
                                        className="whitespace-pre-line font-sans text-[22px] font-semibold leading-[1.25] text-[#101820] md:text-[14px] max-md:text-[17px]"
                                    >
                                        {item.title}
                                    </motion.p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div ref={workRef} className="bg-white px-6 pb-28 md:px-10 md:pb-32">
                <div className="mx-[190px] max-w-7xl max-md:mx-auto">
                    <motion.h2
                        variants={fadeSlide}
                        initial="hidden"
                        animate={workInView ? "visible" : "hidden"}
                        custom={0}
                        className="text-center font-boska text-[46px] font-bold leading-none text-[#2a2420] md:text-[40px] max-md:text-[34px]"
                    >
                        Here&apos;s how we work
                    </motion.h2>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-20">
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
                                    className={`group relative h-[305px] overflow-hidden rounded-[30px] border px-9 pb-8 pt-5 transition-all duration-500 hover:shadow-[0_22px_44px_rgba(24,34,44,0.18)] max-md:h-auto max-md:min-h-[280px] max-md:cursor-pointer ${
                                        item.featured
                                            ? "border-[#1ca9cf] bg-black text-black "
                                            : isActiveMobileCard
                                            ? "border-[#1ca9cf] bg-[#1ca9cf] text-white shadow-[0_22px_44px_rgba(24,34,44,0.18)]"
                                            : "border-[#ece7db] bg-white text-[#111111] shadow-[0_14px_34px_rgba(18,28,45,0.14)] hover:border-[#1ca9cf] hover:bg-[#1ca9cf] hover:text-white"
                                    }`}
                                >
                                    <div className="flex h-full flex-col">
                                        <span
                                            className={`font-sans text-[80px] font-black leading-none tracking-[-0.06em] transition-colors duration-500 md:text-[80px] max-md:text-[64px] ${
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
                                            className={`mt-10 whitespace-pre-line font-sans text-[22px] leading-[1.25] transition-colors duration-500 md:text-[14px] max-md:mt-6 max-md:text-[17px] ${
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
                                                className={`flex h-18 w-18 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-100 group-hover:rotate-3 ${
                                                    item.featured
                                                        ? "bg-[#f3eadf] text-[#2f2f2f]"
                                                        : isActiveMobileCard
                                                        ? "bg-white text-[#1ca9cf]"
                                                        : "bg-[#f3eadf] text-[#4a4a4a] group-hover:bg-white group-hover:text-[#1ca9cf]"
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

            <div className="bg-[#fbf7e7] px-6 pb-28 pt-20 md:px-10 md:pb-32">
                <div className="mx-auto max-w-7xl">
                    <motion.h2
                        variants={fadeSlide}
                        initial="hidden"
                        animate={workInView ? "visible" : "hidden"}
                        custom={0}
                        className="text-center font-boska text-[46px] font-bold leading-none text-[#2a2420] md:text-[40px] max-md:text-[34px]"
                    >
                        Our programs that drive positive change
                    </motion.h2>

                    <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
                        {programCards.map((card, index) => {
                            const isActiveProgramCard = isMobileView && activeProgramCard === index;
                            return (
                            <article
                                key={card.title}
                                onClick={() => {
                                    if (!isMobileView) return;
                                    setActiveProgramCard((prev) => (prev === index ? null : index));
                                }}
                                className={`group overflow-hidden rounded-[32px] bg-white text-[#1d1d1d] transition-all duration-500 hover:border-transparent hover:bg-[#00ABD2] hover:text-white max-md:cursor-pointer ${
                                    isActiveProgramCard ? "bg-[#00ABD2] text-white" : ""
                                }`}
                            >
                                <div className="overflow-hidden bg-white">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="h-[220px] w-full object-cover  "
                                    />
                                </div>

                                <div className={`space-y-4 px-6 py-7 transition-colors duration-500 ${isActiveProgramCard ? "bg-[#00ABD2]" : "group-hover:bg-[#00ABD2]"}`}>
                                    <h3 className={`text-[18px] font-normal leading-[1.3] transition-colors duration-500 ${isActiveProgramCard ? "text-white" : "text-[#8D8F92] group-hover:text-white"}`}>
                                        {card.title}
                                    </h3>
                                    
                                    <div className="pt-3">
                                        <span className={`ml-32 text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 max-md:ml-0 ${isActiveProgramCard ? "text-white" : "group-hover:text-white"}`}>
                                            Explore {"->"}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        )})}
                    </div>

                    <div className="mt-12 flex justify-center">
                       


                         <button
                            type="button"
                            className="rounded-full bg-[#ebe0b8] px-8 py-4 text-[18px] text-[#1e1e1e] shadow-[0_8px_18px_rgba(60,52,30,0.08)] transition-all duration-300 hover:bg-[#19a8d8] hover:text-white md:px-12 md:text-[13px]"
                        >
                            View All {"->"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white px-6 pb-28 pt-20 md:px-10 md:pb-32">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-center font-boska text-[46px] font-bold leading-none text-[#2a2420] md:text-[40px] max-md:text-[34px]">
                        Our Donors
                    </h2>

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
                        {donorLogos.map((donor, index) => {
                            const isActiveDonorCard = isMobileView && activeDonorCard === index;
                            return (
                            <div
                                key={donor.name}
                                onClick={() => {
                                    if (!isMobileView) return;
                                    setActiveDonorCard((prev) => (prev === index ? null : index));
                                }}
                                className={`flex h-[150px] items-center justify-center rounded-[28px] border border-[#ece7db] bg-white px-6 text-center shadow-[0_10px_30px_rgba(15,20,32,0.04)] transition-all duration-300 hover:bg-[#0f67b5] hover:text-white max-md:cursor-pointer ${
                                    isActiveDonorCard ? "bg-[#0f67b5] text-white" : ""
                                }`}
                            >
                                <span className="text-[18px] font-semibold leading-none">
                                    {donor.name}
                                </span>
                            </div>
                        )})}
                    </div>

                    <div className="mt-14 flex justify-center">
                        <button
                            type="button"
                            className="rounded-full bg-[#ebe0b8] px-10 py-4 text-[16px] font-semibold text-[#1e1e1e] shadow-[0_12px_28px_rgba(60,52,30,0.12)] transition-all duration-300 hover:bg-[#19a8d8] hover:text-white"
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
                                className={`rounded-[20px] px-6 py-3 text-[22px] transition-all duration-300 md:min-w-[140px] md:text-[20px] max-md:px-4 max-md:py-2 max-md:text-[16px] ${
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
                        {resourceTabs[activeTab].map((item, index) => {
                            const resourceKey = `${activeTab}-${index}`;
                            const isActiveResourceCard = isMobileView && activeResourceCard === resourceKey;

                            return (
                            <motion.article
                                key={`${activeTab}-${item.title}`}
                                variants={fadeSlide}
                                initial="hidden"
                                animate={resourcesInView ? "visible" : "hidden"}
                                custom={index + 1}
                                onClick={() => {
                                    if (!isMobileView) return;
                                    setActiveResourceCard((prev) => (prev === resourceKey ? null : resourceKey));
                                }}
                                className="group w-[300px] max-w-[280px] max-md:w-full max-md:max-w-[320px] max-md:cursor-pointer"
                            >
                                <div className={`relative overflow-hidden rounded-[32px] bg-white shadow-[0_24px_56px_rgba(15,20,32,0.08)] transition-all duration-500 ${isActiveResourceCard ? "shadow-[0_28px_64px_rgba(15,20,32,0.12)]" : "group-hover:shadow-[0_28px_64px_rgba(15,20,32,0.12)]"}`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`h-[340px] w-[300px] object-cover transition-transform duration-700 max-md:h-[260px] max-md:w-full ${isActiveResourceCard ? "scale-105" : "group-hover:scale-105"}`}
                                    />
                                    

                                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isActiveResourceCard ? "bg-[#099AB3]/80 opacity-100" : "bg-[#2FA4FF]/0 opacity-0 group-hover:bg-[#099AB3]/80 group-hover:opacity-100"}`}>
                                        <button
                                            type="button"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                handleDownload(item.image, item.title);
                                            }}
                                            className="bg-white px-6 py-3 text-[14px] font-semibold text-[#1d1d1d] shadow-md"
                                        >
                                            Download
                                        </button>
                                    </div>
                                </div>

                                <h3 className="mt-6 text-[18px] font-normal leading-[1.4] text-[#1d1d1d] md:text-[16px]">
                                    {item.title}
                                </h3>
                            </motion.article>
                        )})}
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
                            className="rounded-full bg-[#ebe0b8] px-8 py-4 text-[18px] text-[#1e1e1e] shadow-[0_8px_18px_rgba(60,52,30,0.08)] transition-all duration-300 hover:bg-[#19a8d8] hover:text-white md:px-12 md:text-[13px]"
                        >
                            View All {"->"}
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ClimateHero;


