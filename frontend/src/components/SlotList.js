import React from 'react';
import Slot from './Slot';
const SlotList = ({ slots, onBook }) => {
 return (
<div className="slot-list">
     {slots.map(slot => (
<Slot key={slot._id} slot={slot} onBook={onBook} />
     ))}
</div>
 );
};
export default SlotList;