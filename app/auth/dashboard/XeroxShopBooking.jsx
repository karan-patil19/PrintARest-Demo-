import React, { useState } from 'react';

const XeroxShopBooking = () => {
  // Define state variables for booked slots
  const [bookedSlots, setBookedSlots] = useState([]);

  // Define function to handle booking a slot
  const bookSlot = (shopId, slotTime) => {
    // Add logic to book the slot and update state accordingly
    // You may also need to integrate with your backend to store booking information
  };

  // Define array of time slots
  const timeSlots = [
    '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  // Define array of shop names
  const shopNames = ['Xerox Shop 1', 'Xerox Shop 2', 'Xerox Shop 3', 'Xerox Shop 4', 'Xerox Shop 5'];

  return (
    <div className="container mx-auto p-4">
      {/* <header className="bg-blue-900 text-white text-center py-4">
        <h1 className="text-2xl font-bold">PRINT-A-REST</h1>
      </header> */}

      {/* Repeat the section for each xerox shop */}
      {shopNames.map((shopName, index) => (
        <section key={index} className="mt-8">
          <div className="shop-container">
            <h3 className="text-xl font-semibold">{shopName}</h3>
            <div className="shop-buttons">
              {/* Map over timeSlots array to render available slots for this shop */}
              {timeSlots.map((slot, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md inline-block mr-4 mb-4">
                  <p className="text-lg font-semibold">{slot}</p>
                  {/* Add button to book slot */}
                  <button
                    onClick={() => bookSlot(index + 1, slot)} // Assuming shopId starts from 1
                    className="mt-2 bg-blue-900 hover:bg-gradient-to-b from-pink-400 to-pink-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none"
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default XeroxShopBooking;
