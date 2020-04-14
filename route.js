const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type' : 'text/html;charset=utf-8'});
    if (request.method === 'GET'){
        if (request.url === '/'){
            response.write('index sayfasındasınız');
        }
        else if(request.url === '/iletisim'){
            response.write('iletisim sayfasındasınız');
        }
        else{
            response.write('Aradığınız sayfa bulunamadı');
        }
    }
    response.end();
});

server.listen(3000);