import React, { useState, useEffect } from 'react';

const Slider = () => {
  const slides = [
    {
      image: './eg1.webp',
      text: 'Welcome to the Barber Shop!',
    },
    {
      image: './eg1.webp',
      text: 'Get the Best Cuts in Town!',
    },
    {
      image: './eg1.webp',
      text: 'Book Your Appointment Now!',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="slider-image"
        />
        <div className="slider-text">
          <h2>{slides[currentSlide].text}</h2>
        </div>
      </div>

      <div className="slider-nav">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;