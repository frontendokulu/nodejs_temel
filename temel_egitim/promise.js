//es 5 te ardışıl callback fonksiyonu kullanımı
const asenkronFonksiyon = function (sayi, callback) {
    const sonuc = sayi + 2;
    callback(sonuc);
}
asenkronFonksiyon(2,function (sonuc) {
   console.log(sonuc);
   asenkronFonksiyon(4,function (sonuc) {
       console.log(sonuc);
       asenkronFonksiyon(6,function (sonuc) {
           console.log(sonuc);
           asenkronFonksiyon(8,function (sonuc) {
               console.log(sonuc);
           })
       })

   })
});
//es6 da ardışıl callback fonksiyonu kullanımı
const asenkronFonksiyon = (sayi) => {
  return new Promise((resolve, reject) => {
      if (sayi ===1) {
          resolve("Herhangi bir hata oluşmadı");
      }
      else {
          reject('Hata Oluştu');
      }
  });
};

asenkronFonksiyon(1)
    .then((data) => {
        // console.log(data)
        return 2;
    })
    .then((data) => {
        data = data +2;
        console.log(data);
        return data;
    })
    .then((data) => {
        data = data +2;
        console.log(data);
        return data;
    })
    .then((data) => {
        data = data +2;
        console.log(data);
        return data;
    })
    .then((data) => {
        data = data +2;
        console.log(data);
        return data;
    })
    .catch((error) => {
        console.log(error)
    });