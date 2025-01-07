// یک زمان را بر حسب دقیقه از کاربر دریافت کرده و آن را به ساعت تبدیل کنید و سپس نمایش دهید

var userMinets = Number(prompt("please inter your minets"))
var convertTohour = userMinets / 60
if(isNaN(userMinets)){
    alert("please inter a number on minet")
}
else{
    alert(convertTohour)
}