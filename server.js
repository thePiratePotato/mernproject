const express = require('express');
const mongooes = require('mongoose');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');



// direct to app route
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');



// Table initalize or DB config
// using the keys.js via mongoURI
const db = require('./config/keys').mongoURI;

// Connect to mongoDB via mongooes
// then() to throw a sucessfullu conntected message
// use catch to throw an error
mongooes
    .connect(db)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log(err));
// req =  request and res, respond, setting message 'hello for initialize'
app.get('/', (req, res) => res.send('Hello'));

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


// setting Port to deploy on Heroku or run on port 500 at local server
const port = process.env.PORT || 3000;
// app.listen to specifify which port it listens to, using template string to tell which port it is running>>>> `` this is template string 
app.listen(port, () => console.log(`Server is running on port ${port}`));


// command to run = npm run server