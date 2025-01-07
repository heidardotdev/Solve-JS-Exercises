// معدل کاربر را دریافت کرده و سپس سطح او را تعیین کنید

// A برای معدل 18 الی 20 سطح
// B برای معدل 15 الی 17 سطح
// C برای معدل 12 الی 14 سطح
// معدل کمتر از 12 مشروط میشه :(


var userAverage = Number(prompt("please enter your average"))

switch(userAverage){
    case 20:
    case 19:
    case 18:
        alert("grade A")
        break
    case 17:
    case 16:
    case 15:
        alert("grade B")
        break
    case 14:
    case 13:
    case 12:
        alert("grade C")
        break
    default:
        alert("you have faild") 
        break
}

// if(userAverage === 12 ||  userAverage === 13 ||  userAverage === 14){
//     alert("your Grade is C")
// }else if(userAverage === 15 ||  userAverage === 16 ||  userAverage === 17){
//     alert("your Grade is B")
// }else if(userAverage === 18 || userAverage === 19 || userAverage === 20){
//     alert("your Grade is A")
// }else if(isNaN(userAverage) || userAverage < 0){
//     alert("please inter a valid value")
// }else if(userAverage < 12){
//     alert("you faild")
// }
// else{
//     alert("not valid")
// }