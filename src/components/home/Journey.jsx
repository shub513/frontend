import React from "react";
import { motion } from "framer-motion";
import founderImg from "../../assets/founder.png";

const Journey = () => {
  return (
    <section className="bg-[#f6f5f4] px-4 py-16 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 text-[56px] leading-[0.92] font-serif md:text-5xl md:leading-tight"
          >
            Our journey over the years
          </motion.h2>

          {/* MOBILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex justify-center md:hidden"
          >
            <img
              src={founderImg}
              alt="founder"
              className="h-[170px] w-[170px] rounded-full border border-gray-300 object-cover"
            />
          </motion.div>

          <p className="mx-auto mb-6 max-w-md leading-relaxed text-gray-700 md:mx-0">
            Rural Innovations Network was founded in 2001 by Paul Basil, with a
            mission to create impactful, innovative, and successful social
            enterprises.
          </p>

          <p className="mx-auto mb-8 max-w-md leading-relaxed text-gray-700 md:mx-0">
            Core to our work is the belief that market-based models are a
            powerful way to solve social problems and create impact at scale. By
            capacitating these models with the right resources and knowledge,
            they are a sustainable way of creating lasting social impact.
          </p>

          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            href="#"
            className="inline-block border-b border-black pb-1 font-medium hover:opacity-70"
          >
            Learn how we scale innovations for impact
          </motion.a>
        </div>

        {/* DESKTOP IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden justify-center md:flex"
        >
          <img
            src={founderImg}
            alt="founder"
            className="h-[300px] w-[300px] rounded-full border border-gray-300 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
