// یک برنامه ثبت نام بنویسید

// به این شکل که کاربر برای ثبت نام در سایت باید یوزرنیم و پسورد را ثبت کند

// محدودیت موجود این است که یوزرنیم حداقل باید 3 کاراکتر و پسورد حداقل باید 8 کاراکتر داشته باشد

// در غیر این صورت پیغام مناسب را به کاربر نمایش دهید

// (: موفق باشید 



var userName = prompt("please Enter your UserName: ")
var userPassword = prompt("please Enter your Password: ")

if(userName.length <= 3 || userPassword <= 8){
    alert("please Enter valid information")
}else{
    alert("your info has been confirmed")
}