const express = require('express');
const router = express.Router();

//helpers
const isLogin = require("../helpers/isLogin");

router.get('/', isLogin, (req, res) => {
    res.send("Profile Sayfası");
});


module.exports= router ;
