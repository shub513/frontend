import { useState } from 'react';
import './App.css';

const timelineItems = [
  {
    year: '2021',
    text: 'Launched Powering Livelihoods and the Market Partnerships sector',
  },
  {
    year: '2023',
    text: 'Launched Gender Inclusion and Innovative Financing sectors',
  },
  {
    year: '2001',
    text: 'Rural Innovations Network (RIN) was set up',
    icon: true,
  },
  {
    year: '2002',
    text: 'First Impact Investment in India by RIN',
  },
  {
    year: '2006',
    text: 'Launched health and energy practices',
  },
];

function BulbIcon() {
  return (
    <svg viewBox="0 0 90 110" className="bulb-icon" aria-hidden="true">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <g stroke="#7a7a7a" strokeWidth="2">
          <path d="M45 8v-6" />
          <path d="M20 15l-5-5" />
          <path d="M70 15l5-5" />
          <path d="M10 35H4" />
          <path d="M86 35h-6" />
        </g>
        <path
          d="M45 12c-15 0-27 12-27 27 0 11 7 20 15 25 3 2 5 5 5 9h14c0-4 2-7 5-9 8-5 15-14 15-25 0-15-12-27-27-27z"
          fill="#ffc800"
          stroke="#665100"
          strokeWidth="3"
        />
        <path d="M45 27v16" stroke="#8c6f00" strokeWidth="3" />
        <path d="M45 43l-6 5" stroke="#8c6f00" strokeWidth="3" />
        <rect
          x="34"
          y="74"
          width="22"
          height="9"
          rx="4"
          fill="#f4f4f4"
          stroke="#666"
          strokeWidth="2"
        />
        <rect
          x="33"
          y="82"
          width="24"
          height="8"
          rx="4"
          fill="#f4f4f4"
          stroke="#666"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

function App() {
  const [activeIndex, setActiveIndex] = useState(2);
  const centerOffsets = [-2, -1, 0, 1, 2];

  const centeredItems = centerOffsets.map((offset) => {
    const index =
      (activeIndex + offset + timelineItems.length) % timelineItems.length;

    return {
      ...timelineItems[index],
      sourceIndex: index,
      isActive: offset === 0,
    };
  });

  const goPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? timelineItems.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === timelineItems.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <main className="timeline-page">
      <section className="timeline-card" aria-label="History timeline">
        <button
          type="button"
          onClick={goPrev}
          className="timeline-arrow"
          aria-label="Show previous milestone"
        >
          <span aria-hidden="true">&#8249;</span>
        </button>

        <button
          type="button"
          onClick={goNext}
          className="timeline-arrow timeline-arrow-right"
          aria-label="Show next milestone"
        >
          <span aria-hidden="true">&#8250;</span>
        </button>

        <div className="timeline-copy">
          {centeredItems.map((item) => (
            <article
              key={`${item.year}-${item.sourceIndex}`}
              className={`timeline-item ${item.isActive ? 'is-active' : ''}`}
            >
              {item.icon && item.isActive ? <BulbIcon /> : <div className="icon-gap" />}
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="timeline-track" aria-hidden="true">
          {centeredItems.map((item) => (
            <span
              key={`dot-${item.year}-${item.sourceIndex}`}
              className={`timeline-dot ${item.isActive ? 'is-active' : ''}`}
            />
          ))}
        </div>

        <div className="timeline-years">
          {centeredItems.map((item) => (
            <button
              type="button"
              key={`year-${item.year}-${item.sourceIndex}`}
              onClick={() => setActiveIndex(item.sourceIndex)}
              className={`timeline-year ${item.isActive ? 'is-active' : ''}`}
            >
              {item.year}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
