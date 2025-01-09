// دو عدد رو از کاربر بگیرین و اعداد زوج بین آن ها را نمایش دهید


var userFirstNumber = Number(prompt("Please Enter First Number: "))
var userSecondNumber = Number(prompt("Please Enter Second Number: "))
var count = 1


// even



    if(userFirstNumber % 2 === 0){
        while(userFirstNumber < userSecondNumber){
            console.log(count + " : " + userFirstNumber)
            userFirstNumber += 2
            count++
        }
    }else{
        userFirstNumber++
        while(userFirstNumber < userSecondNumber){
            console.log(count + " : " + userFirstNumber)
            userFirstNumber += 2
            count++
        }
    }
    console.log("⚡  Count of your Even Digits  =>  " + --count)



// odd


    if(userFirstNumber % 3 === 0){
        while(userFirstNumber < userSecondNumber){
            console.log(userFirstNumber)
            userFirstNumber += 2
            count++
        }
    }else{
        userFirstNumber--
        while(userFirstNumber < userSecondNumber){
            console.log(userFirstNumber);
            userFirstNumber += 2
            count++
        }
    }
    console.log("⚡  Count of your Even Digits  =>  " + --count)





