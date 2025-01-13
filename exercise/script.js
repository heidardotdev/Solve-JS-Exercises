/*
 یک فروشگاه آنلاین پیاده سازی کنید
 به این شکل که محصولات فروشگاه خود را در دیتابیسی ذخیره کرده (آرایه) و آرایه ای برای سبد خرید کاربر داشته باشید
 و از کاربر اسم محصولی را که قصد اضافه کردن به سبد خرید دارد ، دریافت کنید
 اگر محصول درخواستی کاربر در انبار فروشگاه شما موجود بود، آن را به سبد خرید کاربر اضافه کنید
 و سپس مبلغ کل سبد خرید را محاسبه کرده و به کاربر نمایش دهید
 و در غیر این صورت به کاربر پیغام اتمام موجودی نمایش دهید

 :نکات قابل توجه

 بعد از اضافه محصول به سبد خرید کاربر، سبد را در کنسول نمایش دهید
 به طور دیفالت 3 محصول با قیمت های مختلف در سبد خرید کاربر موجود باشد

*/

var userBasketPrices = 0
var productIndex = -1

/* all products thats in the shop */
var shopProducts = [
    {id: 1, productName: 'Keyboard', productPrice: 2500000},
    {id: 2, productName: 'Mouse', productPrice: 1520000},
    {id: 3, productName: 'Monitor', productPrice: 15000000},
    {id: 4, productName: 'Headset', productPrice: 2000000},
    {id: 5, productName: 'CPU', productPrice: 3600000},
]


/* all user products */
var userBasket = [
    {id: 1, productName: 'Keyboard', productPrice: 2500000},
    {id: 2, productName: 'Monitor', productPrice: 15000000},
    {id: 3, productName: 'CPU', productPrice: 3600000},
]

/* get the product from the Users */
var getUserProduct = prompt('Please Enter The Product Name: ')

/* checking is the user product in our shop or not */
var isInshop =  shopProducts.some(function(product){
    productIndex++
    return product.productName === getUserProduct
})

/* after checking if the user product was in shop add that to userBasket and calculate sum of all prices and show userBasket products and its sum */

if(isInshop === true){
    userBasket.push(shopProducts[productIndex])
    for(var i = 0; i < userBasket.length ; i++){
        console.log(userBasket[i].productName + " ===> " + userBasket[i].productPrice )
        userBasketPrices += userBasket[i].productPrice
    }
    console.log("Your AllProducts Price is: " + userBasketPrices)
}else{
    alert("❌there's no product like this one❌")
}








