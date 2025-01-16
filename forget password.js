var users = [
    {id: 1, name: 'Ali',  password: 'A1234',age: 20 },
    {id: 2, name: 'Mohammad',  password: 'M1234',age: 15 },
    {id: 3, name: 'Younes',  password: 'Y1234',age: 20 },
]

var getUserName = prompt("Enter Your UserName: ")


var findUserName = users.find(function(user){
    return user.name === getUserName
})

if(findUserName === undefined){
    alert("Invalid")
}else if(findUserName.name === getUserName){
    alert(findUserName.password)
}


