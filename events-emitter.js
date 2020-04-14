const events = require('events');
const eventEmitter = new events.EventEmitter();
/*

eventEmitter.on('selamla', () =>{
    console.log('Merhaba Node');
});

eventEmitter.emit('selamla');

*/
// Altta emiter a bir de object türünde bir değişken gönderek fonksiyon içinde kullandık.
eventEmitter.on('Selamla', (kisi) =>{
    console.log(`Merhaba ${kisi.isim} ${kisi.soyisim}`);
});

eventEmitter.emit('Selamla',{isim : "Hakan", soyisim : "Günal"});

console.log(__filename);
console.log(__dirname);