import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import impactBackground from "../assets/ourImpact-bg.png";
import impactIllustration from "../assets/ourImapct.png";
import impactSlideOne from "../assets/value1.png";
import impactSlideTwo from "../assets/value2.png";
import impactSlideThree from "../assets/Group 424.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import healthIcon from "../assets/health.png";
import agriIcon from "../assets/agri.png";
import climateIcon from "../assets/climate.png";
import climateIcon2 from "../assets/climate2.png";
import bulbIcon from "../assets/bulb.png";
import mentorIcon from "../assets/mentor.png";
import greenColumn from "../assets/green-coluan.png";
import programVisual from "../assets/saaf.png";
import blogOne from "../assets/blog1.png";
import blogTwo from "../assets/blog2.png";
import blogThree from "../assets/blog3.png";
import eventVisual from "../assets/event.png";
import heroVisual from "../assets/heroImg2.png";
import missionVisual from "../assets/illustration.png";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 387, label: "Enterprises incubated" },
  { value: 4.8, suffix: "Bn", label: "Seed funding raised" },
  { value: 20.8, suffix: "M", label: "Lives impacted" },
  { value: 8000, label: "Direct jobs" },
  { value: 82, label: "Women-led enterprises" },
];

const impactSlides = [
  {
    image: impactSlideOne,
    imageAlt: "Impact methodology illustration",
    imageClassName: "max-w-[300px] md:max-w-[390px] lg:max-w-[430px]",
    body: (
      <>
        We designed a multidimensional impact measurement methodology that
        captures impact across the{" "}
        <span className="font-bold text-[#3f3f3f]">
          social, infrastructure and environment
        </span>{" "}
        dimensions
      </>
    ),
    note: "*We align impact measurement with SDG and IRIS metrics",
  },
  {
    image: impactSlideTwo,
    imageAlt: "Impact cycle illustration",
    imageClassName: "max-w-[265px] md:max-w-[250px] lg:max-w-[355px]",
    body: 
      "The impact methodology helps us perpetuate a virtuous cycle where the better understanding of data, the impact being created and new business opportunities feed off each other",
  },
  {
    image: impactSlideThree,
    imageAlt: "Enterprise viability illustration",
    imageClassName: "max-w-[300px] md:max-w-[340px] lg:max-w-[380px]",
    body:
      "We back enterprises that are financially viable, have scalable operating models and can create impact at scale",
  },
];

