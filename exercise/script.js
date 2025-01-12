// دیتابیسی برای ذخیره اطلاعات کاربران داشته باشید (آرایه ای از آبجکت ها)
// و سپس به کمک متد فورایچ، اطلاعات هر یوزر را به صورت جداگانه در کنسول نمایش دهید

var usersInfo = [
    {id: 1, name: 'mohammad', family: 'heiday'},
    {id: 2, name: 'ja', family: 'jahanbin'},
    {id: 3, name: 'amin', family: 'basegh'}
]

usersInfo.forEach(function(users){
    console.log(users.name + ' ' + users.family)
})