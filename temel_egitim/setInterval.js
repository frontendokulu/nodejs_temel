// Alttaki kod sonsuz döner.
/*
var sayi = 1;
setInterval(function () {
    console.log(sayi + " - hi");
    sayi++;
},1000);
*/
var sayi = 1;
var interval = setInterval(function () {
    if (sayi == 5){
        clearInterval(interval);
    }
    console.log(sayi + ". mesaj");
    sayi++;
},500 );