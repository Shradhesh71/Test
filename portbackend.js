const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const jwt = require('jsonwebtoken');
const port = 8088;
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

// connect to mongo database
mongoose.connect('mongodb+srv://shradesh71:newone71@cluster0.4tegtua.mongodb.net/?retryWrites=true&w=majority/portfolio')
.then(()=>{
    console.warn("connect...");
});

app.use('/static',express.static('static'));
app.use(express.urlencoded({extended: true}));

app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/Portfolio.html');   
});

var contactSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    emailsub:String,
    message:String,
})

var Contact = mongoose.model('users',contactSchema)
app.post('/',(req, res) =>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.sendFile(__dirname + '/Portfolio.html');
    }).catch(()=>{
        res.status(400).sendFile(__dirname + '/Portfolio.html');
    })
});
// start server
app.listen(port, ()=>{
    console.log(`the application started at ${port}`);
});