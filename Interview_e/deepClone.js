let obj = {
    a: 100,
    b: [10, 20, 30],
    c: {
        x: 10
    },
    d: /^\d+$/,
    e:new Date(),
    f:function(){
        console.log("???");
        }
};

let arr = [10, [100, 200], { x: 10, y: 20 }];;

let obj2 = {};
for( let key in obj){
    if(!obj.hasOwnProperty(key)) continue;
    obj2[key] = obj[key];
}
obj2.c.x = 1000;
//拷贝失败，只把第一级clone了，操作内层还会对原来的数据产生影响

let obj3 = JSON.parse(JSON.stringify(obj));

function deepClone(obj){
    if(obj === null) return null;
    if(typeof obj !=="object")  return obj;
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);

    //不直接创建空对象的目的，是使得克隆结果和之前保持相同所属类
    let newObj =new obj.constructor;
    for(let key in obj){
        if(!obj.hasOwnProperty(key)) continue;
            newObj[key] = deepClone(obj[key]);
    }
    return newObj;
}


// function deepClone(obj){
//     if(obj === null)return null;
//     if(typeof obj !=='object') return obj;
//     if(obj instanceof Date) return new Date(obj);

//     let newObj = new obj.constructor;
//     for(let key in obj){
//         if(!obj.hasOwnProperty(key)) continue;
//         newObj[key] = deepClone(obj[key]);
//     }
//     return newObj;
// }
let obj4 = deepClone(obj);
console.log(obj4);
console.log(obj4 === obj);
// console.log(obj4.f === obj.f);
