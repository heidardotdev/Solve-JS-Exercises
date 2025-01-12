// اعدادی را به تعداد دلخواه از کاربر گرفته و داخل آرایه ای ذخیره کنید
// و سپس میانگین آن ها را محاسبه کرده و نمایش دهید

var userNumber = 0
var userNumbers = []
var sum = 0

// push userNumber into the array
while(userNumber != -1){
    userNumber = +prompt("Enter the number \n dont continu wirete -1")
    if(userNumber != -1 ){
        userNumbers.push(userNumber)
    }
}

// calculate userNumber average
for(var i = 0 ; i < userNumbers.length ; i++){
    sum += userNumbers[i]
}
alert('average: ' + sum / userNumbers.length)