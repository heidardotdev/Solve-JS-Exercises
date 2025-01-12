// یک سامانه ثبت نام پیاده سازی کنید

// به این شکل که یک آرایه برای ذخیره اطلاعات کاربران داشته باشید (3 کاربر را بطور دیفالت در آرایه داشته باشید)
// و از کاربری که قصد ثبت نام دارد نام، نام خانوادگی، سن و ایمیل را دریافت کرده
// و داخل آبجکتی مجزا در آرایه کاربران ذخیره کنید
// پس از انجام عمل ثبت نام، اطلالاعات تک تک کاربران را لاگ بگیرید

// :نکات قابل توجه
// نام حداقل باید 3 کاراکتر و حداکثر 10 کاراکتر داشته باشد
// نام خانوادگی حداقل باید 3 کاراکتر و حداکثر باید 15 کاراکتر داشته باشد
// سن حتما باید عدد بوده و حداکثر 3 رقم باشد


//users information
var users = [
    {id: 1, name: 'ali', family: 'mohammadi', age: 28, email: 'omavi@gmail.com'},
    {id: 2, name: 'jafar', family: 'rezaei', age: 12, email: 'asli@gmail.com'},
    {id: 3, name: 'mosa', family: 'kamrava', age: 32, email: 'kamrava71@gmail.com'}
]


//get user info
var userFirstname = prompt("please Enter your FirstName: ")
var userFamilyName = prompt("please Enter your LastName: ")
var userAge = +prompt("please Enter your Age: ")
var userEmail = prompt("please Enter your Email: ")

//user reigstration conditions
if(userFirstname.length < 3 || userFirstname.length > 10){
    alert("min chars of the FirstName should be  more than 3 and max should be lower than 10") 
}else if(userFamilyName.length < 3 || userFamilyName.length > 15){
    alert("min chars of FamilyName should be  more than 3 and max should be lower than 15")
}else if(userAge.length > 3 || isNaN(userAge)){
    alert("Age should be number or Lower than 3 chars")
}else{
    var newUser =
    {
        id: 4,
        name: userFirstname, 
        family: userFamilyName, 
        age: userAge,
        email: userEmail

    }
    users.push(newUser)
}


console.log(users)




