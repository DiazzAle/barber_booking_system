import React, { useState } from 'react';
import axios from 'axios';
const BookingForm = ({ slot, onBookingSuccess }) => {
 const [userId, setUserId] = useState('');
 const handleSubmit = (e) => {
   e.preventDefault();
   axios.post('http://localhost:5000/api/bookings', {
     user: userId,
     slot: slot._id
   })
   .then(response => {
     onBookingSuccess(response.data);
   })
   .catch(error => console.error('Error booking slot:', error));
 };
 return (
<form onSubmit={handleSubmit}>
<h3>Book Slot for {slot.date} {slot.time}</h3>
<div>
<label>User ID:</label>
<input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
</div>
<button type="submit">Book</button>
</form>
 );
};
export default BookingForm;