const valueCreationSlides = [
  {
    title: "Business Value of Impact",
    description:
      "We evaluate the business value of impact by examining innovations based on 5 crucial parameters:",
    cards: [
      { title: "Accessibility", icon: icon2 },
      { title: "Affordability", icon: mentorIcon },
      { title: "Quality", icon: bulbIcon },
      { title: "Timeliness", icon: icon1 },
      { title: "Livelihoods", icon: agriIcon },
    ],
    footer:
      "These parameters help us gauge how these innovations enhance the lives of end-users, making services accessible, affordable, and delivering timely benefits and opportunities for sustainable livelihoods.",
  },
  {
    title: "Social value of Impact",
    description:
      "Social value of impact assesses the positive changes that extend beyond numbers making businesses impactful and inclusive. This includes parameters like:",
    cards: [
      {
        title:
          "Number of marginalized lives enriched through affordable and accessible products",
        icon: icon2,
      },
      {
        title:
          "Partnerships forged through networks of various stakeholders such as FPOs, NGO, and rural institutions",
        icon: mentorIcon,
      },
      {
        title:
          "Healthcare services that addresses health concerns, creates awareness and opportunities for individuals at the Base of the Pyramid (BoP).",
        icon: healthIcon,
      },
    ],
  },
  {
    title: "Environment value of Impact",
    description:
      "We assess the environmental value of impact by examining how enterprises and innovations contribute to sustainable practices and reduce the ecological footprint based on several crucial parameters:",
    cards: [
      { title: "Natural resource optimization", icon: climateIcon },
      { title: "Waste management efficiency", icon: icon3 },
      { title: "Sustainable agriculture practice", icon: climateIcon2 },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
};

const slideFromRight = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
};

const quoteText = [
  "We",
  "combine",
  "evidence",
  "of",
  "this",
  "real",
  "world",
  "impact",
  "with",
  "mainstream",
  "commercial",
  "viability",
];

const programsShowcase = [
  {
    title: "SAAF Cities 2.0",
    path: "/programs",
  },
];

const mediaShowcase = {
  Reports: [
    {
      title: "Impact Report 2025",
      image: blogOne,
      cardTone: "from-[#d7f36e] via-[#d6f078] to-[#f7f7f0]",
      downloadName: "impact-report-2025.png",
    },
    {
      title: "Impact Report 2023",
      image: blogTwo,
      cardTone: "from-[#25c84c] via-[#20b646] to-[#1aa33d]",
      downloadName: "impact-report-2023.png",
    },
    {
      title: "Impact Report 2024",
      image: blogThree,
      cardTone: "from-[#1a8bb9] via-[#2f7399] to-[#1f4f73]",
      downloadName: "impact-report-2024.png",
    },
    {
      title: "Impact Report 2020",
      image: programVisual,
      cardTone: "from-[#ffffff] via-[#f4f1e7] to-[#ffffff]",
      downloadName: "impact-report-2020.png",
    },
  ],
  Videos: [
    {
      title: "Field Story",
      image: eventVisual,
      cardTone: "from-[#fbedd9] via-[#f6e1bc] to-[#ecd2a2]",
    },
    {
      title: "Impact in Action",
      image: heroVisual,
      cardTone: "from-[#ddf6e4] via-[#bbecc7] to-[#97d8ad]",
    },
    {
      title: "Innovation Journey",
      image: missionVisual,
      cardTone: "from-[#e7eef8] via-[#d0dcf2] to-[#c1d2ef]",
    },
    {
      title: "Community Voices",
      image: blogOne,
      cardTone: "from-[#f6eadf] via-[#edd9c6] to-[#e2c3a9]",
    },
  ],
};

const quoteContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.18,
    },
  },
};

const quoteWord = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


const Counter = ({ end, suffix = "", duration = 1800 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let frameId;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const nextValue = end * progress;

      setCount(nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount);
      }
    };

    frameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(frameId);
  }, [duration, end]);

  const formattedValue = Number.isInteger(end)
    ? Math.floor(count).toLocaleString("en-IN")
    : count.toFixed(1);

  return (
    <span style={{ fontFamily: "Satoshi, sans-serif" }}>
      {formattedValue}
      {suffix}
    </span>
  );
};

