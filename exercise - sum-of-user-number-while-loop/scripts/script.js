// 1. عددی رو از کاربر گرفته و مجموع ارقام آن را حساب کنید


var i = 0
var sum = 0
var userNumber = prompt("please Enter the number: ", 0)
while((userNumber / 10) != 0){
    sum += (userNumber % 10)
    userNumber = Math.floor(userNumber / 10)
    i++
}
alert(sum)