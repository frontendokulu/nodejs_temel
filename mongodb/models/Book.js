const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//kaydedilecek tablonun elemanlarını belirle
//title sütunu string olacak gibi
const BookSchema = new Schema({
   title :{
       type : String,
       required :true
   },
    //
   published : Boolean,
   // Alttaki kullanımda bir sütun için birden özellik kullanıldığında yapılır.
   // örneğin aşağıda defa
   published : {
       type : Boolean,
       default : false
   },
   comments: [{ message : String}],
   meta : {
       votes : Number,
       favs : Number
   },
   category :String,
   publishedAt : {
       type:Date,
       default: Date.now()
   },

});

module.exports = mongoose.model('book', BookSchema);
