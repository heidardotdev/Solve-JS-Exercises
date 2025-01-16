var userFirstNumber = +prompt("Enter First Number: ")
var userSecondNumber = +prompt("Enter second Number: ")
var userOprator = prompt("Enter the Oprator: \n 1. + \n 2. - \n 3. * \n 4. / \n 5. ** ")
var userCalculationResult;
switch(userOprator){
    case '+': 
    alert("🧮 your calculation result: ".concat(userCalculationResult = (userFirstNumber + userSecondNumber)))
    break
    case '-': 
    alert("🧮 your calculation result: ".concat(userCalculationResult = (userFirstNumber - userSecondNumber)))
    break
    case '*': 
    alert("🧮 your calculation result: ".concat(userCalculationResult = (userFirstNumber * userSecondNumber)))
    break
    case '/': 
    alert("🧮 your calculation result: ".concat(userCalculationResult = (userFirstNumber / userSecondNumber)))
    break
    case '**': 
    alert("🧮 your calculation result: ".concat(userCalculationResult = (userFirstNumber ** userSecondNumber)))
    break
    default : 
    alert("❌Invalid Equation❌")
    break
}