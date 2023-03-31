const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/HTML/index.html`);
});

app.get('/Main', (req, res) => {
    res.sendFile(`${__dirname}/public/HTML/index.html`);
});

app.get('/Login', (req, res) => {
    res.sendFile(`${__dirname}/public/HTML/Login.html`);
});

app.get('/Register', (req, res) => {
    res.sendFile(`${__dirname}/public/HTML/Register.html`);
});

app.listen(2000,()=>{
    console.log("Server running at http://localhost:2000/")
})