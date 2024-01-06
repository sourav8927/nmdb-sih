const jwt = require('jsonwebtoken');
const RehabCenter = require('../models/RehabCenter');
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const { centerName, place, affiliationId, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const rehabCenter = new RehabCenter({ centerName, place, affiliationId, password:hashedPassword });
    await rehabCenter.save();
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.signin = async (req, res) => {
  try {
    const { affiliationId, password } = req.body;
    
    // Find the rehabCenter in the database based on affiliationId
    const rehabCenter = await RehabCenter.findOne({ affiliationId });

    if (!rehabCenter) {
      // If the rehabCenter is not found, return an error
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = bcrypt.compareSync(password, rehabCenter.password);

    if (!isPasswordValid) {
      // If the password is invalid, return an error
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If everything is fine, signin is successful
    res.status(200).json({ message: 'Signin successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};

exports.requireSignIn = (req, res, next) => {
  // Check if user is authenticated
  // Add your advanced authentication logic here
  const Authenticated = isAuthenticated(req);
  
  if (Authenticated) {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(401).json({ error: 'Unauthorized. Sign in, peasant!' });
  }
};

// Function to check if the user is authenticated using JWT
function isAuthenticated(req){
  // Retrieve the token from the request header or wherever you store it
  const token = req.header('Authorization');

  if (!token) {
    return false;

  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'vengeance'); 
    // If everything is fine, consider the user as authenticated
    return true;
  } catch (error) {
    // Token verification failed
    return false;
  }
};
