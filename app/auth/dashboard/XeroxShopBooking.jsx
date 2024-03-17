"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const XeroxShopBooking = () => {

  const [bookedSlots, setBookedSlots] = useState([]);
  const router = useRouter();

  const bookSlot = (shopId, slotTime) => {
      router.push(`/auth/uploa?shopId=${shopId}&slotTime=${slotTime}`);
    
    
  };


  const timeSlots = [
    '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

 
  const shopNames = ['Xerox Shop 1', 'Xerox Shop 2', 'Xerox Shop 3', 'Xerox Shop 4', 'Xerox Shop 5'];

  return (
    <div className="container mx-auto p-4">
   

      
      {shopNames.map((shopName, index) => (
        <section key={index} className="mt-8">
          <div className="shop-container">
            <h3 className="text-xl font-semibold text-purpel">{shopName}</h3>
            <div className="shop-buttons  border-zinc-50 bg-inherit-500 shadow-lg shadow-primary_color1/80 ... rounded-lg ...">
              
              {timeSlots.map((slot, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md inline-block mr-4 mb-4  ">
                  <p className="text-lg font-semibold">{slot}</p>
                
                  <button
                    onClick={() => bookSlot(index + 1, slot)} 
                    className="mt-2 bg-primary_color1 hover:bg-white hover:text-black text-white px-4 py-2 rounded-md border-neutral-50 focus:outline-none"
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
