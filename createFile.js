const fs = require('fs');
/*
fs.appendFile();
fs.writeFile();
*/


fs.writeFile('test2.txt', 'Burdakiler silinip yeniden yazıldı', error =>{
   if (error){
       console.log(error);
   }
   else{
       console.log('Yeni yazı eklendi')
   }
});