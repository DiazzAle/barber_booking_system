const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config');
exports.register = async (req, res) => {
   const { name, email, password, role } = req.body;
   try {
       const existingUser = await User.findOne({ email });
       if (existingUser) {
           return res.status(400).json({ message: 'User already exists' });
       }
       const hashedPassword = await bcrypt.hash(password, 10);
       const newUser = new User({ name, email, password: hashedPassword, role });
       await newUser.save();
       res.status(201).json({ message: 'User registered successfully' });
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};
exports.login = async (req, res) => {
   const { email, password } = req.body;
   try {
       const user = await User.findOne({ email });
       if (!user) {
           return res.status(400).json({ message: 'Invalid credentials' });
       }
       const isMatch = await bcrypt.compare(password, user.password);
       if (!isMatch) {
           return res.status(400).json({ message: 'Invalid credentials' });
       }
       const payload = { id: user.id, role: user.role };
       const token = jwt.sign(payload, config.secretOrKey, { expiresIn: '1h' });
       res.status(200).json({ token });
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};