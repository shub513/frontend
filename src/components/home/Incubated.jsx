import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgShape from "../../assets/green-shape.png";
import bulb from "../../assets/bulb.png";

const Incubated = () => {
  return (
    <section className="relative flex w-full min-h-[540px] items-center justify-center overflow-hidden py-2 md:min-h-[600px] md:py-4">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover w-full h-[850px] sm:h-[600px] md:h-[700px] lg:h-[550px]"
        style={{
          backgroundImage: `url(${bgShape})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:gap-10 md:px-6">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 mx-auto max-w-[290px] text-center text-white md:order-1 md:mx-0 md:max-w-none md:text-left"
        >
          <h2 className="mb-5 text-[44px] leading-[0.9] font-bold md:mb-6 md:text-[40px] md:leading-tight md:font-semibold">
            Get Incubated at Villgro
          </h2>

          <p className="mx-auto mb-8 max-w-[280px] text-[22px] leading-[1.35] text-black md:mx-0 md:mb-8 md:max-w-md md:text-[20px]">
            Does your innovation have the potential to create impact at scale?
          </p>

          <Link
            to="/incubation-application/login"
            className="inline-flex rounded-full bg-white px-8 py-3 text-[14px] font-medium text-black transition hover:bg-gray-100 md:px-6 md:py-3 md:text-[13px]"
          >
            Apply now
          </Link>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="order-1 flex justify-center pt-2 md:order-2 md:justify-end md:pt-0"
        >
          <img
            src={bulb}
            alt="Idea Bulb"
            className="w-[245px] object-contain sm:w-[280px] md:w-96 "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Incubated;
