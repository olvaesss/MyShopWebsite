let UserFlag=false
function DrawPassword(){
    Input=document.querySelector('.Password_Input').value;
    Input_Repeat=document.querySelector('.Password_Input_Repeat').value;
    if(Input==''||Input_Repeat==''){
        document.querySelector(".Minimal_Password_Range").removeAttribute(hidden='hidden');
        UserFlag=false;
    }
    else{
        document.querySelector(".Minimal_Password_Range").hidden='hidden';
        UserFlag=true;
    }
    if(Input.length >= 8){
        document.querySelector(".Minimal_Password_Range").hidden='hidden';
        UserFlag=true;
    }
    else{
        document.querySelector(".Minimal_Password_Range").removeAttribute(hidden='hidden');
        UserFlag=false;
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
        UserFlag=true;
        document.querySelector(".Wrong_Symbols_password").hidden='hidden';}
    else{
        document.querySelector(".Wrong_Symbols_password").removeAttribute(hidden='hidden');
        UserFlag=false
    };
    if(Input==Input_Repeat){
        document.querySelector(".Passwords_Dont_Mathces").hidden='hidden';
        UserFlag=true;
    }else{  
        document.querySelector(".Passwords_Dont_Mathces").removeAttribute(hidden='hidden');
        UserFlag=false;
    }
    if(UserFlag===true){
        document.querySelector('.KeepGoing').hidden=false;
    }
    else{
        document.querySelector('.KeepGoing').hidden=true;
    }
};