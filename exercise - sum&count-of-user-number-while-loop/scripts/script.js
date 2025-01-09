// 1. عددی رو از کاربر گرفته و مجموع ارقام آن را حساب کنید

// 2. عددی را از کاربر گرفته و تعداد ارقام آن را نمایش دهید


var userNumber = prompt("please Enter the number: ", 0)
var counter = 0
var sum = 0
while((userNumber / 10) != 0){
    counter++
    sum += (userNumber % 10)
    userNumber = Math.floor(userNumber / 10)
}
alert("sum of your digits:  " + sum + "\n" + "count of your digits:  " + counter)