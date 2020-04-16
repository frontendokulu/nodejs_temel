const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req,res ) => {
    res.render('index',{isim:"Avatar Aang", yetenek : "Hava Bükücü" });
});
app.get('/anasayfa', (req,res ) => {
    res.render('anasayfa');
});
app.get('/iletisim', (req,res ) => {
    res.render('iletisim');
});

app.listen(3000, () =>{
    console.log("express çalıştı");
});