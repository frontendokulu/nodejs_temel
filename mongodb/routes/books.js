const express = require('express');
const router = express.Router();

//models import

const Book = require('../models/Book');

router.post('/new', function(req, res, next) {
    // res.send('books');
    //Kaydedilecek veriyi belirledik.
    const book = new Book({
        title : 'Puslu Kıtalar Atlası',
        published: true,
        comments : [
            { message : 'Tarihe ışık tutuyor' },
            { message : 'Dikkatle okunmalı' }
        ],
        meta : {
            votes: 12,
            favs: 10
        }
    });
    //Veriyi kaydettik
    book.save((err,data) =>{
        //eğer hata varsa hatayı yaz
        if (err){
            console.log(err)
        }
        //eğer hata yoksa sayfada kaydedilen veriyi döndür
        else{
            res.json(data);
        }
    });
});

//arama için find metodu kullanılır
router.get('/search', (req, res) =>{
    Book.find( { }, 'comments meta ' ,(err, data) =>{
            res.json(data);
    });
});
module.exports = router;
