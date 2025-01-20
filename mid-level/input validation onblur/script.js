let $ = document

let userName = $.querySelector('#userName')
let password = $.querySelector('#password')
let userNameSens = $.querySelector('#userNameSens')
let passwordSens = $.querySelector('#passwordSens')

userName.addEventListener('blur', userNameBlur)
password.addEventListener('blur', passwordBlur)

function userNameBlur(){
    if(userName.value.length < 12 ){
        userNameSens.textContent = 'please enter a valid username'
        userNameSens.style.color = 'red'
        userNameSens.style.display = 'block'

    }else{
        userNameSens.textContent = 'correct username'
        userNameSens.style.color = 'green'
        userNameSens.style.display = 'block'
    }
}
function passwordBlur(){
    if(password.value.length < 8){
        passwordSens.textContent = 'invalid password'
        passwordSens.style.color = 'red'
        passwordSens.style.display = 'block'
    }else{
        passwordSens.textContent = 'correct password'
        passwordSens.style.color = 'green'
        passwordSens.style.display = 'block'
    }
}