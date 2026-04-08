import React from "react";
import { motion } from "framer-motion";
import aboutBg from "../assets/about-bg.png";
import aboutBg2 from "../assets/about-bg2.png";
import globeImg from "../assets/globe.png";
import illustration from "../assets/illustration.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";

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

const About = () => {
  return (
    <section className="w-full overflow-hidden bg-white font-satoshi">
      <div
        className="relative min-h-[200px] bg-cover bg-center bg-no-repeat md:h-[700px]"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="relative mx-auto grid max-w-7xl gap-x-10 gap-y-10 px-6 pb-14 pt-14 md:grid-cols-[0.9fr_1.1fr] md:gap-y-14 md:px-10 md:pb-28 md:pt-20">
          <div className="relative z-10 max-w-2xl pr-20 pt-2 sm:pr-0 md:pt-8">
            <div>
              <motion.h4
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-4 text-3xl font-boska font-[700] text-white "
              >
                Our
              </motion.h4>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="mb-8 max-w-md text-[56px] leading-[0.9] font-boska font-bold text-white sm:text-6xl md:text-[50px]"
              >
                Mission
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="max-w-xl text-xl leading-[32px] text-[#1E1E1E] sm:text-2xl md:max-w-lg md:text-[28px]"
              >
                We make <span className="font-bold">innovative, impactful</span>{" "}
                social enterprises succeed.
              </motion.p>
            </div>

            <div className="mt-32 max-w-xl sm:mt-14 md:mt-36 lg:mt-59">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className=" text-4xl leading-none font-boska font-bold text-[#231f20] md:text-[40px] "
              >
                Why Villgro?
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                custom={1}
                className="text-lg leading-[1.6] text-[#444444] md:text-[1.2rem] mt-[30px]"
              >
                We believe inventions are critical to drive change and create
                impact at scale. We exist to make inventions get adopted and
                make communities resilient and improve their livelihoods.
              </motion.p>
            </div>
          </div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="pointer-events-none absolute bottom-[175px] right-[-18px] z-0 flex w-[210px] items-end justify-center sm:bottom-[155px] sm:right-0 sm:w-[260px] md:static md:w-auto md:justify-end"
          >
            <img
              src={illustration}
              alt="Villgro mission illustration"
              className="h-auto w-full max-w-[210px] sm:max-w-[260px] md:h-[500px] md:max-w-[500px]"
            />
          </motion.div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#f7f7f7] px-6 py-24 md:px-42 md:py-28">
        <div className="absolute left-1/2 top-0 h-32 w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-white" />
        <div className="relative mx-auto max-w-7xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="mb-14 text-4xl font-boska font-bold text-[#231f20] md:mb-16 md:text-[40px]"
          >
            What we do?
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {whatWeDoCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
                className="group flex min-h-[30px] flex-col rounded-[2rem] border border-[#cfd8be] bg-[#f8f8f3] p-9 shadow-[0_20px_45px_rgba(35,31,32,0.05)] transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-500 hover:shadow-[0_24px_60px_rgba(35,31,32,0.08)] md:min-h-[60px] md:p-10"
              >
                <p className="max-w-[18rem] text-[1.05rem] leading-[1.7] text-[#231f20] transition duration-300 md:text-[20px]">
                  {card.copy}
                </p>

                <div className="mt-auto flex justify-end pt-10">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#dfe2db] transition duration-300 group-hover:scale-105 group-hover:bg-white/20">
                    <img
                      src={card.icon}
                      alt=""
                      className="w-20 transition duration-300 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-auto bg-[#FBF8EB] px-6 py-12 md:h-[740px] md:py-8">
        <div className="mx-auto max-w-7xl">
          <div className=" text-center ">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className=" text-4xl font-boska font-bold mb-10 text-[#231f20] md:text-[40px]"
            >
              Here's how we work
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              custom={1}
              className="mx-auto max-w-3xl text-lg leading-[1.5] text-[#2d2d2d] mb-10 md:text-[20px]"
            >
              We help inventors and innovators working with under-served
              communities to get capital and unlock access to market.
            </motion.p>
          </div>

          <div className="grid gap-10  md:grid-cols-2 md:gap-12">
            {howWeWorkCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
                className={`flex min-h-[460px] hover:bg-green-500 flex-col items-center rounded-[1.9rem] border p-8 text-center transition duration-300 md:min-h-[500px] md:px-10 md:pb-12 md:pt-8 ${card.cardClassName}`}
              >
                <img
                  src={card.image}
                  alt=""
                  className={`mx-auto mb-8 object-contain md:mb-10 md:hover:translate-y-[-155px] ${card.imageClassName}`}
                />

                <p className="mt-auto max-w-[28rem] text-[1.05rem] leading-[1.9] md:text-[18px]">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

       

      <div
        className="relative overflow-hidden bg-[#FBF8EB] bg-cover bg-center bg-no-repeat px-6 py-20 md:px-10 md:py-4"
        style={{ backgroundImage: `url(${aboutBg2})` }}
      >
        <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center justify-center pt-6 md:min-h-[540px] md:pt-10">
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="pointer-events-none absolute right-10 top-2 hidden w-[210px] md:block lg:right-24 lg:top-0 lg:w-[300px]"
          >
            <img
              src={globeImg}
              alt="Globe illustration"
              className="w-full object-contain mix-blend-multiply"
            />
          </motion.div>

          <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center md:pt-36 lg:pt-44">
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-8 w-[180px] md:hidden"
            >
              <img
                src={globeImg}
                alt="Globe illustration"
                className="w-full object-contain mix-blend-multiply "
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              custom={1}
              className="max-w-4xl mt-[20px] font-boska font-bold text-[2rem] leading-[1.2] text-[#231f20] sm:text-[2.6rem]  md:text-[40px]"
            >
       
              
We do what it takes to build sustainable enterprises that drive measurable social impact, every day
            </motion.h2>

           
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default About;
