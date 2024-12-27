const express = require('express');
const User = require('../models/User');
const router = express.Router();


router.post('/save', async (req, res) => {
    const { email, answers } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }
    try {  
        const user = new User({
            email,
            answers: answers || Array(20).fill(null), 
        });
        await user.save();
        res.status(200).json({ message: 'User saved successfully', user });
    } catch (err) {
        res.status(500).json({ message: 'Error saving user', error: err.message });
    }
});

module.exports = router;
