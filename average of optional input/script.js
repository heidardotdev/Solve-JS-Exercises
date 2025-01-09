// اعدادی را به تعداد دلخواه کاربر دریافت کنید و میانگین آن ها را محاسبه کرده و نمایش بدید

var userNumber = 0
var sum = 0
var counter = 0
while(userNumber != -1){
    sum += userNumber
    var userNumber = Number(prompt("Enter the number \n\n write -1 to see the result "))
    if(userNumber != -1){
        counter++
    }
}
console.log("average: "+ sum / counter);


