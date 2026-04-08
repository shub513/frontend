import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/value1.png";
import img2 from "../../assets/value2.png";
import img3 from "../../assets/value3.png";
import img4 from "../../assets/value4.png";

const values = [
  {
    title: "Bold",
    desc: "We embrace uncertainty, ambition, and limitless possibilities",
    img: img1,
  },
  {
    title: "Demonstrating integrity",
    desc: "We are transparent, candid and honest in our dealings",
    img: img2,
  },
  {
    title: "Empathetic",
    desc: "We walk in the shoes of our partners",
    img: img3,
  },
  {
    title: "Entrepreneurial",
    desc: "We take initiative and capitalize on opportunities",
    img: img4,
  },
];

const mobileCardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.12,
      ease: "easeOut",
    },
  }),
};

const Values = () => {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const [isMobileView, setIsMobileView] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    if (pause || isMobileView) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % values.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pause, isMobileView]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobileView) {
    return (
      <section className="bg-[#F4F1EA] px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
            className="mb-10 text-center font-serif text-4xl leading-tight"
          >
            Our guiding values
          </motion.h2>

          <div className="space-y-12">
            {values.map((item, i) => (
              <motion.article
                key={item.title}
                variants={mobileCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                custom={i}
                className="text-center"
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto w-full max-w-[260px] object-contain"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: true, amount: 0.4 }}
                />
                <motion.h3
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="mt-5 font-serif text-[36px] leading-none text-green-500"
                >
                  {item.title}
                </motion.h3>
                <p className="mx-auto mt-4 max-w-[260px] text-[22px] leading-[1.35] text-[#3d3d3d]">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-[#F4F1EA] px-6 py-24">
      <div
        className="relative mx-auto max-w-7xl"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        <h2 className="mb-16 text-center text-5xl font-serif">Our guiding values</h2>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={values[index].img} alt="value" className="w-[400px]" />
          </motion.div>

          <motion.div
            key={`${index}-text`}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 font-serif text-3xl text-green-500">{values[index].title}</h3>
            <div className="mb-4 h-[1px] bg-gray-300" />
            <p className="text-lg text-gray-700">{values[index].desc}</p>
          </motion.div>
        </div>

        <div className="absolute right-8 top-[350px] -translate-y-1/2 flex flex-col gap-3">
          {values.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                i === index ? "scale-110 bg-green-500" : "bg-[#D9CFB5] opacity-80 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
