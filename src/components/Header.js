import React, { useState } from 'react';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header>
      <h1>BARBER</h1>
      <nav>
        {/* Regular Navigation for larger screens */}
        <ul className={`nav-links ${isSidebarOpen ? 'active' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#barbers">Barbers</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#appointment">Appointment</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger Menu for smaller screens */}
        <div className="hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={closeSidebar}>×</button>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#barbers">Barbers</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#appointment">Appointment</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;