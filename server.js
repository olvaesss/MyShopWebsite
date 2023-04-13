const db= require('@firebase/firestore');
const express = require('express');
const server = express();
const path = require ('path');
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

let count=0

class User{
    constructor(ID){
        this.ID=ID
    }
    Name=String;
    Email=String;
    Password=String;
}



server.use(express.static(path.join(__dirname, 'public')));

server.post('/Register', urlencodedParser, (req,res)=>{
    count+=1;
    let newUser = new User(count);
    newUser.Name=req.body.Name;
    newUser.Email=req.body.Email;
    newUser.Password=req.body.Password;
    console.log(newUser);
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

server.get('/favicon', (res,req)=>{
    res.sendFile(`${__dirname}/public/Resources/favicon.ico`)
});

server.get('/Check_Register',(req,res)=>{
    res.sendFile(`${__dirname}/public/HTML/index.html`);
})

server.listen(2000,()=>{
    console.log("Server running at http://localhost:2000/")
})





let UserFlag=false
function DrawPassword(Input, Input_Repeat){
    Input=document.querySelector('.Password_Input').value
    Input_Repeat=document.querySelector('.Password_Input_Repeat').value
    if(Input==Input_Repeat){
        document.querySelector(".Passwords_Dont_Mathces").hidden='hidden'
        UserFlag=true
    }else{  
        document.querySelector(".Passwords_Dont_Mathces").removeAttribute(hidden='hidden')
        UserFlag=false
    }
    let arr_banned=['!','@','#','$','%','^','&','*','(',')','-','_','=','+',' ',',','<','.','>','/','?',']','[']
    let flag=true
    for(let i=0;i<=arr_banned.length;i++){
        if(Input.includes(arr_banned[i])===true){
            flag=false
            break
        }
    }
    if(flag===true){
        UserFlag=true
        document.querySelector(".Wrong_Symbols_password").hidden='hidden'}
    else{
        document.querySelector(".Wrong_Symbols_password").removeAttribute(hidden='hidden')
        UserFlag=false
    }
    console.log(Input.length)
    if(Input.length >= 8){
        document.querySelector(".Minimal_Password_Range").hidden='hidden'
        UserFlag=true
    }
    else{
        document.querySelector(".Minimal_Password_Range").removeAttribute(hidden='hidden')
        UserFlag=false
    }
    if(UserFlag===true){
        
    }
}