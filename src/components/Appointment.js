import React from 'react';

const Appointment = () => {
  return (
<section >
<h2>Appointment</h2>
      <p >Book Your Service
      </p>
      <p >Signup to our newsletters and get most of the community advices about there hair and bread styles to improve your life style</p>
      <form id="appointment">
        <label>
          Your Name:
          <input type="text" name="name" />
        </label>
        <label>
          Your Email:
          <input type="email" name="email" />
        </label>
        <label>
          Your Phone:
          <input type="tel" name="phone" />
        </label>
        <label>
          Choose A Barber:
          <select name="barber">
            <option value="">Choose a barber...</option>
            <option value="josh">Josh Armstrong</option>
            <option value="jenny">Jenny Morano</option>
            <option value="alberto">Alberto Morano</option>
          </select>
        </label>
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <label>
          Time:
          <input type="time" name="time" />
        </label>
        <label>
          Services:
          <select name="service">
            <option value="">Choose a service...</option>
            <option value="haircut">Haircut</option>
            <option value="beard-trim">Beard Trim</option>
            <option value="facial">Facial</option>
            <option value="head-shave">Head Shave</option>
          </select>
        </label>
        <button type="submit">BOOK AN APPOINTMENT</button>
      </form>
    </section>
  );
};

export default Appointment;
