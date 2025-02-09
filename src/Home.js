// Home.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Barbers from './components/Barbers';
import Pricing from './components/Pricing';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Slider from './components/Slider';
import './styles.css';
import Testimonials from './components/Testimonials';

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <About />
      <Services />
      <Testimonials />
      <Barbers />
      <Pricing />
      <Appointment />
      <Contact />
    </div>
  );
}

export default Home;
