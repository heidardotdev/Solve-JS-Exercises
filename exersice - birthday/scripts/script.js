// تاریخ تولد کاربر رو دریافت کنید سن اورا محاسبه کنید و نمایش دهید

var currentyear = Number(prompt("please inter current year"))
var userBirthyear = Number(prompt("please inter your birthyear"))
var userAge = (currentyear - userBirthyear)
if(isNaN(userBirthyear)){
    alert("please inter your numbric birthdate")
}
else{
    alert(userAge)
}