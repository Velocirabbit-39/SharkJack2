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
  'mongodb+srv://olivia:thisismypassword@iterationproject.fasvdum.mongodb.net/?retryWrites=true&w=majority';

const PORT = 3000;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SharkJack2',
  });
  mongoose.connection.once('open', () => {
    console.log('We in that Database');
  });
}

// Static GET
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

//routes request to endpoint user for login/signup functionality
app.use('/user', userRouter, (req, res) => {
  res.status(200);
});

app.listen(3000, () => console.log('we listening'));
