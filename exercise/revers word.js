// کلمه ای از کاربر دریافت کرده و چک کنید که کلمه وارد شده از هر دو سمت چپ و راست به یک صورت خوانده 
// می شود یا خیر

// به عنوان مثل کلمه 
// gig 
// از هر دو طرف به یک صورت خوانده می شود


var userWord = prompt("Enter you Word")
var userWordChars = userWord.split('')
var reverseChar = userWordChars.reverse()
var joinReversChar = reverseChar.join('')


if(joinReversChar === userWord){
    alert('✅YES⚡')
}else{
    alert('❌No⚡')
}






