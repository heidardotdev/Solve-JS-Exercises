/*
فرض کنید پلتفرمی مثل تلگرام ساخته اید و چند نفر در آن یک گروه ایجاد کردند
و قصد ایجاد تماس کنفرانسی دارند

اما شرط لازم برای ایجاد تماس کنفرانسی بالای 18 سال بودن اعضای گروه است
اگر تمامی اعضا بالای 18 سال نبودند، اجازه ایجاد تماس کنفرانسی را ندهید
*/

var usersInfo = [
    {id: 1, userName: 'Ali', userFamily: 'Jafari', userAge: 18},
    {id: 2, userName: 'Mohsen', userFamily: 'Sami', userAge: 32},
    {id: 3, userName: 'Ghasem', userFamily: 'Jase', userAge: 50},
    {id: 4, userName: 'Narges', userFamily: 'youq', userAge: 21},
    {id: 5, userName: 'Mina', userFamily: 'Ilisl', userAge: 12},
    {id: 6, userName: 'Zeos', userFamily: 'La', userAge: 9},
    {id: 7, userName: 'Unes', userFamily: 'Hani', userAge: 29},
]

var isUserAgeAllowed = usersInfo.every(function(age){
    return age.userAge > 18
})

if(isUserAgeAllowed == true){
    alert("✅You have the Access to began the Video conforance")
}else{
    alert("❌You don't have the Access to began the Video conforance")

}
