// از کاربر 5 عدد را دریافت کرده و میانگین آن ها را به کاربر نمایش دهید


var Average = 0

for(var i = 0 ; i < 5 ; i = i +1){
    Average = Average + Number(prompt("please enter " + (i + 1) + "st your scores: "))
}

alert("🚀your Average is:  " + Average / 5)
