/*

پروژه فروشگاه را در نظر بگیرید

محصولات فروشگاه را داخل آرایه ای ذخیره کرده و آرایه ای برای سبد خرید در نظر بگیرید
و داخل سبد خرید 3 محصول بطور دیفالت قرار دهید

منویی را به کاربر نمایش دهید که شامل 2 گزینه است
گزینه ای برای حذف محصول از سبد خرید
و گزینه ای برای اضافه کردن محصول به سبد خرید

عملیات لازم برای هر گزینه را پیاده سازی کنید


*/

var shopProducts = [
  { id: 1, productName: "milk" },
  { id: 2, productName: "cake" },
  { id: 3, productName: "chips" },
  { id: 4, productName: "icecream" },
  { id: 5, productName: "juse" },
  { id: 6, productName: "onion" },
  { id: 7, productName: "chocklet" },
];

var userBasket = [
  { id: 1, productName: "chips" },
  { id: 2, productName: "cake" },
  { id: 3, productName: "juse" },
];

var getUserOption = prompt(
  "1.Remove product from your basket\n2.Add product to your basket"
);

/* ----------- remove user product form userbasket if was in there ---------- */
if (getUserOption == 1) {
  var getUserProduct = prompt("Enter your Product name: ");

/* ------------------- check if the product in userBasket ------------------- */
  var isInUserBasket = userBasket.some(function (userBasketProduct) {
    return userBasketProduct.productName == getUserProduct;
  });
/* ------------ if in basket, find the product index ----------- */
  if (isInUserBasket === true) {
    var userBasketProductIndex = userBasket.findIndex(function (productIndex) {
      return productIndex.productName == getUserProduct;
    });
/* ---------------------- delete the index from basket ---------------------- */
    userBasket.splice(userBasketProductIndex, 1);
    console.log(userBasket);
/* -------------------- the product isn't in user basket -------------------- */
  } else {
    alert("there isn't product like this in your basket");
  }


/* ---------------- add product to user basket if was in shop --------------- */
 }else if(getUserOption == 2){
    var getUserProduct = prompt("Enter your Product name: ");
/* --------------------- checking is the product in shop -------------------- */
    var isInShopProducts = shopProducts.some(function(shopProduct){
        return shopProduct.productName == getUserProduct
    })
/* -------------------- if in shop find the product index ------------------- */
    if(isInShopProducts === true){
        var shopProductIndex = shopProducts.findIndex(function(productIndex){
            return productIndex.productName == getUserProduct
        })
/* --------------- add product index from shop to user basket --------------- */
        userBasket.push(shopProducts[shopProductIndex])
        console.log(userBasket)
/* ---------------------- the product isn't in our shop --------------------- */
    }else{
        alert("there isn't a product like this in our shop")
    }

/* -------------- invalid option any thing other option 1 or 2 -------------- */
}else{
    alert('Enter a valid option')
}
