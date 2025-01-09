var i = 0
var userProductsPrices = 0
while(i< 5){
    var userProductPrice = Number(prompt("please inter the price"))
    userProductsPrices = userProductPrice + userProductsPrices
    i++
}
console.log(userProductsPrices)