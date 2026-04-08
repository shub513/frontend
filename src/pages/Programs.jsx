import React, { useState } from "react";
import { motion } from "framer-motion";

import bg from "../assets/bg.png";
import program from "../assets/program.png";

// animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
    },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.3 },
  },
};

// ✅ DATA
const data = {
  Current: {
    "Climate-Smart Agriculture": [
      { title: "AgriTech Growth Lab" },
      { title: "Sustainable Farming Accelerator" },
    ],
    Healthcare: [
      { title: "Health Innovation Program" },
    ],
    "Sector Agnostic": [
      { title: "Impact Startup Incubator" },
    ],
  },

  Past: {
    "Sector Agnostic": [
      { title: "NIDHI Accelerator" },
      {
        title:
          "Enabling COVID Resilience — An Accelerator program by Villgro & GIZ",
      },
      { title: "TANSEED 3.0" },
    ],
    Healthcare: [
      { title: "MedTech Accelerator 2022" },
    ],
    "Climate Action": [
      { title: "Climate Innovation Challenge" },
    ],
  },
};

const categories = [
  "Climate-Smart Agriculture",
  "Healthcare",
  "Climate Action",
  "Inclusive Livelihoods & Entrepreneurship",
  "Sector Agnostic",
  "Ecosystem Development",
];

const Programs = () => {
  const [activeTab, setActiveTab] = useState("Past");
  const [activeCategory, setActiveCategory] = useState("Sector Agnostic");

  const programs =
    data[activeTab][activeCategory] || [];

  return (
    <>
      {/* ================= HERO ================= */}
      <div
        className="flex min-h-[400px] w-full items-center bg-bottom bg-no-repeat bg-cover sm:min-h-[450px] md:min-h-[500px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">

            <div className="text-white">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-4 text-3xl font-serif sm:mb-5 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl"
              >
                Programs
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="max-w-xl text-base text-black sm:text-lg md:text-xl"
              >
                We build programs to incubate social enterprises that lie at the
                intersection of innovation, impact and scalability.
              </motion.p>
            </div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-end"
            >
              <img src={program} className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[420px]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= PROGRAM LIST ================= */}
      <div className="bg-[#F5F5F5] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">

          {/* Tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-6 text-base font-medium sm:mb-10 sm:gap-8 sm:text-lg md:mb-12 md:gap-10">
            {["Current", "Past"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveCategory("Sector Agnostic");
                }}
                className={`pb-2 transition ${
                  activeTab === tab
                    ? "text-black border-b-2 border-black"
                    : "text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">

            {/* SIDEBAR */}
            <div className="space-y-2 sm:space-y-3">
              {categories.map((item) => (
                <div
                  key={item}
                  onClick={() => setActiveCategory(item)}
                  className={`cursor-pointer rounded-lg px-3 py-2 transition sm:px-4 sm:py-3 ${
                    activeCategory === item
                      ? "bg-gray-300 text-black font-medium"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* PROGRAM CARDS */}
            <div className="space-y-4 md:col-span-2 md:space-y-6">

              {programs.length === 0 ? (
                <p className="text-gray-500">
                  No programs available for this category.
                </p>
              ) : (
                programs.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    custom={i}
                    className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-5 md:p-6"
                  >
                    <h3 className="max-w-md text-base font-semibold sm:text-lg">
                      {item.title}
                    </h3>

                    <div className="cursor-pointer text-sm text-gray-500 transition hover:text-black sm:text-base">
                      Read more →
                    </div>
                  </motion.div>
                ))
              )}

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;