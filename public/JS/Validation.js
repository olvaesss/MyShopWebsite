 let GoFlag=true
function DrawPassword(Input, Input_Repeat){
    Input=document.querySelector('.Password_Input').value
    Input_Repeat=document.querySelector('.Password_Input_Repeat').value
    if(Input==Input_Repeat){
        document.querySelector(".Passwords_Dont_Mathces").hidden='hidden'
    }else{  
        document.querySelector(".Passwords_Dont_Mathces").removeAttribute(hidden='hidden')
        GoFlag=false
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
        document.querySelector(".Wrong_Symbols_password").hidden='hidden'}
    else{
        document.querySelector(".Wrong_Symbols_password").removeAttribute(hidden='hidden')
        GoFlag=false
    }
    console.log(Input.length)
    if(Input.length >= 8){
        document.querySelector(".Minimal_Password_Range").hidden='hidden'
    }
    else{
        document.querySelector(".Minimal_Password_Range").removeAttribute(hidden='hidden')
        GoFlag=false
    }
    Go()
}

// function Go(){
//     if(GoFlag===true)
//     {
//         window.location.href = "index.html"
//         document.querySelector(".Buttons").hidden='hidden'
//         document.querySelector(".UserArea").removeAttribute(hidden='hidden')
//         alert("Успешная регистрация!")
//     }
//     else{
//         alert("Server Error")
//     }
// }