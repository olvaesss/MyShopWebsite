const express = require('express');
const server = express();
const path = require('path');
const Database = require('@firebase/firestore')

const urlencodedParser = express.urlencoded({extended: false});

server.use(express.static(path.join(__dirname, 'public')));

server.post('/', urlencodedParser, (req,res)=>{
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
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