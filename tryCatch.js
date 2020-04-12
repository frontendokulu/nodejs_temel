//throw hatayı alıp özelleştirerek yazdırmak için kullanılır.
// Throw dan sonraki hiç bir kod çalışmaz.
/*

yas = 18;
if (yas !== '18' ){
    throw Error('yaş eşit değil');
}
console.log(yas);
*/

//try - catch - throw - finally
//iş yapmayı dener, yapabilirse sorunsuz çalışır.
try{
    var sayi1 = 4;
    var sayi2 = 2;
    var sonuc = sayi1/sayi2;
    if (sayi2 == 0){
        throw Error("Sayi2 0 olamaz");
    }
    else{
        console.log(sonuc);
    }
}
//throw ile fırlatılan hata catch ile yakalanır ve yazdırılabilir.
catch (e) {
    console.log(e);
}
//her durumda çalışır
finally {
    console.log("Finally bloğu her durumda çalışır");
}