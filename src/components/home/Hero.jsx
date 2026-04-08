import heroImg from "../../assets/heroImg.png";
import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "Take your innovation to the next level",
    button: "Apply now ->",
  },
  {
    title: "Vilgro is certified as an equivalent to a U.S public charity",
    button: "Learn more ->",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setAnimate(false);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextIndex = (index + 1) % slides.length;

  return (
    <section
      className="relative flex min-h-[360px] items-center overflow-hidden text-white sm:min-h-[480px] md:min-h-[560px] lg:min-h-[600px]"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "68% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 " />

      <div className="relative w-full overflow-hidden px-4 py-8 sm:px-6 sm:py-12 md:py-16 md:pl-20">
        <div className="relative min-h-[170px] sm:min-h-[220px] md:min-h-[280px]">
          <div
            className={`absolute w-full max-w-[92%] transition-all duration-700 ease-out sm:max-w-[85%] md:max-w-3xl md:pl-6 ${
              animate ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            <h1 className="mb-4 max-w-3xl font-boska text-2xl font-bold leading-tight text-white sm:text-4xl md:mb-6 md:text-5xl md:leading-[1.15]">
              {slides[index].title}
            </h1>
            <button className="rounded-full bg-white px-5 py-2 text-xs font-medium text-black transition-colors duration-300 hover:bg-gray-200 sm:px-6 sm:py-3 sm:text-sm md:text-base">
              {slides[index].button}
            </button>
          </div>

          <div
            className={`absolute w-full max-w-[92%] transition-all duration-700 ease-out sm:max-w-[85%] md:max-w-3xl md:pl-6 ${
              animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <h1 className="mb-4 max-w-3xl font-boska text-2xl font-bold leading-tight text-white sm:text-4xl md:mb-6 md:text-5xl md:leading-[1.15]">
              {slides[nextIndex].title}
            </h1>
            <button className="rounded-full bg-white px-5 py-2 text-xs font-medium text-black transition-colors duration-300 hover:bg-gray-200 sm:px-6 sm:py-3 sm:text-sm md:text-base">
              {slides[nextIndex].button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

