const fs = require('fs');
fs.readFile('test.txt', (error, data) =>{
    if (error){
        console.log(error);
    }
    console.log(data.toString());
});
//Dosya içeriği okuma işlemi bitti yazısı buranın altında olduğunda
// önce ekranda bitti yazar, sonra okuma işlemi görünür.
//Çünkü javascript asenkron çalışır sıra beklemez. Güzel örnek
//düzeltmek için yukardaki fonksiyonun altına alınabilir.
console.log("dosya içeriği okuma işlemi bitti");