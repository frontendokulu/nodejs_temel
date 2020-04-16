//es5 yazım
/*

const fonksiyonum = function () {
    return 'Merhaba Dünya';
};
*/

//es6 yazım, function gitti => işareti geldi, parametreler yine parantez içine yazılacak
/*
const fonksiyonum =  ( sayi1, sayi2) => {
    return sayi1+sayi2;
};
*/

//sadece tek satır return işlemi varsa süslü parantezler ve return de gidebilir.
// const fonksiyonum =  ( sayi1, sayi2) => sayi1+sayi2 ;
//fonksiyon tek parametre alıyorsa parantezlere de gerek yok.
const fonksiyonum =  sayi1 => sayi1+5 ;