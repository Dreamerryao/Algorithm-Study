const myInstanceof = (target,origin)=>{
    if(typeof target!=='object'||target===null) return false;
    let pro = Object.getPrototypeOf(target);
    let ori = origin.prototype;
    while(pro){
        if(pro===ori){
            return true;
        }
        pro = Object.getPrototypeOf(pro);
    }
    return false;
}
console.log(myInstanceof({'wow':1},Object))
//简略版
// class PrimitiveString {
//     static [Symbol.hasInstance](x){
//         return typeof x === 'string';
//     }
// }

// console.log('123' instanceof PrimitiveString)

const primitive = wow =>{
    return class {
        static [Symbol.hasInstance](x){
            return typeof x === wow;
        }
    }
}

const primitiveString = primitive('string');
const primitiveNumber = primitive('number');
console.log('123' instanceof primitiveString)
console.log(123 instanceof primitiveNumber)