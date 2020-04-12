//Normal Yazım
/*
function evdenCik(text) {
    console.log(text);
    console.log ("Evden Çık!");
}

function iseGit() {
    console.log("İşe Git");
}
evdenCik("Merhaba");
iseGit();
*/

//Callback Yazımı 1
/*
function evdenCik(text,callback) {
    console.log(text);
    console.log ("Evden Çık!");
    callback();
}

function iseGit() {
    console.log("İşe Git");
}
evdenCik("Merhaba",iseGit);
*/
//Callback Yazımı 2
/*
function evdenCik(text,callback) {
    console.log(text);
    console.log ("Evden Çık!");
    callback();
}

var iseGit = function () {
    console.log("İşe Git");
}
evdenCik("Merhaba",iseGit);
*/
//Callback Yazımı 3
function evdenCik(text,callback) {
    console.log(text);
    console.log ("Evden Çık!");
    callback();
}


evdenCik("Merhaba",function () {
    console.log("İşe Git");
});