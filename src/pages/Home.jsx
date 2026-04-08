import Blogs from "../components/home/Blog";
import Events from "../components/home/Events";
import Expertise from "../components/home/Expertise";
import Hero from "../components/home/Hero";
import Impact from "../components/home/Impact";
import Incubated from "../components/home/Incubated";
import Journey from "../components/home/Journey";
import MentorSection from "../components/home/MentorSection";
import Testimonials from "../components/home/Testimonial";
import Values from "../components/home/Values";
import ContactSection from "../components/sections/Contact";

import Timeline from "../components/home/Timeline"; 

const Home = () => {
  return (
    <>
      <Hero />
      <Expertise />
      <Events />
      <Incubated/>
      <Impact />
      <Values />
      
      
      <Journey />
      <Timeline/>
      <Testimonials />
      
      <MentorSection />
      <Blogs />
      <ContactSection />
    </>
  );
};

export default Home;