const OurImapct = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeValueSlide, setActiveValueSlide] = useState(0);
  const [isValuePaused, setIsValuePaused] = useState(false);
  const [activeMediaTab, setActiveMediaTab] = useState("Reports");

  useEffect(() => {
    if (isPaused) return;

    const intervalId = setInterval(() => {
      setActiveSlide((current) => (current + 1) % impactSlides.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  useEffect(() => {
    if (isValuePaused) return;

    const intervalId = setInterval(() => {
      setActiveValueSlide((current) => (current + 1) % valueCreationSlides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isValuePaused]);

  const currentSlide = impactSlides[activeSlide];
  const currentValueSlide = valueCreationSlides[activeValueSlide];
  const currentMediaItems = mediaShowcase[activeMediaTab];

  return (
    <section className="overflow-hidden bg-white font-sans">
      <div
        className="relative  overflow-hidden border-t-[3px] border-[#111111] bg-white bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${impactBackground})`,
          backgroundPosition: "center top",
        }}
      >
          <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl flex-col px-4 pb-16 pt-12 font-boska sm:px-6 sm:min-h-[420px] sm:pb-20 sm:pt-16 md:min-h-[460px] md:px-10 md:pt-24">
          <div className="max-w-[40rem]">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="mb-4 text-[24px] leading-[1] font-boska font-bold text-white sm:mb-5 sm:text-[28px] md:mb-7 md:text-[30px] md:leading-[30px]"
            >
              Our
            </motion.p>

            <motion.h1  
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="mb-6 text-[40px] leading-[1.1] font-boska font-bold text-white sm:mb-8 sm:text-[46px] md:mb-12 md:text-[50px] md:leading-[65px]"
            >
              Impact
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.24}
              className="text-[1.3rem] font-satoshi leading-[1.34] text-[#111111] sm:text-[1.6rem] md:text-[28px]"
            >
              A continuous, comprehensive and multidimensional approach to
              measuring impact
            </motion.p>
          </div>

          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            className="pointer-events-none absolute right-6 top-[250px] -translate-y-1/2 md:block"
          >
            <img
              src={impactIllustration}
              alt="Impact illustration"
              className="w-full max-w-[460px] object-contain lg:max-w-[540px]"
            />
          </motion.div>

          <div className="mt-auto pt-28 md:pt-40">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 text-center sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-10">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  custom={index * 0.1}
                  className="mx-auto flex max-w-[13rem] flex-col items-center"
                >
                  <h2
                    className="mb-3 text-[2.2rem] leading-none font-black text-[#25c84c] sm:text-[2.6rem] md:text-[35px]"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <Counter
                      end={item.value}
                      suffix={item.suffix || ""}
                    />
                  </h2>

                  <p className="text-[1rem] leading-[1.15] font-medium text-[#111111] sm:text-[1.1rem] md:text-[16px]">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          
        </div>
      </div>

      <div className="bg-white px-6 py-20 md:px-10 md:py-28">
        <div
          className="relative mx-auto max-w-7xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onPointerCancel={() => setIsPaused(false)}
        >
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="text-center text-[2.6rem] leading-[1.02] font-boska font-bold text-[#231f20] md:text-[40px]"
          >
            Measuring Impact the Multidimensional Way
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            custom={0.1}
            className="mx-auto mt-8 max-w-4xl text-center text-[1.35rem] leading-[1.5] text-[#2d2d2d] md:text-[20px]"
          >
            At Villgro, we make innovative social enterprises become more
            impactful
          </motion.p>

          <div className="relative mt-[4.5rem] md:mt-24">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[0.86fr_1.14fr] md:gap-16">
              <div className="flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`impact-image-${activeSlide}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="flex justify-center"
                  >
                    <img
                      src={currentSlide.image}
                      alt={currentSlide.imageAlt}
                      className={`w-full object-contain ${currentSlide.imageClassName}`}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative md:pr-16">
                <div className="relative mb-10 h-px bg-[#bfc3c8]">
                  <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#9ea3a8]" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`impact-copy-${activeSlide}`}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <p className="max-w-3xl text-[1.45rem] leading-[1.55] text-[#595959] md:text-[20px]">
                      {currentSlide.body}
                    </p>

                    {currentSlide.note ? (
                      <p className="mt-14 text-[1rem] leading-[1.6] text-[#747474] md:text-[1.15rem]">
                        {currentSlide.note}
                      </p>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 md:flex md:flex-col md:gap-5">
              {impactSlides.map((slide, index) => (
                <button
                  key={slide.imageAlt}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to impact slide ${index + 1}`}
                  className={`h-2 w-2 rounded-full transition duration-300 ${
                    activeSlide === index
                      ? "scale-105 bg-[#25c84c]"
                      : "bg-[#e6ddbf] hover:bg-[#d7cca6]"
                  }`}
                />
              ))}
            </div>

            <div className="mt-10 flex justify-center gap-4 md:hidden">
              {impactSlides.map((slide, index) => (
                <button
                  key={`${slide.imageAlt}-mobile`}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to impact slide ${index + 1}`}
                  className={`h-2 w-2 rounded-full transition duration-300 ${
                    activeSlide === index
                      ? "scale-105 bg-[#25c84c]"
                      : "bg-[#e6ddbf]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f7f4e8] px-6 py-20 md:px-10 md:py-28">
        <div
          className="relative mx-auto max-w-7xl"
          onMouseEnter={() => setIsValuePaused(true)}
          onMouseLeave={() => setIsValuePaused(false)}
          onPointerDown={() => setIsValuePaused(true)}
          onPointerUp={() => setIsValuePaused(false)}
          onPointerCancel={() => setIsValuePaused(false)}
        >
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center text-[2.6rem] leading-[1.02] font-boska font-bold text-[#231f20] md:text-[40px]"
          >
            Defining Value Creation for Social Enterprises
          </motion.h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={`value-slide-${activeValueSlide}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -22 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mt-14"
            >
              <motion.h3
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-center text-[2rem] leading-tight font-boska font-bold text-[#25c84c] md:text-[32px]"
              >
                {currentValueSlide.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
                className="mx-auto mt-5 max-w-6xl text-center text-[1.2rem] leading-[1.7] text-[#4e4e4e] md:text-[20px]"
              >
                {currentValueSlide.description}
              </motion.p>

              <div className="relative mt-14 md:mt-16">
                <div
                  className={`grid gap-6 md:gap-7 ${
                    currentValueSlide.cards.length === 5
                      ? "md:grid-cols-5"
                      : "md:grid-cols-3"
                  }`}
                >
                  {currentValueSlide.cards.map((card, index) => (
                    <motion.div
                      key={`${currentValueSlide.title}-${card.title}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.12 + index * 0.08,
                        ease: "easeOut",
                      }}
                      className="flex min-h-[220px] flex-col justify-between rounded-[1.8rem] border border-[#cfd8be] bg-[#f6f3e8] p-7 shadow-[0_12px_35px_rgba(35,31,32,0.03)] md:h-[230px]"
                    >
                      <p className=" text-[1.05rem] leading-[1.35] text-[#575757] md:text-[16px]">
                        {card.title}
                      </p>

                      <div className="ml-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#eee7d5]">
                        <img
                          src={card.icon}
                          alt=""
                          className="h-12 w-12 object-contain md:h-14 md:w-14"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute right-0 top-[5px] hidden -translate-y-1/2 md:flex md:flex-col md:gap-5">
                  {valueCreationSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActiveValueSlide(index)}
                      aria-label={`Go to value creation slide ${index + 1}`}
                      className={`h-2 w-2 rounded-full transition duration-300 ${
                        activeValueSlide === index
                          ? "scale-105 bg-[#25c84c]"
                          : "bg-[#e6ddbf] hover:bg-[#d7cca6]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {currentValueSlide.footer ? (
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
                  className="mx-auto mt-12 max-w-6xl text-center text-[1.15rem] leading-[1.7] text-[#231F20] md:text-[20px]"
                >
                  {currentValueSlide.footer}
                </motion.p>
              ) : null}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-4 md:hidden">
            {valueCreationSlides.map((slide, index) => (
              <button
                key={`${slide.title}-mobile`}
                type="button"
                onClick={() => setActiveValueSlide(index)}
                aria-label={`Go to value creation slide ${index + 1}`}
                className={`h-2 w-2 rounded-full transition duration-300 ${
                  activeValueSlide === index
                    ? "scale-105 bg-[#25c84c]"
                    : "bg-[#e6ddbf]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="bg-white ">
        <div
          className="relative w-full min-h-[360px] overflow-hidden px-6 py-16 sm:min-h-[420px] md:h-[500px] md:px-16 md:py-24"
          style={{
            backgroundImage: `url(${greenColumn})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
          }}
        >
            

          
            <motion.div
              variants={quoteContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
              className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-x-3 gap-y-4 text-center font-boska text-[2rem] font-bold leading-[1.35] text-white sm:mt-20 sm:text-[2.4rem] md:mt-[140px] md:text-[42px]"
            >
              {quoteText.map((word) => (
                <motion.span
                  key={word}
                  variants={quoteWord}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[3rem] leading-none font-boska font-bold text-[#231F20] md:text-[40px]"
          >
            Programs
          </motion.h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {programsShowcase.map((program, index) => (
              <motion.article
                key={program.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index * 0.12}
                className="group mx-auto w-full max-w-[430px] overflow-hidden rounded-[2rem] border border-[#ece7cf] shadow-[0_20px_55px_rgba(35,31,32,0.08)] transition duration-300 hover:-translate-y-2 hover:bg-[#25c84c] active:-translate-y-2 active:bg-[#25c84c] focus-within:-translate-y-2 focus-within:bg-[#25c84c]"
              >
                <div className="overflow-hidden rounded-t-[2rem] bg-[#f3efdc]">
                  <img
                    src={programVisual}
                    alt={program.title}
                    className="h-[220px] w-full object-contain transition duration-500 sm:h-[260px] md:h-[300px]"
                  />
                </div>

                <div className="flex items-center justify-between px-6 py-6 md:px-7">
                  <p className="text-[1.15rem] text-[#5d6a7b] transition duration-300 group-hover:text-white group-active:text-white group-focus-within:text-white">
                    {program.title}
                  </p>

                  <Link
                    to={program.path}
                    className="inline-flex items-center gap-2 text-[1.05rem] font-medium text-[#231f20] transition duration-300 group-hover:text-white group-active:text-white group-focus-within:text-white"
                  >
                    Explore
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className=" px-6 pb-24 pt-8 md:px-10 md:pb-32 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2 shadow-[0_10px_30px_rgba(35,31,32,0.08)]">
              {Object.keys(mediaShowcase).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveMediaTab(tab)}
                  className={`rounded-xs px-4 py-2 text-[1.1rem] leading-none transition duration-300 sm:px-6 sm:py-3 sm:text-[1.25rem] md:px-10 md:py-4 md:text-[20px] ${
                    activeMediaTab === tab
                      ? "bg-[#f3efdf] font-bold text-[#231f20] shadow-[0_10px_24px_rgba(35,31,32,0.12)]"
                      : "text-[#231f20]/85 hover:text-[#231f20] active:text-[#231f20]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMediaTab}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
            >
              {currentMediaItems.map((item, index) => (
                <motion.article
                  key={`${activeMediaTab}-${item.title}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index * 0.08}
                  className="group"
                >
                  <div className="overflow-hidden rounded-[1.8rem] bg-white shadow-[0_18px_45px_rgba(35,31,32,0.12)] transition duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_26px_60px_rgba(35,31,32,0.16)] group-active:-translate-y-2 group-active:shadow-[0_26px_60px_rgba(35,31,32,0.16)] group-focus-within:-translate-y-2 group-focus-within:shadow-[0_26px_60px_rgba(35,31,32,0.16)]">
                    <div className="relative h-[240px] sm:h-[260px] md:h-[300px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-25 group-active:scale-105 group-active:opacity-25 group-focus-within:scale-105 group-focus-within:opacity-25"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-[#23C550]/0 transition duration-300 group-hover:bg-[#23C550]/50 group-active:bg-[#23C550]/50 group-focus-within:bg-[#23C550]/50" />

                      {activeMediaTab === "Reports" ? (
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                          <a
                            href={item.image}
                            download={item.downloadName}
                            className="pointer-events-auto rounded-md bg-white px-8 py-4 text-[1.05rem] font-medium text-[#231f20] opacity-100 shadow-[0_10px_24px_rgba(35,31,32,0.12)] transition duration-300 hover:bg-[#f5f1e3] active:bg-[#f5f1e3] md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
                          >
                            Download
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <h3 className="mt-5 text-[1.15rem] text-[#3f3f3f] md:text-[1.25rem]">
                    {item.title}
                  </h3>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </section>
  );
};

export default OurImapct;
