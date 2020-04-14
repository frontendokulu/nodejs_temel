const http = require('http');
//html dosyasını okumak gerekir.
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log("Bir request yapıldı");

    response.writeHead(200, {'content-type' : 'text/html;charset=utf-8'});
    fs.readFile('test.html',(error, data) => {
       if (error){
           throw error;
       }
       else{
           response.end(data);
       }
    });
});

server.listen(3000);