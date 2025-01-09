// دو عدد رو از کاربر بگیرین و اعداد زوج بین آن ها را نمایش دهید


var userFirstNumber = Number(prompt("Please Enter First Number: "))
var userSecondNumber = Number(prompt("Please Enter Second Number: "))




// even

if(userFirstNumber % 2 === 0){
    while(userFirstNumber < userSecondNumber){
        console.log(userFirstNumber)
        userFirstNumber += 2
    }
}else{
    userFirstNumber++
    while(userFirstNumber < userSecondNumber){
        console.log(userFirstNumber);
        userFirstNumber += 2
    }
}

// odd

if(userFirstNumber % 3 === 0){
    while(userFirstNumber < userSecondNumber){
        console.log(userFirstNumber)
        userFirstNumber += 2
    }
}else{
    userFirstNumber--
    while(userFirstNumber < userSecondNumber){
        console.log(userFirstNumber);
        userFirstNumber += 2
    }
}


