var userMintes = +prompt("Please Enter the Mintes: ")
var userSeconds = +prompt("Please Enter the Seconds: ")

var timer = setInterval(function(){

    if(userSeconds === -1){
        userSeconds = 59
        userMintes--
    }

    console.log(userMintes + " : " + userSeconds)
    if(userMintes === 0 && userSeconds === 0){
        alert("Time is End")
        clearInterval(timer)
    }
    userSeconds--
},1000)