//Alttaki kod 2 sn sonra yazar.
/*
setTimeout(function () {
    console.log("Set Timeout Çalışıyor")
},2000);
*/
//Alttaki yöntem ile fonksiyon değişkene atanmıştır.
var fnc =function () {
    console.log("Set Timeout Çalışıyor")
}
setTimeout(fnc,2000);