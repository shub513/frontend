

import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contact from "../../assets/contact.png";

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-[#EBE4C6]">

      {/* 🔥 CURVE IMAGE */}
      <div className="absolute top-0 left-0 z-0 w-full overflow-hidden">
        <img
          src={contact}
          alt=""
          className="w-full object-cover"
        />
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-24">

        <h2 className="mb-10 text-4xl font-bold text-black sm:mb-12 sm:text-5xl md:mb-16">Contact us</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">

          {/* LEFT FORM */}
          <div className="flex flex-col">

            <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:mb-6 md:gap-5">
              <input type="text" placeholder="First Name" className="input-style" />
              <input type="text" placeholder="Last Name" className="input-style" />
            </div>

            <input
              type="email"
              placeholder="Email-id"
              className="input-style mb-4 w-full sm:mb-5 md:mb-6"
            />

            <textarea
              placeholder="Your Query"
              rows="4"
              className="input-style mb-6 w-full resize-none bg-white sm:mb-8 md:mb-10"
            />

            <div className="mb-8 md:mb-12">
              <button className="rounded-full bg-white px-8 py-3 font-medium text-black transition duration-300 hover:bg-black hover:text-white sm:px-10">
                Submit
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 lg:gap-10 mt-10">

            {/* HEAD OFFICE */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-black sm:text-xl md:text-lg lg:text-xl">Head Office</h3>

              <p className="flex gap-3 text-sm text-gray-700 sm:text-base">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-green-600" />
                <span>3rd Floor, IIT Madras Research Park, Kanagam Road, Taramani, Chennai — 600113.</span>
              </p>

              <p className="flex gap-3 text-sm text-gray-700 sm:text-base">
                <FaPhone className="mt-0.5 flex-shrink-0 text-green-600" />
                <span>+91-044 40057410</span>
              </p>

              <p className="flex gap-3 text-sm text-gray-700 sm:text-base">
                <FaEnvelope className="mt-0.5 flex-shrink-0 text-green-600" />
                <span>info@villgro.org</span>
              </p>
            </div>

            {/* BANGALORE */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-black sm:text-xl md:text-lg lg:text-xl">Bangalore</h3>

              <p className="flex gap-3 text-sm text-gray-700 sm:text-base">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-green-600" />
                <span>59, 3rd Floor, 14th Cross, 9th Main Rd, Indiranagar, Bengaluru, Karnataka 560038</span>
              </p>

              <p className="flex gap-3 text-sm text-gray-700 sm:text-base">
                <FaPhone className="mt-0.5 flex-shrink-0 text-green-600" />
                <span>+91-044 40057410</span>
              </p>

              <p className="flex gap-3 text-sm text-gray-700 sm:text-base">
                <FaEnvelope className="mt-0.5 flex-shrink-0 text-green-600" />
                <span>info@villgro.org</span>
              </p>
            </div>

          </div>
        </div>

        {/* SOCIAL */}
        <div className="mt-12 flex flex-wrap items-center gap-3 text-sm text-gray-700 sm:mt-16 md:mt-20">
          <span className="font-medium">Follow us on</span>
          <span className="hover:text-green-600 cursor-pointer transition">Facebook</span>
          <span className="hover:text-green-600 cursor-pointer transition">Instagram</span>
          <span className="hover:text-green-600 cursor-pointer transition">LinkedIn</span>
        </div>

      </div>
    </section>
  );
};

export default Contact;
