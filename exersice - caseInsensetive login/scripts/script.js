// 1.
// یک سیستم لاگین پیاده سازی کنید
// به این صورت که از کاربر یوزرنیم رو میگیرین و چک می کنین لاگین هست یا نه
// فقط کاربر با یوزرنیم
// ali
// میتونه لاگین کنه

// نکته: این پروژه باید به حروف کوچیک و بزرگ حساب نباشد


var userName = prompt("please Enter your userName: ")
userName.toLocaleLowerCase() == "ali" ? alert("✅You've Allowed") : alert("❌You haven't Allowed")


