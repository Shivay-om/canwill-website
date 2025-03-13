import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from '../src/components/Footer'
import Home from './components/Home/Home'
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import DaniHotels from './components/portfolio/DaniHotels';
import ContactPage from './components/contact/ContactPage';
import GetQuotePage from './components/getQuote/GetQuotePage';
import ScrollToTop from './components/ScrollToTop';
import ThankYouPage from './components/contact/ThankYouPage';
import Cordelia from './components/portfolio/Cordelia';
import Dhruv from './components/portfolio/Dhruv';
import Iyer from './components/portfolio/Iyer';
import HouseForest from './components/portfolio/HouseForest';
import ChingsuiHouse from './components/portfolio/ChingsuiHouse';
import Powai from './components/portfolio/Powai';
import Colonial from './components/portfolio/Colonial';
import Standard from './components/portfolio/Standard';
import Exquisite from './components/portfolio/Exquisite';

function App() {

  return (
    <Router>
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage/>} />

        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/portfolio/Dani-hotels" element={<DaniHotels />} />
        <Route path="/portfolio/cordelia" element={<Cordelia />} />
        <Route path="/portfolio/dhruv-residence" element={<Dhruv />} />
        <Route path="/portfolio/iyer-house" element={<Iyer />} />
        <Route path="/portfolio/house-of-forest" element={<HouseForest />} />
        <Route path="/portfolio/chingsui-house" element={<ChingsuiHouse />} />
        <Route path="/portfolio/powai-residence" element={<Powai />} />
        <Route path="/portfolio/colonial-abode" element={<Colonial />} />
        <Route path="/portfolio/standard-greases" element={<Standard />} />
        <Route path="/portfolio/exquisite-home" element={<Exquisite />} />

        <Route path="/getQuote" element={<GetQuotePage/>} />
        <Route path="/thank-you" element={<ThankYouPage/>} />

      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
