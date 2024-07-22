const express = require('express');
const { getSlots, createSlot, updateSlot } = require('../controllers/slotController');
const router = express.Router();
router.get('/', getSlots);
router.post('/', createSlot);
router.patch('/:id', updateSlot);
module.exports = router;