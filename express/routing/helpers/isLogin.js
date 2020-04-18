const isLogin = (req, res, next) =>{

    const isLogin = true;

    if (isLogin){
        //response u çalıştırır,
        // eğer user girildi ise userdaki response u çalıştırır.
        next();
    }
    else{
        res.send("Lütfen Giriş Yapın");
    }
};

module.exports = isLogin;