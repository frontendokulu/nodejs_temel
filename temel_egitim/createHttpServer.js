const http = require('http');

const server = http.createServer((request, response) => {
    //eğer sayfada favicon gibi birşey varsa onun için extra bir istek daha yapabilir.
    console.log("Bir request yapıldı");
    // console.log(request.url);
    // console.log(request);

    response.writeHead(200, {'content-type' : 'text/html;charset=utf-8'});
    response.write("<b>Sunucu</b> oluşturduk, heyyoo!<br>");
    response.write("<b>Nodemon</b> is awesome!");
    response.end();
//    Tek satırda response u bitirmek için alttaki gibi yapılır.
//    response.end("<b>Sunucu</b> oluşturduk, heyyoo!");
});

server.listen(3000);