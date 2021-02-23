// let urlList = ["nodejs.org", "http://nodejs.org", "http://bytedance.com"]
// const formatUrl = urlList =>{
//     let len = urlList.length;
//     for(let i = 0;i<len;i++){
//         if(urlList[i].indexOf('http://')===-1){
//             urlList[i] = 'http://'+urlList[i];
//         }
//     }
//     return Array.from(new Set(urlList));
// }
// console.log(formatUrl(urlList));
// async function async1(){
// console.log('async1 start')
// await async2()
// console.log('async1 end')
// }
// async function async2(){
// console.log('async2')
// }
// console.log('script start')
// setTimeout(function(){
// console.log('setTimeOut')
// }, 0)
// async1()
// new Promise(function(resolve){
// console.log('promise1')
// resolve()
// }).then(function(){
// console.log('promise2')
// })
// console.log('script end')

// function toCurry(func, ...args) {
//     return function () {
//         console.log('arguments',arguments);
//         args = [...args,...arguments];
//         console.log('args',args);
//         if (args.length < func.length) {
//             return toCurry(func, ...args);
//         } else {
//             return func.apply(null, args);
//         }
//     }
// }
// function bar(a, b, c) {
//     return a + b + c;
// }
// var f = toCurry(bar)
// console.log(f(1)(2)(3));
// f = toCurry(bar)
// console.log(f(1)(2, 3));
// f = toCurry(bar)
// console.log(f(1,2)(3));

const curry = (fn,...args)=>{
    args.length>=fn.length?fn(...args):(..._args)=>curry(fn,...args,..._args);
}

// const curry = (fn, ...args) => 
//     // 函数的参数个数可以直接通过函数数的.length属性来访问
//     args.length >= fn.length // 这个判断很关键！！！
//     // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
//     ? fn(...args)
//     /**
//      * 传入的参数小于原始函数fn的参数个数时
//      * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
//     */
//     : (..._args) => curry(fn, ...args, ..._args);

// function add1(x, y, z) {
//     return x + y + z;
// }
// const add = curry(add1);
// console.log(add(1, 2, 3));
// console.log(add(1)(2)(3));
// console.log(add(1, 2)(3));
// console.log(add(1)(2, 3));

// let numbers = [1,2,3,2,2,2,5,4,2];
// let hashMap = {};
// const findNum = arr =>{
//     for(let i = 0;i<arr.length;i++){
//         if(hashMap[arr[i]]!==undefined)
//            hashMap[arr[i]] = hashMap[arr[i]]+1;
//         else hashMap[arr[i]] = 1;
//     }
//     for(let key of Object.keys(hashMap)){
//         if(hashMap[key]>=arr.length/2)return key;
//     }
//    return -1;
// }
// console.log(findNum(numbers));
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ test: 1 })
        resolve({ test: 2 })
        reject({ test: 2 })
    }, 1000)
}).then((data) => {
    console.log('result1', data)
    return data;
},(data1)=>{
    console.log('result2',data1)
}).then((data) => {
    console.log('result3', data)
})

