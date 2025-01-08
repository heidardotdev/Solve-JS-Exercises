// عددی را از کاربر دریافت کرده و سپس مجموع رقم های آن را محاسبه کنید.

// :به عنوان مثال برای عدد 142 به صورت زیر محاسبه می شود

// 1 + 4 + 2 = 7

var userNumber = Number(prompt("UserNumber: "))
var sum = 0
for(var i = 0 ; (userNumber / 10 ) !=0 ; i++){


    sum = sum + (userNumber % 10)
    userNumber = Math.floor(userNumber / 10)
}

console.log("sum of digit:  ", sum);

