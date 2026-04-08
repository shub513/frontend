import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";
import rocket from "../../assets/rocket.png";

const data = [
  { year: "2017", text: "Launched iPitch platform", img: rocket },
  { year: "2018", text: "Released global playbook", img: rocket },
  { year: "2010", text: "INR 720M deployed", img: rocket },
  { year: "2011", text: "Launched livelihoods program", img: rocket },
  { year: "2012", text: "Gender inclusion launched", img: rocket },
  { year: "2013", text: "INR 720M deployed", img: rocket },
  { year: "2014", text: "Launched livelihoods program", img: rocket },
  { year: "2015", text: "Gender inclusion launched", img: rocket },
  { year: "2012", text: "Gender inclusion launched", img: rocket },
  { year: "2013", text: "INR 720M deployed", img: rocket },
  { year: "2014", text: "Launched livelihoods program", img: rocket },
  { year: "2015", text: "Gender inclusion launched", img: rocket },
];

const getTimelineLayout = (viewportWidth) => {
  const safeWidth = Math.max(viewportWidth || 1280, 320);
  const visible = safeWidth < 640 ? 1 : safeWidth < 1024 ? 3 : 5;
  const horizontalGutter = safeWidth < 640 ? 32 : safeWidth < 1024 ? 64 : 96;
  const availableWidth = Math.max(safeWidth - horizontalGutter, 220);
  const preferredItemWidth = safeWidth < 640 ? 260 : safeWidth < 1024 ? 210 : 240;
  const itemWidth = Math.max(160, Math.min(preferredItemWidth, availableWidth / visible));

  return { itemWidth, visible };
};

const Timeline = () => {
  const [index, setIndex] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window === "undefined" ? 1280 : window.innerWidth
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { itemWidth, visible } = useMemo(
    () => getTimelineLayout(viewportWidth),
    [viewportWidth]
  );

  const maxIndex = data.length - 1;
  const updateIndex = (value) => {
    setIndex(Math.max(0, Math.min(maxIndex, value)));
  };
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerWidth = itemWidth * visible;
  const centerOffset = containerWidth / 2 - itemWidth / 2;
  const translateX = centerOffset - index * itemWidth;

  return (
    <section className="relative overflow-hidden bg-[#F4F1EA] px-4 py-16 text-center sm:px-6 sm:py-24">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 flex flex-col items-center sm:mb-14"
      >
        <img src={data[index].img} alt="Timeline marker" className="mb-4 w-12" />
        <p className="max-w-md text-center text-gray-600">{data[index].text}</p>
      </motion.div>

      <div
        className="relative mx-auto overflow-hidden"
        style={{ width: `${containerWidth}px`, maxWidth: "100%" }}
      >
        <div className="absolute left-0 top-16 h-[2px] w-full -translate-y-1/2 bg-gray-300 sm:top-[72px]" />

        <motion.div
          className={`flex items-start ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          drag="x"
          dragElastic={0.08}
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={(e, info) => {
            setIsDragging(false);
            const moved = -info.offset.x / itemWidth;
            updateIndex(Math.round(index + moved));
          }}
          animate={{ x: translateX }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          {data.map((item, i) => {
            const distance = Math.abs(i - index);

            return (
              <div
                key={`${item.year}-${i}`}
                onClick={() => updateIndex(i)}
                className="flex shrink-0 cursor-pointer flex-col items-center px-2"
                style={{ width: `${itemWidth}px` }}
              >
                <p
                  className={`mb-4 min-h-[2.5rem] text-center text-xs leading-tight transition-all duration-300 sm:text-sm ${
                    distance === 0
                      ? "text-gray-700 opacity-100"
                      : distance === 1
                      ? "text-gray-500 opacity-70"
                      : "text-gray-400 opacity-30"
                  }`}
                >
                  {item.text}
                </p>

                <div
                  className={`mb-4 mt-1 h-4 w-4 rounded-full transition-all duration-300 ${
                    i === index ? "scale-125 bg-green-500" : "bg-gray-400 opacity-50"
                  }`}
                />

                <span
                  className={`leading-none transition-all duration-300 ${
                    distance === 0
                      ? "text-4xl font-bold text-black sm:text-5xl"
                      : distance === 1
                      ? "text-2xl text-gray-500 sm:text-3xl"
                      : "text-lg text-gray-400 opacity-50 sm:text-xl"
                  }`}
                >
                  {item.year}
                </span>
              </div>
            );
          })}
        </motion.div>

        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-10 bg-gradient-to-r from-[#F4F1EA] to-transparent sm:block md:w-20" />
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-10 bg-gradient-to-l from-[#F4F1EA] to-transparent sm:block md:w-20" />

        <button
          onClick={() => updateIndex(index - 1)}
          className="absolute left-1 top-16 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#E6DCC6] shadow"
          aria-label="Previous timeline item"
        >
          {"<"}
        </button>

        <button
          onClick={() => updateIndex(index + 1)}
          className="absolute right-1 top-16 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#E6DCC6] shadow"
          aria-label="Next timeline item"
        >
          {">"}
        </button>
      </div>

    
    </section>
  );
};

export default Timeline;
