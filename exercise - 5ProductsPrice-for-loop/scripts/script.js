// فرض کنید یک وب سایت فروشگاهی دارید که کاربر 5 محصول از فروشگاه را انتخاب کرده است

// قیمت 5 محصول را از کاربر گرفته و مجموع مبلغ کل سبد خرید رو نمایش دهید

var allPrices = 0

for(var i = 0 ; i < 5 ; i++){
  allPrices = allPrices +  +prompt("🛒Enter the Price: ", "0")
}

alert("🛒Your Products price: " + allPrices + " $$" )


