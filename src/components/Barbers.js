import React from 'react';

const Barbers = () => {
  const barbers = [
    {
      name: "Josh Armstrong",
      location: "Chicago",
      handle: "@josh_armstrong",
      image: "./bb-1.png", // Replace with actual image path
    },
    {
      name: "Jenny Morano",
      location: "Brooklyn",
      handle: "@jenny_morano",
      image: "./bb-2.png", // Replace with actual image path
    },
    {
      name: "Alberto Morano",
      location: "Los Angeles",
      handle: "@alberto_morano",
      image: "./bb-3.png", // Replace with actual image path
    }
  ];

  return (
    <section id="barbers">
      <h2>Our Barbers</h2>
      <p className="p-b">Meet Our Barbers</p>

      <div className="barber-list">
        {barbers.map((barber, index) => (
          <div className="barber-card" key={index}>
            <img src={barber.image} alt={barber.name} className="barber-img" />
            <div className="barber-info">
              <h3>{barber.name}</h3>
              <p>{barber.location} | {barber.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Barbers;
