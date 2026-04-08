
import React from "react";
import agri from "../../assets/agri.png";
import climate from "../../assets/climate2.png";
import health from "../../assets/health.png";
import inclusion from "../../assets/inclusion.png";

const data = [
  {
    title: "Climate-Smart Agriculture",
    desc: "Fostering innovations to reap a future of sustainable farming.",
    icon: agri,
  },
  {
    title: "Climate Action",
    desc: "Cultivating a greener future by nurturing sustainable innovations.",
    icon: climate,
  },
  {
    title: "Healthcare",
    desc: "Advancing medical innovations and driving transformation to improve lives.",
    icon: health,
  },
  {
    title: "Inclusive Livelihoods & Entrepreneurship",
    desc: "Nurturing inclusion, empowerment and diversity at every step.",
    icon: inclusion,
  },
];

const Expertise = () => {
  return (
    <section className="bg-[#fafafa] px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:py-20">
      
      {/* HEADER */}
      <div className="mx-auto mb-10 max-w-7xl sm:mb-12 md:mb-16">
        <h2 className="mb-3 text-5xl font-semibold text-[#8D8F92]/40 sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
          Expertise
        </h2>
        <p className="font-sans text-[20px] text-gray-700 sm:text-lg md:text-xl lg:text-2xl">
          We have deep technical expertise and experience in working with social enterprises
        </p>
      </div>

      {/* CARDS */}
      <div className="mx-auto grid grid-cols-1 gap-4 font-satoshi max-w-7xl sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        
        {data.map((item, i) => (
          <div
            key={i}
            tabIndex={0}
            className="
              flex min-h-[280px] flex-col justify-between rounded-2xl 
              border border-[#D8D5CE] bg-[#F8F6F1] 
              p-5 sm:p-6
              font-sans text-[#444444] cursor-pointer 
              transition-all duration-300 group

              hover:bg-green-500
              active:bg-green-500
              focus:bg-green-500
            "
          >
            <div className="max-w-[230px]">
              
              {/* TITLE */}
              <h3
                className="
                  font-satoshi 
                  text-[22px] sm:text-lg md:text-xl lg:text-xl
                  leading-tight tracking-[-0.02em] 
                  text-[#444444]

                  group-hover:text-black
                  group-active:text-black
                  group-focus:text-black
                "
              >
                {item.title}
              </h3>

              {/* DESC */}
              <p
                className="
                  mt-4 font-satoshi 
                  text-[24px] sm:text-base md:text-lg lg:text-lg
                  leading-relaxed text-[#8D8F92]

                 
                "
              >
                {item.desc}
              </p>
            </div>

            {/* ICON */}
            <div className="mt-6 flex justify-end sm:mt-8">
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="
                  h-12 w-12 rounded-full object-contain transition duration-300
                  
                  group-hover:scale-110
                  group-active:scale-110
                  group-focus:scale-110
                  
                  sm:h-14 sm:w-14 md:h-16 md:w-16
                "
              />
            </div>
          </div>
        ))}

      </div>

      {/* BUTTON */}
      <div className="mx-auto mt-8 max-w-7xl sm:mt-10 md:mt-12 lg:mt-14">
        <button className="flex items-center gap-2 rounded-full bg-[#E6DCC6] px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-green-500 sm:px-6 sm:py-3 md:px-8 md:text-base">
          Learn more
        </button>
      </div>

    </section>
  );
};

export default Expertise;


