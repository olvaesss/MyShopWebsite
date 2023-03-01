function PasswordValid(input){
    input=document.querySelector(".Password_Input").value
    let arr_banned=['!','@','#','$','%','^','&','*','(',')','-','_','=','+',' ',',','<','.','>','/','?',']','[']
    input=input.split()
    for(let i=0;i<=input.length;i++){
        for(let j=0;j<=arr_banned.length;j++){
            if(input[i]===arr_banned[j]){
                alert("Error 1")
            }
        }
    }
}