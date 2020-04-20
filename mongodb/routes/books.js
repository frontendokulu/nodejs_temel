const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//models import

const Book = require('../models/Book');

router.post('/new', function(req, res, next) {
    // res.send('books');
    //Kaydedilecek veriyi belirledik.
    const book = new Book({
        title : 'PHP Frameworkleri : Symphony',
        published: true,
        category : 'Bilgisayar',
        comments : [
            { message : 'Tarihe ışık tutuyor' },
            { message : 'Dikkatle okunmalı' }
        ],
        meta : {
            votes: 12,
            favs: 101
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
    Book.find( {
        publishedAt: {
            $exists : true
        }
    }, 'title comments',(err, data) =>{
        res.json(data);
    });
});
//tekil arama birçok sonuçtan ilk karşılaşılan sonucu döndürür
//findOne metodu kullanılır.
router.get('/searchOne', (req, res) =>{
    Book.findOne( { published: true }, (err, data) =>{
        res.json(data);
    });
});
//findById Id bazlı arama için kullanılır.
router.get('/searchById', (req, res) =>{
    Book.findById( '5e9c8d11c894881c18b24053', (err, data) =>{
        res.json(data);
    });
});
//update metodu sadece şarta uygun bulduğu ilk kaydı günceller.
router.put('/update', (req, res) =>{
    Book.update(
        //şart - true olanları bul
        { published : false },
        // işlem - false yap
        { published : true, title: 'upsert test' },
        //bulduğu tüm kayıtları düzeltmesi için yazıldı.
        {
            multi :true
            // upsert : true
        },
        (err, data) =>{
        res.json(data);
    });
});
//findById Id bazlı arama için kullanılır.
router.put('/updateById', (req, res) =>{
    Book.findByIdAndUpdate( '5e9dc1c634fc1d24a83cf234',
        {userID : '5e9dc1c634fc1d24a83cf234'},
        (err, data) =>{
        res.json(data);
    });
});
//silme işlemi önce bul sonra sil, id ile bul, remove ile sil
//aynı şarta uyan birden fazla kayıt varsa ilk karşılaştığı kaydı siler
router.delete('/remove', (req, res) =>{
    Book.findOneAndRemove( {_id: '5e9d63e8e96c2001249966ea'}, (err, book) =>{
        book.remove((err,data) => {
            res.json(data);
        });
    });
});
//remove tamamını siler
router.delete('/removeAll', (req, res) =>{
    Book.remove( {published: false}, (err, data) =>{
        res.json(data);
    });
});
//sorting
router.get('/sort', (req, res) =>{
   Book.find({ }, (err,data) => {
       res.json(data);
   }).sort({'meta.favs':-1})
});
//limit and skip
router.get('/limit', (req, res) =>{
    Book.find({ }, (err,data) => {
        res.json(data);
    }).skip(2)
        .limit(2)
});
//aggregate
router.get('/aggregate',(req, res) =>{
    Book.aggregate([
        {
            // eşleşen değerleri getirir, şart gibi düşün
            $match: { }
        },
        /*{
            //alltaki kod category sayılarına göre kaç adet olduğunu bulmak için kullanılır.
            $group : {
                _id : "$category",
                //hangi kategoriden kaç adet olduğunu bulmak için $sum :1 kullanıldı
                //1 yerine kullanılan değer 2'şer veya 3'er sayacağını belirir.
                adet : {$sum: 3}
            }
        },*/
        {
            $project: {
                title :1,
                meta :1
            }
        },
        {
            $sort :{ title: -1 }
        },
        {
            $limit : 3
        },
        {
            $skip : 1
        }

    ], (err, result) => {
        res.json(result);
    });
});
router.get('/aggregate-lookup', (req, res) =>{
    Book.aggregate([
        {
          $match: {
              //vt de objectId türünden tutulduğu için bu tip arama ile boş sonuç döner.
              // _id : '5e9dc1c634fc1d24a83cf234'
              //object türü için mongoose dahil edilir ve bu şekilde kullanılır.
              _id : mongoose.Types.ObjectId('5e9dc1c634fc1d24a83cf234')
          }
        },
        {
            $lookup: {
                //hangi tablo
                from : 'users',
                //bizim tablodaki anahtar
                localField : 'userId',
                //yabancı tablodaki anahtar
                foreignField : '_id',
                as : 'user'
            }
        },
        {
            //yukardaki user ı almak için kullanıldı
            $unwind : '$user'
        },
        {
            $project : {
                title :1,
                //yukarıdaki kodu yazdığımızda sadece kullanıcı bilgilerini görebiliriz.
                //user : '$user'
                //user ın kullanıcı adı gelmesi için yazıldı.
                user : '$user.fullname'
            }
        }

    ],(err, result) => {
        res.json(result);
    });
});

module.exports = router;
