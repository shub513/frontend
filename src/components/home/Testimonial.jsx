import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import semi from "../../assets/semi.png";

const testimonials = [
  {
    text: "For nearly two decades, Villgro has been an invaluable partner to us - supporting early-stage inventions to develop into self-sustaining enterprises, and delivering value to underserved markets throughout India.",
    name: "Maggie Flanagan",
    role: "Program Officer",
  },
  {
    text: "Villgro's team has profound experience in the ecosystem of livelihoods and stands out in the rural sector owing to its ability to scale entrepreneurial innovations.",
    name: "DOEN Foundation",
    role: "",
  },
  {
    text: "Villgro has helped us scale impact-driven solutions across rural India with strong ecosystem support.",
    name: "John Doe",
    role: "Founder",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window === "undefined" ? 1280 : window.innerWidth
  );

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = viewportWidth < 768;
  const cardWidth = isMobile ? Math.min(290, Math.max(250, viewportWidth - 64)) : 320;
  const cardGap = isMobile ? 16 : 40;
  const trackStep = cardWidth + cardGap;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="overflow-hidden bg-[#FBF8EB] px-4 py-12 sm:px-6 sm:py-24">
      <div className="relative mx-auto grid max-w-7xl items-start gap-8 md:grid-cols-2 md:gap-16">
        <div className="max-md:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 font-serif text-4xl leading-tight sm:mb-10 sm:text-5xl"
          >
            Hear from the <br /> community
          </motion.h2>
        </div>

        <motion.img
          src={semi}
          alt="quote"
          initial={{ opacity: 1, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pointer-events-none absolute left-[500px] top-[10%] hidden w-24 md:block"
        />

        <div className="relative mx-auto w-full max-w-[660px] overflow-hidden">
          <motion.div
            className="flex"
            style={{ gap: `${cardGap}px` }}
            animate={{ x: `-${current * trackStep}px` }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            {testimonials.map((item, index) => {
              const isActive = index === current;

              return (
                <div
                  key={index}
                  style={{ width: `${cardWidth}px` }}
                  className={`min-h-[360px] shrink-0 rounded-[40px] p-6 transition-all duration-500 sm:h-[400px] sm:p-8 ${
                    isActive ? "scale-105 bg-green-500 text-black" : "bg-[#C8D4C0] text-gray-600 opacity-50"
                  }`}
                >
                  <p className="mb-6 mt-2 text-sm leading-relaxed sm:mt-6">{item.text}</p>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm">{item.role}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-4 sm:mt-12">
        <button
          onClick={prevSlide}
          className="h-10 w-10 rounded-full bg-[#E6DCC6] transition hover:bg-black hover:text-white active:bg-black active:text-white"
        >
          {"<"}
        </button>

        <button
          onClick={nextSlide}
          className="h-10 w-10 rounded-full bg-[#E6DCC6] transition hover:bg-black hover:text-white active:bg-black active:text-white"
        >
          {">"}
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
