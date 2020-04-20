const express = require('express');
const router = express.Router();

const User = require ('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/new', function(req, res, next) {
  // res.send('books');
  //Kaydedilecek veriyi belirledik.
  const user = new User({
    fullname : 'Mehmet Gökalp',
    age : 32

  });
  //Veriyi kaydettik
  user.save((err,data) =>{
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
module.exports = router;
