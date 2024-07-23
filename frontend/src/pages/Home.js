import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SlotList from '../components/SlotList';
import BookingForm from '../components/BookingForm';
const Home = () => {
 const [slots, setSlots] = useState([]);
 const [selectedSlot, setSelectedSlot] = useState(null);
 useEffect(() => {
   axios.get('http://localhost:5000/api/slots')
     .then(response => {
       console.log('Slots fetched:', response.data); // Add this line
       setSlots(response.data);
     })
     .catch(error => {
       console.error('Error fetching slots:', error);
     });
 }, []);
 const handleBook = (slot) => {
   setSelectedSlot(slot);
 };
 const handleBookingSuccess = (newBooking) => {
   setSlots(slots.map(slot => slot._id === newBooking.slot ? { ...slot, status: 'booked' } : slot));
   setSelectedSlot(null);
 };
 return (
<div>
<h1>Available Slots</h1>
<SlotList slots={slots} onBook={handleBook} />
     {selectedSlot && (
<BookingForm slot={selectedSlot} onBookingSuccess={handleBookingSuccess} />
     )}
</div>
 );
};
export default Home;