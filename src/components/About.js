import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Barber</h2>
      <p>Our Story Starts Here</p>
      
      <div className="about-image-container">
        <img src="https://via.placeholder.com/600x400?text=Barber+Shop+Image" alt="Barber Shop" /> <br/>
        <img src="https://via.placeholder.com/600x400?text=Barber+Shop+Image" alt="Barber Shop" />
      </div>

      <p>WELCOME TO BARBER HAIR SALON AND BARBERSHOP</p>
      <p>GROOMING LIFE STYLE AND SELF CONFIDENCE</p>
      <p>TERRITORY OF PREMIUM QUALITY SINCE 1990</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>

      {/* Image with Text Overlay and Button */}
      <div className="image-with-text-container">
        <div className="image-overlay">
          <img
            src="https://via.placeholder.com/600x400?text=Barber+Shop+Image+Text+Overlay"
            alt="Barber Shop Overlay"
          />
          <div className="overlay-text">
            <h3>Visit Us Today!</h3>
            <p>Experience premium grooming services</p>
            <button className="cta-button">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
