// const foo = require('./my_modules/modul1').foo;
// const bar = require('./my_modules/modul1').bar;
// Üstteki 2 satır yerine
const {foo, bar} =require('./my_modules/modul1');
console.log(foo());
console.log(bar());