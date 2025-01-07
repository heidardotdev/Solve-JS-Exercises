// از کاربر سن و جنسیت را دریافت کنید.
// در صورتی که جنسیت کاربر مونث بوده یا سن کمتر از 18 را دارد، به اون خطا نمایش داده
// و در غیر این صورت به اون مجوز ورود به پنل را نمایش دهید.

var userAge = prompt("please inter your Age")
var userGender = prompt("please inter your Gender")

if(userGender == "female" || userAge < 18){
    alert("not allow")
}else{
    alert("welcome to your panel ")
}