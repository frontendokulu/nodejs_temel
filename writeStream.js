const fs = require('fs');
const file = 'video.mkv';
//Temel prensip, bir dosyasıyı okuyup onu kopyasını almaktır.
//Önce dosya okunur, sonrasında bir pipe oluşturulur ve bittiğinde ekrana yazdırılır.
const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream('new_video.mkv');
let progress = 0;
fs.stat (file, (error, data) =>{
   const total = data.size;

    readStream.on('data', (chunk) =>{
        progress += chunk.length;
        // console.log(Math.round((100 * progress) / total) + '%');
    });

    readStream.pipe(writeStream);
    writeStream.on('finish', () => {
       console.log('Yeni Dosya Oluşturuldu');
    });
});


