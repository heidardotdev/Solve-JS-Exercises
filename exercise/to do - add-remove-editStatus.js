// یک پروژه تودولیست پیاده سازی کنید

// به این صورت که یک آرایه ای برای ذخیره تودوها داشته باشید و به طور دیفالت 3 تودو داخل آن ذخیره کنید
// هر تودو مشخصاتی مثل آیدی، اسم تودو و وضعیت را دارد

// :منویی به 3 گزینه به صورت زیر به کاربر نمایش دهید
// 1. اضافه کردن تودو
// 2. حذف تودو
// 3. انجام تودو (تغییر وضعیت)

// در قسمت اول اسم تودویی را از کاربر دریافت کرده و به لیست تودوها اضافه کنید
// در قسمت دوم اسم تودویی را از کاربر دریافت کرده و آن را از لیست تودوها حذف کنید
// در قسمت سوم اسم تودو را دریافت کرده و همان تودو را در وضعیت انجام شده قرار دهید

// در پایان هر کدام از عملیات‌ها، لیست تودوها را در کنسول نمایش دهید



var toDos = [
    {id: 1, name:'learn js', status: 'pending'},
    {id: 2, name:'learn react', status: 'pending'},
    {id: 3, name:'learn node', status: 'pending'},
]

var userOptions = prompt("1.add a todo\n2.remove a todo\n3.done a todo")






if(userOptions == 1){
   var userTodo = prompt("please Enter your Todo")
   toDos.push({
       id: toDos.length + 1,
       name:userTodo,
       status:'pending'
    })
    alert("✅your todo has been adedd➕")
    console.log(toDos);

}else if(userOptions == 2){
   var userTodo = prompt("please Enter your Todo")
   var isInTodos = toDos.some(function(todo){
    return todo.name === userTodo
})
    if(isInTodos){
        var findTodoIndex = toDos.findIndex(function(todo){
            return todo.name === userTodo
        })        
        toDos.splice(findTodoIndex, 1)
        alert("✅your todo has been deleted🗑 ")
        console.log(toDos)
    }else{
        alert("❌sorry this todo is not in your todoLIst❌")
    }
}else if(userOptions == 3){
   var userTodo = prompt("please Enter your Todo")
   var isInTodos = toDos.some(function(todo){
    return todo.name === userTodo
})
    if(isInTodos){
        var findTodoIndex = toDos.findIndex(function(todo){
            return todo.name === userTodo
        })  
        toDos[findTodoIndex].status = 'done' 
        alert("🎯your todo has been done ")
        console.log(toDos)
    }else{
        alert("❌sorry this todo is not in your todoLIst❌")
    }
}else{
    alert("⚠Please Enter A Valid Option⚠")
}