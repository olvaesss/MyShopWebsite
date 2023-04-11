const firebase = require('@firebase/firestore')
const express = require('express');
const server = express();
const path = require('path');
const Database = require('@firebase/firestore')
const urlencodedParser = express.urlencoded({extended: false});
const firebaseConfig = {
  apiKey: "AIzaSyBg_gX6hmBiNxzbALLm7XsI7gjHtkYVDhQ",
  authDomain: "myshopwebsite-4ffa7.firebaseapp.com",
  projectId: "myshopwebsite-4ffa7",
  storageBucket: "myshopwebsite-4ffa7.appspot.com",
  messagingSenderId: "728881829192",
  appId: "1:728881829192:web:fa3b8da2de3a1c06f18f7d",
  measurementId: "G-1M8BFDRTBZ"
};


server.use(express.static(path.join(__dirname, 'public')));

server.post('/Register', urlencodedParser, (req,res)=>{
    console.log(req.body);
    res.send(`${req.body.Name} - ${req.body.Email}- ${req.body.Password}`);
    res.sendFile(`${__dirname}/public/HTML/index.html`);
});

server.post('/Login', urlencodedParser, (req,res)=>{
    console.log(req.body);
    res.send(`${req.body.Login}- ${req.body.Password}`);
    res.sendFile(`${__dirname}/public/HTML/index.html`);
});


server.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/HTML/index.html`);
});

server.get('/Login', (req, res) => {
    res.sendFile(`${__dirname}/public/HTML/Login.html`);
});

server.get('/Register', (req, res) => {
    res.sendFile(`${__dirname}/public/HTML/Register.html`);
});

server.get('/Account', (req, res) => {
    res.sendFile(`${__dirname}/public/HTML/UserPage.html`);
});

server.get('/Check_Register',(req,res)=>{
    res.sendFile(`${__dirname}/public/HTML/index.html`);
})

server.listen(2000,()=>{
    console.log("Server running at http://localhost:2000/")
})