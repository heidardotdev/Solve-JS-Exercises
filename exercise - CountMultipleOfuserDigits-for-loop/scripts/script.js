var getUserNumber = prompt("Enthe The Number: ", 0)
var userNumberMultiple = 1

if(getUserNumber == 0){
    alert(0) 
}else{
    for(var i = 0 ; (getUserNumber / 10) != 0 ; i++){

        userNumberMultiple =  userNumberMultiple * (getUserNumber % 10) 
        getUserNumber = Math.floor(getUserNumber / 10)
    }
    alert(userNumberMultiple)
}
