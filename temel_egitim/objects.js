// Bir object alttaki gibi tanımlanabilir.
/*

var sonHavaBukucu = { };
kisi.yas=12;
kisi.isim="Aang";
kisi.yetenek = function () {
    console.log("Hava Bükücü");
}
*/

//Diğer şekilde alttaki gibi tanımlanır.

var sonHavaBukucu = {
    yas : 12,
    isim : "Avatar Aang",
    yetenek : function () {
        console.log("Hava Bükücü");
    }
}
//yeni property eklemek için alttaki kod yazılır
sonHavaBukucu.ozelik = "ok dövmeleri";

console.log(sonHavaBukucu);
