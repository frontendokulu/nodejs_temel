const fs = require('fs');

fs.unlink('test2.txt', (error) =>{
    if (error){
        throw (error);
        console.log(error);
    }
    else{
        console.log('Dosyanız Silindi');
    }
});