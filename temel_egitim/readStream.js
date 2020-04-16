const fs = require('fs');
const file = 'video.mkv';

const readStream = fs.createReadStream(file);
let progress = 0;
fs.stat (file, (error, data) =>{
   const total = data.size;
    readStream.on('data', (chunk) =>{
        progress += chunk.length;
        console.log(Math.round((100 * progress) / total) + '%');
    });
});

//okumanın bittiğini belirten kısım
readStream.on('end',() =>{
    console.log('veri okuması bitti');
});

