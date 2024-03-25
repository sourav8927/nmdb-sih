const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const user=require('./routes/userRoute')
const cors=require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors())

// Apply the middleware to all routes
app.use('/auth', authRoutes);
app.use('/user', user);
// Apply the middleware to specific routes
// app.get('/classified-page', authController.requireSignIn, (req, res) => {
//   res.json({ message: 'Welcome to the secret society! Shh, don\'t tell anyone.' });
// });

lurl="mongodb://localhost:27017/rehabCenterDB"
curl="mongodb+srv://nmdb:789456123@cluster0.nynylij.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(lurl)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
