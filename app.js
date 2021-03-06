const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//can parse whatever information sent this is a Middleware
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

//Middleware 
app.use('/posts', postsRoute)


//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});



//Connect to MongoDB
//pass is rhino94 <= 
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('\n connected to DB!!!')
);

//How do we start listening to the server

app.listen(3000);