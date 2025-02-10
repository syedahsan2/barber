import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact">
      <h2>CONTACT INFO</h2>
      <p>Need some additional information? Feel free to get in touch for more information.</p>
      <p>Phone: (555) 352-3209</p>
      <br/>
      <p>Address: 123 Michigan Ave, Chicago, Illinois 60616</p>
      <p>
        Email: <a href="mailto:barbershop@barber.com">barbershop@barber.com</a>
      </p>
      <p>Monday - Saturday: 10am - 7pm</p>
      <p>Sunday: 10am - 5pm</p>
      <br/>
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="#top">
          <IoIosArrowUp />
        </a>
      </div>
    </section>
  );
};

export default Contact;
