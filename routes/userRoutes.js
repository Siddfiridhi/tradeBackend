const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/save', async (req, res) => {
    const { email, answers } = req.body;

    // Check if email is provided
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    // Validate answers for Form 1
    if (!answers || answers.length !== 19) {
        return res.status(400).json({ message: 'Answers for 19 questions are required' });
    }

    try {
        // Create a new user instance
        const user = new User({
            email,
            answers,
        });

        // Save the user to the database
        await user.save();

        res.status(200).json({ message: 'User saved successfully', user });
    } catch (err) {
        res.status(501).json({ message: 'Failed retrieve form data', error: err.message });
    }
});

module.exports = router;
