const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Profile Sayfası");
});


module.exports= router ;
