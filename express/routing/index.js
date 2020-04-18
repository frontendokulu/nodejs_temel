const express = require('express');
const app = express();

// app.set('view engine', 'pug');
//all metodu gelen tüm istekleri karşılar.
//Alttaki kullanım yerine zincirleme de kullanılabilir.
app.get('/iletisim', (req,res) => {
    res.send('iletisim get');
});

app.post('/iletisim', (req,res) => {
    res.send('İletişim post methodu');
});

//parametre göndermek
app.get('/veriler/:userId?/:postId?', (req,res) =>{
    res.send(req.params);
});
// zincirleme kullanımı
/*
app.get('/iletisim', (req,res) => {
    res.send('iletisim get');
}).post('/iletisim', (req,res) => {
    res.send('İletişim post methodu');
});
*/

/*
app.all('/iletisim', (req,res) => {
    res.send('İletişim all() methodu');
});
*/

app.listen(3000, () =>{
    console.log("express çalıştı");
});