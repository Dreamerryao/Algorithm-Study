//ex1
// let a = {},
//     b = '0',
//     c = 0;
// a[b] = 'lala';
// a[c] = 'lele';
// console.log(a[b])

// var a = function(){
//     console.log(this);
// }
// new a();

var a={
    f:function(){
        console.log(this);
    }
}
a.f();