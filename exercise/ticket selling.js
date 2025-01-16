/*
یک سامانه فروش بلیط آنلاین پیاده سازی کنید

به این صورت که مبدا سفر (استان) را از کاربر دریافت کرده و سپس شهر های استان وارد شده را در کنسول نمایش دهید

ساختار پروژه و ذخیره سازی اطلاعات بر عهده شما
*/


var provinces = {
    Tehran: ["shahr1","shahr3","shahr4","shahr2",],
    Esfahan: ["aran & bidgol", "chadgan", "kashan", "NagafAbad"],
    Fars: ["shiraz", 'pasargad'],
}
var getProvinceName = prompt("Please Enter the Province Name: ")
var cities = provinces[getProvinceName]
var i = 0
cities.forEach(function(city){
    i++
    console.log(i + '.' + city)
})