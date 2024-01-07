const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/add_ben', async (req, res) => {
    try {
        const newData = new User(req.body);
        const savedData = await newData.save();
        res.json(savedData);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;