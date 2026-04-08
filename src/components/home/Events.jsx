
import React from "react";
import { motion } from "framer-motion";
import eventImg from "../../assets/event(1).png";

const Events = () => {
  return (
    <section className="relative overflow-hidden">

      {/* GREEN BACKGROUND */}
      <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20">

        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-4 sm:px-6 md:gap-10 lg:gap-12">

          {/* TEXT (BOTTOM → TOP) */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 items-center text-[30px] font-bold text-[#8D8F92]/70 sm:mb-4 text-2xl md:text-xl">Events</h2>

            <h2 className="mb-6  text-3xl font-semibold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.3]">
              Discover what's new at Villgro →
            </h2>

            <button className="rounded-full bg-[#EBE4C6] px-4 py-2 text-xs font-medium text-black transition duration-300 hover:bg-[#23C550] sm:px-6 sm:py-3 sm:text-sm md:px-8 md:text-base">
              View all
            </button>
          </motion.div>

          {/* IMAGE (RIGHT → LEFT) */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <img
              src={eventImg}
              alt="event"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto transition sm:h-[250px]"
            />
          </motion.div>

        </div>
      </div>

     

    </section>
  );
};

export default Events;
