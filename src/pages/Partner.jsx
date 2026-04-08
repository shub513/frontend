import React from 'react'
import { motion } from 'framer-motion'

import impactBackground from '../assets/ourImpact-bg.png'
import impactIllustration from '../assets/ourImapct.png'

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const imageVariants = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
}

const Partner = () => {
  return (
    <>
      <section className="relative h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={impactBackground}
            alt="Impact background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl  px-6 py-14 lg:px-10">
          <div className="grid w-full gap-2 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-8"
            >
              <h1 className="text-[50px]  text-white/80">
                Partner With Us
              </h1>

              <p className="max-w-xl text-[28px] font-normal leading-[38px] text-[#030303] sm:text-[28px]">
                If you would like to use your expertise and network to help social enterprises scale, we want to hear from you.
              </p>

             
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="flex justify-end"
            >
              <img
                src={impactIllustration}
                alt="Partner illustration"
                className="w-full max-w-[540px] h-[400px] object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf6e8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
            className="mb-12 text-4xl font-bold text-[#1f1f1f] md:text-5xl"
          >
            Fill the form
          </motion.h2>

          <form className="space-y-8 rounded-[32px]  p-8  md:p-10">
            <div className="grid gap-6 lg:grid-cols-3">
              <input
                type="text"
                placeholder="First Name"
                className="h-12  border-b-1 bg-transparent px-4 text-sm text-[#333] outline-none transition "
              />
              <input
                type="text"
                placeholder="Last Name"
                className="h-12   border-b-1 bg-transparent px-4 text-sm text-[#333] outline-none transition "
              />
              <input
                type="text"
                placeholder="Organization"
                className="h-12 border-b-1 bg-transparent px-4 text-sm text-[#333] outline-none transition focus:border-[#1f7a33]"
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <input
                type="tel"
                placeholder="Mobile no."
                className="h-12 border-b-1 bg-transparent px-4 text-sm text-[#333] outline-none transition focus:border-[#1f7a33]"
              />
              <div className="relative">
                <select
                  className="h-12 w-full appearance-none border-b-1 bg-transparent px-4 text-sm text-[#333] outline-none transition focus:border-[#1f7a33]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Type of Partnership
                  </option>
                  <option value="distribution">Distribution</option>
                  <option value="mentorship">Mentorship</option>
                  <option value="investment">Investment</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#7a7a7a]">
                  ▾
                </span>
              </div>
              
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <input
                type="email"
                placeholder="Email - Id"
                className="h-12 border-b-1 bg-transparent px-4 text-sm text-[#333] outline-none transition focus:border-[#1f7a33]"
              />
              <input
                type="text"
                placeholder="Designation"
                className="h-12 border-b-1 bg-transparent px-4 text-sm text-[#333] outline-none transition focus:border-[#1f7a33]"
              />
              
            </div>
            <textarea
                rows="5"
                placeholder="Any further details you would like to share"
                className="w-full rounded-[10px]  border border-[#d7d0c0] bg-[#ffff] px-4 py-4 text-sm text-[#333] outline-none transition focus:border-[#1f7a33]"
              />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-center gap-3 text-sm text-[#4f4f4f]">
                <input
                  type="checkbox"
                  className="h-5 w-5  rounded border border-[#d7d0c0] text-[#1f7a33] focus:ring-[#1f7a33]"
                />
                I would like to subscribe to Villgro mailers.
              </label>

              <button
                type="submit"
                className=" h-12 items-center justify-center rounded-full bg-[#1bb944] px-8 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(27,185,68,0.25)] transition hover:bg-[#14912c]"
              >
                Partner with us →
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Partner