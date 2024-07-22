const Slot = require('../models/Slot');
exports.getSlots = async (req, res) => {
   try {
       const slots = await Slot.find();
       res.status(200).json(slots);
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};
exports.createSlot = async (req, res) => {
   const { date, time } = req.body;
   try {
       const newSlot = new Slot({ date, time, status: 'available' });
       await newSlot.save();
       res.status(201).json(newSlot);
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};
exports.updateSlot = async (req, res) => {
   const { id } = req.params;
   const { status } = req.body;
   try {
       const slot = await Slot.findByIdAndUpdate(id, { status }, { new: true });
       res.status(200).json(slot);
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};