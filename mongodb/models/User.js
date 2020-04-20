const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//kaydedilecek tablonun elemanlarını belirle
//title sütunu string olacak gibi
const UserSchema = new Schema({
   fullname :{
       type : String,
       required :true
   },
   age : {
       type: Number,
       required: true
   }


});

module.exports = mongoose.model('user', UserSchema);
