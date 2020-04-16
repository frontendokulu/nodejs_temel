const user = {id:1, name : "admin"};
const articles = [{id : 17, title : "HTML Nedir?" }, {id : 18, title : "CSS Nedir?"} ];
// console.log(user);
// console.log(article);
//alttaki fonksiyonlardan istenilen sürelerde değerler dönüyor,
//bu dönen değerler aşağıda kullanılacak.
const getUser = () => {
    return new  Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user)
        }, 3000)
    });
};
const getArticles = (userId) => {
    return new  Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(articles);
        },1000);
    });
};
//callback kullanmadan yapılan işlem
//asenkron çalışma yüzünden kullanıcılar gelmeden makaleler geldi
/*
getUser().then(function (user) {
    console.log(user);
});
getArticles().then(function (articles) {
    console.log(articles);
});
*/

//callback Hell
//asenkron işlemi engellemek için callback kullanıldı,
//ancak kod okunması zor hale geldi - callback hell
/*
let userId;
getUser()
.then(function (user) {
    userId =user.id;
    getArticles(userId).then(function (articles) {
        console.log(user);
        console.log(articles);
    });
});
*/
//promise chain
/*
getUser()
    .then((user) => {
        return getArticles(user.id);
    })
    //yukardn gelen user.id ye göre articles lar seçilir.
    .then((articles) => {
        console.log(user);
        console.log(articles);
        //article ile ilgili yeni birşey olsaydı örneğin comments
        //burda return ile article id yi gönder
        //then açıp ona göre comments i de alabilirsin.
    });
*/
//async - await
// async - await de fonksiyonları normal şekilde alt alta yazıyorsun iş bitiyor :)
// sıralamayı kendi yapıyor sen sadece sırasına göre yazıyorsun. mükkemmeellle

async function asenkronIslemler() {
    try{
        console.log("işlemler başladı");
        const user = await getUser();
        console.log("user işlemleri bitti");

        console.log("articles işlemleri başladı");
        const articles = await getArticles(user.id);
        console.log("articles işlemleri bitti");

        console.log(user, articles);
    }
    catch (e) {
        console.log(e);
    }

}
asenkronIslemler();
