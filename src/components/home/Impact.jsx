import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 387, label: "Enterprises incubated" },
  { value: 82, label: "Women-led enterprises Incubated" },
  { value: 20.8, suffix: "M", label: "Lives impacted" },
  { value: 8000, label: "Direct jobs Created" },
  { value: 4.8, suffix: "Bn", label: "Seed funding raised (INR)" },
];

// 🔥 CUSTOM COUNTER COMPONENT
const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end, duration]);

  return (
    <span className="font-satoshi font-black">
      {Number.isInteger(end)
        ? Math.floor(count)
        : count.toFixed(1)}
      {suffix}
    </span>
  );
};

const Impact = () => {
  return (
    <section className="bg-[#f9f9f9] py-24 px-16">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 font-boska text-4xl font-bold text-[#231f20] md:text-[40px]"
        >
          Impact by our portfolio
        </motion.h2>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 text-center">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >

              {/* COUNTER */}
              <h3
                className="mb-2 text-4xl font-black text-green-500 md:text-[35px]"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                <Counter
                  end={item.value}
                  duration={2000}
                  suffix={item.suffix || ""}
                />
              </h3>

              {/* TEXT */}
              <p className="text-sm leading-[20px] font-bold text-[#231F20] md:text-[16px]">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Impact;
