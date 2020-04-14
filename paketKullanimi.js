const slugify = require('slugify');

const metin = "Avatar Aang bir Hava Bükücüdür";

const slug = slugify(metin);
const slug2 = slugify(metin,'_');
console.log(slug)
console.log(slug2);
