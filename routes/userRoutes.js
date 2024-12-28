const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/save', async (req, res) => {
    const { email, answers, isForm2 } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }


    if (isForm2) {
        try {
            const user = new User({
                email,
                answers: Array(20).fill(null), 
            });
            await user.save();
            res.status(200).json({ message: 'User saved successfully (Form 2)', user });
        } catch (err) {
            res.status(500).json({ message: 'Error saving user for Form 2', error: err.message });
        }
    } else {
      
        if (!answers || answers.length !== 19) {
            return res.status(400).json({ message: 'Answers for 19 questions are required for Form 1' });
        }
        try {
            const user = new User({
                email,
                answers: answers || Array(20).fill(null), 
            });
            await user.save();
            res.status(200).json({ message: 'User saved successfully (Form 1)', user });
        } catch (err) {
            res.status(500).json({ message: 'Error saving user for Form 1', error: err.message });
        }
    }
});

module.exports = router;
