let userName = document.querySelector('#userName')
let password = document.querySelector('#password')
let userNameSens = document.querySelector('#userNameSens')
let passwordSens = document.querySelector('#passwordSens')
let modalPlace = document.querySelector('body')
let modal = document.createElement('div')
let btn = document.querySelector('button')

userName.addEventListener('keydown', userNameSensFunc)
password.addEventListener('keydown', passwordSensFunc)
btn.addEventListener('click', isLogin)

/* ---------------------------- validation modal ---------------------------- */
modalPlace.appendChild(modal)
modal.setAttribute('id', 'modal')

/* --------------------------- validation fuction --------------------------- */
function isLogin(){

    let userNameValue = userName.value
    let passwordValue = password.value
    
    if(userNameValue.length < 12 || passwordValue.length < 8){
        modal.style.display = 'flex'
        modal.style.backgroundColor = '#c3221a'
        modal.textContent = 'InValid'
    }else{
        modal.style.display = 'flex'
        modal.textContent = 'Welcome to your panel'
    }

    setTimeout(function(){
        modal.style.display = 'none'
    },3000)
}


/* -------------------- charachter limit validation func -------------------- */
function userNameSensFunc(){
    let userNameValue = userName.value

    if(userNameValue.length < 12){
        userNameSens.textContent = 'please Enter a valid userName'
        userNameSens.style.color = 'red'
        userNameSens.style.display = 'block'
    }else{
        userNameSens.textContent = 'amazign & unique userName'
        userNameSens.style.color = 'green'
    }
}

function passwordSensFunc(){
    let passwordValue = password.value

    if(passwordValue.length < 8){
        passwordSens.textContent = 'this is a weak password'
        passwordSens.style.color = 'red'
        passwordSens.style.display = 'block'
    }else{
        passwordSens.textContent = 'powerful password'
        passwordSens.style.color = 'green'
    }
}