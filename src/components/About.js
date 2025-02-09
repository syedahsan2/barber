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

            {/* New Section with Image and Text */}
          <div className="image-text-section">
          <div className="image-container">
          <img 
            src="./eg1.webp" 
            alt="Barber Shop with Text" 
            className="image-with-text" 
          />
          <div className="text-overlay">
            <p>Enhance your look with the finest grooming experience!</p>
            <button>test</button>
          </div>
        </div>
        </div>

    </section>
  );
};

export default About;
