// عددی را از کاربر دریافت کرده و سپس تعداد رقم های آن را نمایش دهید.

// به عنوان مثال برای عدد 142 عدد 3 به عنوان خروجی نمایش داده می شود. چون عدد 143 از 3 رقم تشکیل شده است.


var userNumber = prompt("Enter the Number", 0)
var counter = 0
if(isNaN(userNumber) === true){
    alert("not valid number")
}else if(userNumber == 0 ){
    alert("Your count of digit: " + (counter + 1))
}else{
    for(var i = 0 ; userNumber / 10 != 0 ; i++){
        counter++
        userNumber = Math.floor(userNumber / 10)
    }
    alert("Your count of digit: " + counter)
}


