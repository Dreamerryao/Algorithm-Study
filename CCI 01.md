### 判定字符串是否唯一 

实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

示例 1：

输入:

```
s = "leetcode"
```

输出: 

```
false 
```
示例 2：

输入: 
```
s = "abc"
```
输出: 
```
true
```
限制：

0 <= len(s) <= 100

如果你不使用额外的数据结构，会很加分。


### 题解

没什么好说的，本来想二重循环搞定，觉得二重循环复杂度高一点


``` javascript
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    for(i in astr){
        // console.log(i);
        if(i!=astr.lastIndexOf(astr[i]))return false;
    }
    return true;
};
```

看题解看到有一种一行代码搞定的高手

``` javascript
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
 return new Set(astr).size === astr.length
};
```