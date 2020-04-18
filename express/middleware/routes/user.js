const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const user = false;
    //kullanıcı varsa user, sayfası görünsün
    if (user){
        res.send("user sayfası")
    }
    //kullanıcı yoksa next ile app.js e hata verilerini gönder
    else {
        return next({
            status : 404,
            message:"Kullanıcı Bulunamadı"
        })
    }
});

module.exports= router ;
