import React from "react";
import Crousal from "./Crousal";
import Testimonials from "./Testimonials";
import Process from "./Process";
import Articals from "./Articals";
import Contact from "./Contact";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>Luxury Home & Office Interiors | Can Will Design, Mumbai</title>
        <meta name="description" content="Transform your home or office with high-end interior & architectural designs. Bespoke luxury, timeless elegance, and expert craftsmanship. Get started today!" />
      </Helmet>

      
      <Crousal />
      <Testimonials />
      <Process />
      <Articals />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
