// از کاربر 5 عدد را دریافت کرده و میانگین آن ها را به کاربر نمایش دهید


var Average = 0

for(var i = 1 ; i < 6 ; i = i +1){
    Average = Average + Number(prompt("please enter " + i + "st your scores: "))
}

alert("🚀your Average is:  " + Average / 5)