let Range_flag=false;
let Special_flag=false;
let Match_flag=false;
function DrawPassword(){
    Input=document.querySelector('.Password_Input').value;
    Input_Repeat=document.querySelector('.Password_Input_Repeat').value;
    if(Input.length >= 8){
        document.querySelector(".Minimal_Password_Range").hidden='hidden';
        Range_flag=true;
    }
    else{
        document.querySelector(".Minimal_Password_Range").removeAttribute(hidden='hidden');
        Range_flag=false;
    };
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
        document.querySelector(".Wrong_Symbols_password").hidden='hidden';}
    else{
        document.querySelector(".Wrong_Symbols_password").removeAttribute(hidden='hidden');
        Special_flag=false
    };
    if(Input==Input_Repeat){
        document.querySelector(".Passwords_Dont_Mathces").hidden='hidden';
        Match_flag=true;
    }else{  
        document.querySelector(".Passwords_Dont_Mathces").removeAttribute(hidden='hidden');
        Match_flag=false;
    }
    if(Match_flag===true&&Range_flag===true&&Special_flag===true){
        document.querySelector('.KeepGoing').hidden=false;
    }
    else{
        document.querySelector('.KeepGoing').hidden=true;
    }
};