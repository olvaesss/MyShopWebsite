function PasswordValid(input){
    let arr_banned=['!','@','#','$','%','^','&','*','(',')','-','_','=','+',' ',',','<','.','>','/','?',']','[']
    let flag=true
    for(let i=0;i<=arr_banned.length;i++){
        if(input.includes(arr_banned[i])===true){
            flag=false
            break
        }
    }
    if(flag===true){
    alert("Write")
    document.querySelector(".Wrong_Symbols_password").setAttribute(hidden,'hidden')}
    else{
    alert("Wrong")
    document.querySelector(".Wrong_Symbols_password").removeAttribute(hidden='hidden')}
}

function DrawPassword(Input, Input_Repeat){
    Input=document.querySelector('.Password_Input').value
    Input_Repeat=document.querySelector('.Password_Input_Repeat').value
    if(Input==Input_Repeat){
        PasswordValid(Input)
        document.querySelector(".Passwords_Dont_Mathces").setAttribute(hidden,'hidden')
    }else{
        document.querySelector(".Passwords_Dont_Mathces").removeAttribute(hidden='hidden')
    }
}
