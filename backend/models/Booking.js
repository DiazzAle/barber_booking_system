const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookingSchema = new Schema({
   user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
   slot: { type: Schema.Types.ObjectId, ref: 'Slot', required: true },
   status: { type: String, required: true, enum: ['booked', 'canceled'] }
});
module.exports = mongoose.model('Booking', BookingSchema);