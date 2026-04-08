import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/mentor.png";
import bgShape from "../../assets/green-shape.png";

const slides = [
  {
    title: "Mentor with Us",
    desc: "Join Villgro and empower the next generation of innovators by mentoring startups and shaping a brighter future for social impact ventures.",
    button: "Mentor with us ->",
  },
  {
    title: "Partner with Us",
    desc: "If you would like to share your experience and network to help social enterprises scale, we want to hear from you.",
    button: "Partner with us ->",
  },
];

const MentorSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div
        className="absolute inset-0 min-h-[560px] bg-cover bg-center bg-no-repeat sm:min-h-[620px] md:min-h-[420px]"
        style={{
          backgroundImage: `url(${bgShape})`,
        }}
      />

      <img
        src={heroImg}
        alt="mentor"
        className="absolute left-1/2 top-8 h-[180px] w-[280px] -translate-x-1/2 object-contain sm:top-10 sm:h-[220px] sm:w-[340px] md:left-auto md:right-16 md:top-auto md:bottom-12 md:h-[300px] md:w-[500px] md:translate-x-0 lg:right-30 lg:bottom-20 lg:h-[350px] lg:w-[600px] xl:h-[400px] xl:w-[750px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-[250px] text-center sm:px-6 sm:pt-[300px] md:px-8 md:pt-0 md:text-left">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[280px] sm:max-w-sm md:mx-0 md:max-w-md lg:max-w-lg xl:max-w-xl"
        >
          <h2 className="mb-5 font-boska text-[64px] leading-[0.9] text-white sm:mb-6 sm:text-[72px] md:mb-6 md:text-4xl md:leading-tight lg:text-5xl">
            {slides[index].title}
          </h2>

          <p className="mb-7 text-[20px] leading-[1.4] text-black sm:text-[22px] md:mb-6 md:text-lg">
            {slides[index].desc}
          </p>

          <button className="rounded-full bg-white px-6 py-3 text-[16px] font-medium text-black transition hover:scale-105 sm:px-7 sm:text-[17px] md:px-6 md:py-3 md:text-base">
            {slides[index].button}
          </button>
        </motion.div>

        <div className="mt-6 hidden gap-3 sm:mt-8 md:mt-10 md:flex">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 cursor-pointer rounded-full transition sm:h-2.5 sm:w-2.5 ${
                i === index ? "bg-black" : "bg-white opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
