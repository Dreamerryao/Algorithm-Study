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
async function async1(){
console.log('async1 start')
await async2()
console.log('async1 end')
}
async function async2(){
console.log('async2')
}
console.log('script start')
setTimeout(function(){
console.log('setTimeOut')
}, 0)
async1()
new Promise(function(resolve){
console.log('promise1')
resolve()
}).then(function(){
console.log('promise2')
})
console.log('script end')