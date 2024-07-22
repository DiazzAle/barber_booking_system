const Booking = require('../models/Booking');
const Slot = require('../models/Slot');
exports.createBooking = async (req, res) => {
   const { user, slot } = req.body;
   try {
       const existingSlot = await Slot.findById(slot);
       if (existingSlot.status === 'booked') {
           return res.status(400).json({ message: 'Slot already booked' });
       }
       const newBooking = new Booking({ user, slot, status: 'booked' });
       await newBooking.save();
       existingSlot.status = 'booked';
       await existingSlot.save();
       res.status(201).json(newBooking);
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};
exports.getBookings = async (req, res) => {
   try {
       const bookings = await Booking.find().populate('user').populate('slot');
       res.status(200).json(bookings);
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};
exports.cancelBooking = async (req, res) => {
   const { id } = req.params;
   try {
       const booking = await Booking.findById(id);
       if (!booking) {
           return res.status(404).json({ message: 'Booking not found' });
       }
       const slot = await Slot.findById(booking.slot);
       slot.status = 'available';
       await slot.save();
       booking.status = 'canceled';
       await booking.save();
       res.status(200).json({ message: 'Booking canceled' });
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};