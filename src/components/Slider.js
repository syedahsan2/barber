import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  const slides = [
    {
      image: "./eg1.jpg",
      title: "hair salon · barbershop",
      subtitle: "SELF CONFIDENCE · GROOMING · LIFE STYLE",
    },
    {
      image: "./eg1.jpg",
      title: "Modern & Stylish Cuts",
      subtitle: "ELEVATE YOUR LOOK",
    },
    {
      image: "./eg1.jpg",
      title: "Book Your Appointment",
      subtitle: "LOOK SHARP, FEEL CONFIDENT",
    },
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="slider-image" />
              <div className="slider-overlay"></div>
              <div className="slider-text">
                <h2 className="title">{slide.title}</h2>
                <p className="subtitle">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
