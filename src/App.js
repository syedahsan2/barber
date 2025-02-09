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


function App() {
  return (
    <div>
      <Header />
      <Slider />
      <About />
      <Services />
      <Barbers />
      <Pricing />
      <Appointment />
      <Contact />
    </div>
  );
}

export default App;