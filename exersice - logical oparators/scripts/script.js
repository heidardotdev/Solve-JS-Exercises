// get two numbers from user
var firstNumber = prompt("please inter first number")
var secondNumber = prompt("pleas inter second number") 

// convert strings to numbers
var convertFirstnumber = +firstNumber
var convertSecondnumber = +secondNumber

/* logical operators */
var multipleResult = convertFirstnumber * convertSecondnumber
var divisionResult = convertFirstnumber / convertSecondnumber
var plusResult = convertFirstnumber + convertSecondnumber
var minesResult = convertFirstnumber - convertSecondnumber

/* show the results */
alert(`multiple Result: ${multipleResult}`)
alert(`division Result: ${divisionResult}`)
alert(`plus Result: ${plusResult}`)
alert(`mines Result: ${minesResult}`)

/* ending message */
alert("the works has complited")
