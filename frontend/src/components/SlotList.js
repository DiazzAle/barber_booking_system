import React from 'react';
import Slot from './Slot';
const SlotList = ({ slots, onBook }) => {
 if (slots.length === 0) {
   return <div>No slots available</div>;
 }
 return (
<div className="slot-list">
     {slots.map(slot => (
<Slot key={slot._id} slot={slot} onBook={onBook} />
     ))}
</div>
 );
};
export default SlotList;