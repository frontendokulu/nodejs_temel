function foo() {
    return 'foo dan geliyorum';
}

function bar(){
    return 'bar dan geliyorum'
}
//bir modülü dışa aktarmak için gerekli kod
// module.exports = foo;

module.exports.foo = foo;
module.exports.bar = bar;