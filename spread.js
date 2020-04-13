//ekrana dizinin tüm elemanlarını yazdırmak için kullanılır.
// ... işaretleri spread operatördür
const dizi = [1,2,3];
//spread i kullanmadığında dizinin ilk elemanı başka bir dizi olarak görünür
//spread i kullanırsan elemanları eklersin.
const dizi2 = [...dizi,4,5,6];
console.log(...dizi2);

const dizi3 = ['a','b','c','d'];
//...rest i kullanarak dizinin kalan elemanlarını ayırdık.
//hatta rest olarak yazdırırsak bir dizi elde ettiğimizi görürürüz.
const [deger1, deger2, ...rest] = dizi3;
console.log(deger1,deger2);
console.log(rest);