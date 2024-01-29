const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/signout', authController.signout);


// Fortify the routes with middleware
const requireSignIn = authController.requireSignIn;
router.get('/classified-page', requireSignIn, (req, res) => {
  res.json({ message: 'Welcome to the secret society! Shh, don\'t tell anyone.' });
});

module.exports = router;
