const express = require('express');
const { createBooking, getBookings, cancelBooking } = require('../controllers/bookingController');
const router = express.Router();
router.post('/', createBooking);
router.get('/', getBookings);
router.delete('/:id', cancelBooking);
module.exports = router;