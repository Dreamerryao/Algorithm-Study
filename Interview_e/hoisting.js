// function fn(){
//     a = 2; //意外的全局变量，会引发内存泄漏 
//     console.log(a);
// }
// fn();
var c ;
function c(c){
    console.log(c);
    var c = 3;//不会提升undefined
}
c(2);//2

// var c =1;//因为在这赋值了
// function c(c){
//     console.log(c);
// }
// c(2);//报错