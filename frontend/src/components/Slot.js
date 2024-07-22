import React from 'react';
const Slot = ({ slot, onBook }) => {
 const handleBook = () => {
   onBook(slot);
 };
 return (
<div className="slot">
<span>{slot.date} {slot.time}</span>
<span>{slot.status}</span>
     {slot.status === 'available' && (
<button onClick={handleBook}>Book</button>
     )}
</div>
 );
};
export default Slot;