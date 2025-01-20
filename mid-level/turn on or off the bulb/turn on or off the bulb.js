let bulb = document.querySelector('.bulb')
let btn = document.querySelector('button')

let isBulbOn = false

function turnOnOrOffBulb(){
    /* --------------------- if the bulb is on turn off that -------------------- */
    if(isBulbOn){
        bulb.setAttribute('src', '/pics/bulboff.gif')
        isBulbOn = false
        btn.innerText = 'turn on'
        /* ----------------------- turn off the bulb if it on ----------------------- */
    }else{
        bulb.setAttribute('src', '/pics/bulbon.gif')
        isBulbOn = true
        btn.innerText = 'turn off'
    }
}