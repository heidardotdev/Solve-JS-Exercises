// تابعی بنویسید که عددی را دریافت کرده و زوج یا فرد بودن آن را نمایش دهد

var EvenOrOdd = function(userNumber){
    var Result = userNumber % 2 === 0 ? alert("YOur number is Even") : alert("YOur numbe is ODD")
}
EvenOrOdd(Number(prompt("please inter the number")))