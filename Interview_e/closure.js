// function fn1(){
//     var a = 2;
//     function fn2(){
//         a++;
//         console.log(a);
//     }
//     return fn2;
// }
// var f = fn1();
// f();//3
// f();//4 更新的是闭包的值
let num = 3;
for(let i=0;i<num;i++){
    (function(hh){
        setTimeout(
            ()=>console.log("wow"),hh*1000
        )
    })(i)
}

for(let i = 0;i<num;i++){
    setTimeout(()=>console.log("wow"),i*1000);
}

function fun(n,o){
    console.log(o);
    return {
        fun:function(m){
            return fun(m,n);
        }
    }
}
// var a = fun(0);//undefined
// a.fun(1); //0
// a.fun(2); //0
// a.fun(3); //0
// var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1);
c.fun(2);
c.fun(3);