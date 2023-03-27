const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// should we use app.use(static) to get card images from backend?
// Function to serve all static files
// inside cardImage directory.
console.log('dir', __dirname)
app.use('/static', express.static(path.resolve(__dirname, 'public'))); 


const uri =
  'mongodb+srv://jonathanvaldes570:thisismypassword@shark-jack-2.4mhezaq.mongodb.net/test';

const PORT = 3000;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Music',
});
mongoose.connection.once('open', () => {
  console.log('We in that Database');
});

// Static GET
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

//routes request to endpoint user for login/signup functionality
app.use('/user', userRouter, (req, res) => {
  res.status(200).json({ status: res.locals.status });
});

app.listen(3000, () => console.log('we listening'));
