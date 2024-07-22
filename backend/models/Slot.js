const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SlotSchema = new Schema({
   date: { type: Date, required: true },
   time: { type: String, required: true },
   status: { type: String, required: true, enum: ['available', 'booked'] }
});
module.exports = mongoose.model('Slot', SlotSchema);