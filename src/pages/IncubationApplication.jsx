import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const beneficiaryOptions = [
  "People at the base of the pyramid",
  "Rural poor",
  "Urban poor",
  "Rural or urban middle income",
  "Rural or urban high income",
];

const IncubationApplication = ({ mode = "login" }) => {
  const isRegister = mode === "register";

  return (
    <section
      className="min-h-screen bg-[#ffff] px-6 py-14 md:px-10 md:py-18"
      style={{ fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif' }}
    >
      
        <div className="mx-50 max-w-4xl">
        <Link to="/" className="inline-flex">
          <img src={logo} alt="Vilgro" className="h-20 w-auto md:h-24" />
        </Link>

        <h1 className="mt-8 text-[32px] font-medium tracking-[-0.03em] text-[#1b2430] md:text-[30px]">
          Incubation Application Form
        </h1>

        <div className="mx-[120px] max-w-4xl bg-[#F8F8F8]">

        <div className="mt-8 overflow-hidden  border-none    bg-[#F8F8F8] ">
          <div className="grid grid-cols-2 border-b border-[#e8e4da] bg-[#F8F8F8]">
            <Link
              to="/incubation-application/login"
              className={`px-6  text-center text-[22px] font-normal leading-[50px] transition-colors md:text-[26px] ${
                !isRegister
                  ? "border-b-4  border-[#1d2430] text-[#272727]"
                  : "text-[#515861] hover:text-[#1d2430]"
              }`}
            >
              Login
            </Link>

            <Link
              to="/incubation-application/register"
              className={`px-6  text-center text-[22px] font-normal leading-[50px] transition-colors md:text-[26px] ${
                isRegister
                  ? "border-b-4 border-[#1d2430] text-[#272727]"
                  : "text-[#515861] hover:text-[#1d2430]"
              }`}
            >
              Register
            </Link>
          </div>

          <div className="px-6 py-10 md:px-14 md:py-12">
            {!isRegister ? (
              <div className="mx-auto max-w-xl">
                <h2 className="text-[28px] font-bold text-[#1d2430] md:text-[26px]">
                  Already registered?
                </h2>

                <div className="mt-10 space-y-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-14 w-full rounded-[16px] border border-[#e4dfd3] bg-white px-5 text-[17px] text-[#1d2430] outline-none transition focus:border-[#8bb53f] focus:ring-2 focus:ring-[#d9e8b4]"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="h-14 w-full rounded-[16px] border border-[#e4dfd3] bg-white px-5 text-[17px] text-[#1d2430] outline-none transition focus:border-[#8bb53f] focus:ring-2 focus:ring-[#d9e8b4]"
                  />

                  <div className="flex flex-col gap-4 pt-1 text-[16px] text-[#374151] sm:flex-row sm:items-center sm:justify-between">
                    <label className="inline-flex items-center gap-3 font-semibold">
                      <input type="checkbox" className="h-4 w-4 rounded border-[#b8b19f]" />
                      Remember Me
                    </label>

                    <button
                      type="button"
                      className="text-left font-medium text-[#8bb53f] transition hover:text-[#6f9130] sm:text-right"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <button
                    type="button"
                    className="mt-3 inline-flex h-14 min-w-[180px] items-center justify-center rounded-full bg-[#e23625] px-8 text-[18px] font-bold text-white transition hover:bg-[#c82b1d]"
                  >
                    Log In
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="space-y-3">
                  <h2 className="text-[28px] font-bold text-[#1d2430] md:text-[26px]">
                    Register your enterprise
                  </h2>
                  <p className="max-w-2xl text-[15px] text-[#515861]">
                    Share the details of your organisation to begin the incubation application.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Name of the organisation"
                    className="h-12 rounded-[14px] border border-[#e4dfd3] bg-white px-4 text-[15px] text-[#1d2430] outline-none transition focus:border-[#8bb53f] focus:ring-2 focus:ring-[#d9e8b4]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-12 rounded-[14px] border border-[#e4dfd3] bg-white px-4 text-[15px] text-[#1d2430] outline-none transition focus:border-[#8bb53f] focus:ring-2 focus:ring-[#d9e8b4]"
                  />

                  <input
                    type="text"
                    placeholder="Name of Entrepreneur"
                    className="h-12 rounded-[14px] border border-[#e4dfd3] bg-white px-4 text-[15px] text-[#1d2430] outline-none transition focus:border-[#8bb53f] focus:ring-2 focus:ring-[#d9e8b4]"
                  />
                  <select className="h-12 rounded-[14px] border border-[#e4dfd3] bg-white px-4 text-[15px] text-[#1d2430] outline-none transition focus:border-[#8bb53f] focus:ring-2 focus:ring-[#d9e8b4]">
                    <option>Select stage</option>
                    <option>Idea</option>
                    <option>Early traction</option>
                    <option>Growth stage</option>
                  </select>

                  <input
                    type="tel"
                    placeholder="Mobile"
                    className="h-12 rounded-[14px] border border-[#e4dfd3] bg-white px-4 text-[15px] text-[#1d2430] outline-none transition focus:border-[#8bb53f] focus:ring-2 focus:ring-[#d9e8b4]"
                  />
                  <select className="h-12 rounded-[14px] border border-[#e4dfd3] bg-white px-4 text-[15px] text-[#1d2430] outline-none transition focus:border-[#8bb53f] focus:ring-2 focus:ring-[#d9e8b4]">
                    <option>Select sector</option>
                    <option>Climate Action</option>
                    <option>Healthcare</option>
                    <option>Livelihoods</option>
                  </select>

                  <textarea
                    rows="3"
                    placeholder="Address 1"
                    className="rounded-[16px] border border-[#e4dfd3] bg-white px-4 py-3 text-[15px] text-[#1d2430] outline-none transition focus:border-[#8bb53f] focus:ring-2 focus:ring-[#d9e8b4]"
                  />
                  <textarea
                    rows="3"
                    placeholder="Address 2"
                    className="rounded-[16px] border border-[#e4dfd3] bg-white px-4 py-3 text-[15px] text-[#1d2430] outline-none transition focus:border-[#8bb53f] focus:ring-2 focus:ring-[#d9e8b4]"
                  />
                </div>

                <div className="mt-7 grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="text-[15px] font-bold text-[#1d2430]">
                      Is your enterprise a?<span className="text-[#e23625]">*</span>
                    </p>
                    <div className="mt-3 space-y-3 text-[14px] text-[#374151]">
                      <label className="flex items-center gap-3">
                        <input type="radio" name="enterprise_type" />
                        Non-profit organization
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="radio" name="enterprise_type" />
                        For-profit organization
                      </label>
                    </div>
                  </div>

                  <div>
                    <p className="text-[15px] font-bold text-[#1d2430]">
                      Will your social enterprise be based in India?<span className="text-[#e23625]">*</span>
                    </p>
                    <div className="mt-3 space-y-3 text-[14px] text-[#374151]">
                      <label className="flex items-center gap-3">
                        <input type="radio" name="india_based" />
                        Yes
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="radio" name="india_based" />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-3 text-[15px] font-bold text-[#1d2430]">
                      Sector<span className="text-[#e23625]">*</span>
                    </p>
                    <select className="h-12 w-full border border-[#e4dfd3] bg-white px-4 text-[15px] text-[#1d2430] outline-none transition focus:border-[#8bb53f] focus:ring-2 focus:ring-[#d9e8b4]">
                      <option>Select</option>
                      <option>Climate Action</option>
                      <option>Healthcare</option>
                      <option>Inclusive Livelihoods</option>
                    </select>
                  </div>

                  <div>
                    <p className="mb-3 text-[15px] font-bold text-[#1d2430]">
                      Please select a Sub Sector<span className="text-[#e23625]">*</span>
                    </p>
                    <select className="h-12 w-full border border-[#e4dfd3] bg-white px-4 text-[15px] text-[#1d2430] outline-none transition focus:border-[#8bb53f] focus:ring-2 focus:ring-[#d9e8b4]">
                      <option>Select</option>
                      <option>Climate-smart agriculture</option>
                      <option>Waste management</option>
                      <option>Sustainable mobility</option>
                    </select>
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-[15px] font-bold text-[#1d2430]">
                    Who will be the beneficiaries of your product / service?<span className="text-[#e23625]">*</span>
                  </p>

                  <div className="mt-3 grid gap-3 text-[14px] text-[#374151] md:grid-cols-2">
                    {beneficiaryOptions.map((option) => (
                      <label key={option} className="flex items-center gap-3">
                        <input type="checkbox" />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-[15px] font-bold text-[#1d2430]">
                    What type of impact will your product / service have on the BoP / poor?<span className="text-[#e23625]">*</span>
                  </p>

                  <div className="mt-3 space-y-3 text-[14px] text-[#374151]">
                    <label className="flex items-center gap-3">
                      <input type="radio" name="impact_type" />
                      Direct
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="radio" name="impact_type" />
                      Indirect
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-10 inline-flex h-12 min-w-[140px] items-center justify-center rounded-full bg-[#e23625] px-8 text-[16px] font-bold text-white transition hover:bg-[#c82b1d]"
                >
                  Sign Up
                </button>

              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default IncubationApplication;
