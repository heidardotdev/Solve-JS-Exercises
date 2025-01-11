// دو عدد از کاربر دریافت کرده و عدد اول را به توان عدد دوم برسانید

// نکته: با حلقه انجام شود


/*      for loop    */

// var userFirstNumber = Number(prompt("Please Enter First Number"))
// var userSecondNumber = Number(prompt("Please Enter Second Number"))
// var userNumbersPower = 1

// for(var i = 0 ; i < userSecondNumber ; i++){
//     userNumbersPower = userNumbersPower * userFirstNumber
// }
// console.log(userNumbersPower);

/*      while loop    */

// var userFirstNumber = Number(prompt("Please Enter First Number"))
// var userSecondNumber = Number(prompt("Please Enter Second Number"))
// var userNumbersPower = 1
// var i = 0

// while(i < userSecondNumber){
//     i++
//     userNumbersPower = userNumbersPower * userFirstNumber
// }


/*      do while loop    */
var userFirstNumber = Number(prompt("Please Enter First Number"))
var userSecondNumber = Number(prompt("Please Enter Second Number"))
var userNumbersPower = 1
var i = 0
do{

    i++
    userNumbersPower = userNumbersPower * userFirstNumber
}while(i < userSecondNumber)

console.log(userNumbersPower)


