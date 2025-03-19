import React from "react";
import Crousal from "./Crousal";
import Testimonials from "./Testimonials";
import Process from "./Process";
import Articals from "./Articals";
import Contact from "./Contact";
import Footer from "../Footer";
import whatsapp from "../../assets/social2.svg";
import call from "../../assets/phone.webp"

const Home = () => {
  return (
    <div className="relative">
      <Crousal />
      <Testimonials />
      <Process />
      <Articals />
      <Contact />
      <Footer />

      <a
        href="https://wa.me/9821502078"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-6"
      >
        <img src={whatsapp} alt="WhatsApp" className="w-12 h-12" />
      </a>

      {/* <a
        href="https://wa.me/9821502078"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-9 left-3"
      >
        <img src={call} alt="WhatsApp" className="w-14 h-14" />
      </a> */}
    </div>
  );
};

export default Home;
