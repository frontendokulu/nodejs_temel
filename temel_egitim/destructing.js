const degerler = ['a','b','c'];
//es5 yapılan
/*
deger1 =  degerler[0];
deger2 =  degerler[1];
deger3 =  degerler[2];
*/
//es6 da yapılan
// const [deger1,deger2,deger3]= degerler;
// console.log(deger1,deger2,deger3);

//Aynı yöntem nesneler için de geçerli

const zuko = {
    deger1 : 'Ateş Krallığı',
    deger2 : '14',
    deger3 : {
        deger4 : 'Aang e yardım etmek'
    },
    deger5:'Ateş Bükücü'
}
// const {deger1,deger2,deger5 = 'Ateş Bükücü',deger3} = zuko;
// console.log(zuko);
// console.log(deger1, deger2,deger5,deger3);

//object içinde object e erişmek için alttaki yöntem uygulanır.
const {deger3 : {deger4}} = zuko;
console.log(deger4);
//object içindeki object in key ini değiştirmek içinde şu yapılır.
const {deger3 : {deger4 : gizliGorev} }= zuko;
console.log(gizliGorev);