let userName = document.querySelector('#username')
let password = document.querySelector('#password')
let modalPlace = document.querySelector('body')
let modal = document.createElement('div')


let btn = document.querySelector('button')
btn.addEventListener('click', isLogin)



modalPlace.appendChild(modal)
modal.setAttribute('id', 'modal')


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