import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import About from "../pages/About";
import Climate from "../pages/Climate";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import IncubationApplication from "../pages/IncubationApplication";
import OurImapct from "../pages/OurImapct";
import Programs from "../pages/Programs";
import Team from "../pages/Team";
import Health from "../pages/Health";
import Livelihood from "../pages/Livelihood";
import ClimateAgri from "../pages/ClimateAgri";
import Partnership from "../pages/Partnership";
import Admin from "../pages/Admin";
import BlogDetail from "../pages/BlogDetail";
import AllBlogs from "../pages/AllBlogs";
import Partner from "../pages/Partner";
import Mentor from "../pages/Mentor"; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/impact" element={<OurImapct />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/climate" element={<Climate />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/incubation-application/login"
          element={<IncubationApplication mode="login" />}
        />
        <Route
          path="/incubation-application/register"
          element={<IncubationApplication mode="register" />}
        />
         <Route path="/health" element={<Health />} />
        <Route path="/livelihood" element={<Livelihood />} />
        <Route path="/agriculture" element={<ClimateAgri />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/partnerships" element={<Partnership />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/mentor" element={<Mentor />} />


      </Route>
    </Routes>
  );
};

export default AppRoutes;
