import express, { urlencoded} from 'express';
const server = express();
import { join } from 'path';
const urlencodedParser = urlencoded({extended: false});
import { db } from './public/JS/firestore';
//admin
let admin_login="admin@gmail.com";
let admin_password="adminQWE123";
//




server.post('/Register', urlencodedParser, async (req,res)=>{
    const docRef = collection('Users').doc(String(req.body.Email));
    const doc = await docRef.get();
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
        const userRef = collection('Users').doc(String(req.body.Email));
        const doc = await userRef.get();
        if (!doc.exists) {
            res.send(document)
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

server.listen(2000,()=>{
    console.log("Server running at http://localhost:2000/")
})

