import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles
import { Navigation, Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What Our Clients Say</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2, // Show 2 testimonials on tablets and larger screens
          },
          1024: {
            slidesPerView: 3, // Show 3 testimonials on desktop screens
          },
        }}
      >
        {/* Testimonial 1 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="client-info">
              <h3>ENRICO MARCELO</h3>
              <p>Client For 2 Years</p>
            </div>
            <div className="testimonial-text">
              <p>“If you want one of the best haircuts or shaves that will change your life, you need to head to Barber.”</p>
            </div>
            <div className="rating">
              <span>★★★★★</span>
            </div>
          </div>
        </SwiperSlide>

        {/* Testimonial 2 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="client-info">
              <h3>AKILL BALIMIDIS</h3>
              <p>Client For 2 Years</p>
            </div>
            <div className="testimonial-text">
              <p>“I showed him a photo, and he took it to the next level. The look worked best on me.”</p>
            </div>
            <div className="rating">
              <span>★★★★☆</span>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more testimonials as needed */}
      </Swiper>
    </section>
  );
};

export default Testimonials;