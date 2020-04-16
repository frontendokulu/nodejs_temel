//Altta 3 fonksiyon birbirine callback ile bağlandı.
//Tebrikler
//birinci içine ikinci callback olarak gönderildi
//birinci fonksiyon çalıştı 1 sn sonra ekrana yazdı
//gelen callback ikinci olduğu için ikinci ye gitti
//ikinci ye de paramatre olarak ucuncu geldi
//ikinci 2 sn sonra ekrana yazdı ve callback i çalıştırdı
//gelen callback ucuncu olduğu için ucuncu çalıştı ve çalışma sonlandı.
function birinci(callback) {
    setTimeout(function () {
        console.log("Birinci");
        callback(ucuncu);
    },1000);

}
function ikinci(callback) {
    setTimeout(function () {
        console.log("İkinci");
        callback();
        },2000);

}
function ucuncu() {
    console.log("Üçüncü");
}
birinci(ikinci);
