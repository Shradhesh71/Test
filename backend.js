const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 8080;
const formidable = require('formidable') 
const { check, validationResult } = require('express-validator'); //to check the input is correct or not
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken'); 
 const secertkey = "secertkey";

app.use('/views',express.static('views'));// for serving static files
app.use(express.urlencoded({extended: true}));  // help to form data to this file

mongoose.connect('mongodb+srv://shradesh71:newone71@cluster0.4tegtua.mongodb.net/?retryWrites=true&w=majority/portfolio')
.then(()=>{
    console.warn("connect...");
});

app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

var contactSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
});

var Contact = mongoose.model('users',contactSchema);


app.post('/',[
    check('name').isLength({ min: 3 }).trim().escape(),
    check('email').isEmail().normalizeEmail(),
    check('password').custom(email => {
        if (alreadyHaveEmail(email)) {
        throw new Error('Email already registered')
        }
        }),
    ],(req, res) =>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.sendFile(__dirname + 'index.html');
    }).catch(()=>{
        res.status(400).sendFile(__dirname + '/index.html');
    })

    const user = {
        id:1,
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    };
    //  JWT Token
    jwt.sign({user},secertkey,{expiresIn:'300s'},(err,token)=>{
        res.sendFile(__dirname + '/index.html');
        console.log(token);
    })
    // JWT validation
    const verifyToken = async()=>{
        const token = await jwt.sign({user},secertkey,{expiresIn:'300s'});
        console.log(token);

        const userVer = await jwt.verify(token,secertkey);
        console.log(userVer);
    }
    verifyToken();


    console.log(req.body.username);
    name2 = req.body.username
    email = req.body.email
    password = req.body.password

    let outputToWrite = `the name of the client is ${name2}, 
    here mail ${email}
    and here password ${password}
    `   // for making string
    
    fs.appendFile('output.txt', outputToWrite,()=>{
            console.log('Finished writing');
            res.sendFile(__dirname + '/index.html');
        });
});

app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`);
});
