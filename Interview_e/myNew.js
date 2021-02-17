function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName = function(){
    return this.firstName+this.lastName;
}

const test = new Person('test','wow');
//new 干的事情
//1.根据父对象原型创建一个新的对象，继承父类原型方法
//2.添加父类的属性，初始化
//3.如果执行结果有返回值并且返回一个对象，则返回执行的结果，否则返回新创建的对象
function myNew(obj,...rest){
    //基于obj原型创建一个新的对象
    const newObj = Object.create(obj.prototype);
    const result = obj.apply(newObj,rest);
    return (typeof result === 'object' && result!=='null')?result:newObj;
}
const test2 = myNew(Person,'test2','wow');
console.log(test2.getFullName());