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

//admin
let admin_login="admin@gmail.com"
let admin_password="adminQWE123"
//


server.use(express.static(path.join(__dirname, 'public')));

server.post('/Register', urlencodedParser, (req,res)=>{
    const docRef = db.collection('Users').doc(String(req.body.Email));
    docRef.set({
        Name:req.body.Name,
        Email:req.body.Email,
        Password:req.body.Password,
    });
    res.sendFile(`${__dirname}/public/HTML/index.html`);
});

server.get('/Admin', urlencodedParser, (req,res)=>{
    res.sendFile(`${__dirname}/public/HTML/admin.html`)
})

server.post('/Login', urlencodedParser, async (req,res)=>{
    console.log(req.body)
    if(req.body.Email==admin_login||req.body.Password==admin_password){
        res.sendFile(`${__dirname}/public/HTML/admin.html`)
    }
    else{
        const userRef = db.collection('Users').doc(String(req.body.Email));
        const doc = await userRef.get();
        if (!doc.exists) {
            res.sendFile(`${__dirname}/public/HTML/Login_Incorrect_Input.html`);
        } else {
            if(req.body.Password==doc.get('Password')){
                res.sendFile(`${__dirname}/public/HTML/index_reg.html`);
            }
            else{
                res.sendFile(`${__dirname}/public/HTML/Login_Incorrect_Input.html`);
            }
        }
    }
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

