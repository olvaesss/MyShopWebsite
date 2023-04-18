let Range_flag=false;
let Special_flag=false;
let Match_flag=false;
let Email_flag=false;

let Password_Inp;
let Password_Inp_Rep

function Password_Valid(Input){
    let arr_banned=['!','@','#','$','%','^','&','*','(',')','-','_','=','+',' ',',','<','.','>','/','?',']','['];
    let flag=true;
    for(let i=0;i<=arr_banned.length;i++){
        if(Input.includes(arr_banned[i])===true){
            flag=false;
            break;
        }
    };
    if(flag===true){
        Special_flag=true;
        document.querySelector(".Wrong_Symbols_password").hidden=true}
    else{
        document.querySelector(".Wrong_Symbols_password").hidden=false;
        Special_flag=false     
    };
    if(Input.length >= 8){
        document.querySelector(".Minimal_Password_Range").hidden=true;
        Range_flag=true;
    }
    else{
        document.querySelector(".Minimal_Password_Range").hidden=false;
        Range_flag=false;
    };
    Password_Inp=Input
    check()
};


function Match_Password(Input_Repeat){
    if(Password_Inp==Input_Repeat){
        document.querySelector(".Passwords_Dont_Mathces").hidden=true;
        Match_flag=true;
    }else{  
        document.querySelector(".Passwords_Dont_Mathces").hidden=false;
        Match_flag=false;
    }
    check()
}

function Email_Valid(Email){
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    Email=document.querySelector('.Email_Input').value
    if(EMAIL_REGEXP.test(Email)===true){
        Email_flag=true
        document.querySelector('.Valid_Email').hidden=true;
    }
    else{
        Email_flag=false
        document.querySelector('.Valid_Email').hidden=false;
    }
    check()
}

function check(){
    if(Match_flag===true&&Range_flag===true&&Special_flag===true&&Email_flag===true){
        document.querySelector('.KeepGoing').hidden=false;
    }
    else{
        document.querySelector('.KeepGoing').hidden=true;
    }
}