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
        {/* <Route path="/portfolio/Dani-hotels" element={<DaniHotels />} /> */}

        <Route path="/getQuote" element={<GetQuotePage/>} />
        <Route path="/thank-you" element={<ThankYouPage/>} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
