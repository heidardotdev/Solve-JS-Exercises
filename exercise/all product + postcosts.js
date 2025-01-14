/*

یک پروژه فروشگاه آنلاین پیاده سازی کنید

به این صورت که یک آرایه به عنوان سبد خرید کاربر در نظر بگیرید که 6 محصول به طور دیفالت دارد

سیاست کاری فروشگاه به این شکل است که برای محصولاتی که بالای 100 هزار تومان باشند، از مشتری هزینه پست دریافت نمی شود

اما محصولاتی که زیر 100 هزار تومان قیمت داشته باشند، برای هر کدام 1000 تومان هزینه ارسال (هزینه پست) دریافت میشه

لطفا قیمت کل سبد خرید را همراه با هزینه پست محاسبه کرده و به کاربر نمایش دهید

*/


var userBasket = [
  {id:1, productName: 'milk', productPrice: 50000},
  {id:2, productName: 'notebook', productPrice: 80000},
  {id:3, productName: 'onion', productPrice: 35000},
  {id:4, productName: 'water', productPrice: 5000},
  {id:5, productName: 'book', productPrice: 200000},
  {id:6, productName: 'phone', productPrice: 10000000},
]

var filtredProducts = userBasket.filter(function(product){
        return product.productPrice < 100000 
})

var postCost = filtredProducts.length * 1000
console.log("postCost: ", postCost)

var sum = 0
userBasket.forEach(function(product){
  sum += product.productPrice
})
var totoalPrice = sum + postCost

console.log("totalPrice: ", totoalPrice)









