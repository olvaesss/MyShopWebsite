const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require(`${__dirname}/myshopwebsite-4ffa7-firebase-adminsdk-yojkb-a75865fe9e.json`);
initializeApp({
    credential: cert(serviceAccount)
});
const db = getFirestore();  
const express = require('express');
const server = express();
const path = require ('path');
const urlencodedParser = express.urlencoded({extended: false});


let count=0;


server.use(express.static(path.join(__dirname, 'public')));

server.post('/Register', urlencodedParser, (req,res)=>{
    count+=1;
    const docRef = db.collection('Users').doc(String(count));
    docRef.set({
        ID:count,
        Name:req.body.Name,
        Email:req.body.Email,
        Password:req.body.Password,
    });
    res.sendFile(`${__dirname}/public/HTML/index.html`);
});

server.post('/Login', urlencodedParser, (req,res)=>{
    console.log(req.body);
    let LogUser = new User;
    // Полуучение Почты и Пароля с бд
    // LogUser.Name=
    // LogUser.Password=
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

server.get('/favicon.ico', (res,req)=>{
    res.sendFile(`${__dirname}/favicon.ico`);
});

server.get('/Check_Register',(req,res)=>{
    res.sendFile(`${__dirname}/public/HTML/index.html`);
})

server.listen(2000,()=>{
    console.log("Server running at http://localhost:2000/")
})

