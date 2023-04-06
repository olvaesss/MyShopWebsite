const express = require('express');
const server = express();
const path = require('path');
const Database = require('@firebase/firestore')

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/HTML/index.html`);
});

server.get('/Login', (req, res) => {
    res.sendFile(`${__dirname}/public/HTML/Login.html`);
});

server.get('/Register', (req, res) => {
    res.sendFile(`${__dirname}/public/HTML/Register.html`);
});

server.get('/UserPage', (req, res) => {
    res.sendFile(`${__dirname}/public/HTML/UserPage`);
});

server.get('/Check_Register',(req,res)=>{
    res.sendFile(`${__dirname}/public/HTML/index.html`);
})

server.listen(2000,()=>{
    console.log("Server running at http://localhost:2000/")
})