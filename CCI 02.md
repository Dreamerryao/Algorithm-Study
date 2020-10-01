### 判定是否互为字符重排

> 爷吐了...这nm面试要凉

Given two strings,write a method to decide if one is a permutation of the other.

**Example 1:**
```
Input: s1 = "abc", s2 = "bca"
Output: true
```
**Example 2:**
```
Input: s1 = "abc", s2 = "bad"
Output: false
```
**Note:**

0 <= len(s1) <= 100

0 <= len(s2) <= 100


### 题解

最开始光想到遍历s1，看s2的index...然后家加上了length判断...然后...就没有然后了，字符串转数组都想不到么淦

``` javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    if(s1.length!==s2.length) return false;
    s2Arr = s2.split("");
    // console.log(s2Arr);

    for(i of s1){
        if(s2Arr.indexOf(i)===-1)return false;
        else s2Arr.splice(s2Arr.indexOf(i),1);
    }
    return true;
};
// CheckPermutation("abc","acb");
```

**思路2** 字符串转数组 sort后转回字符串比较(看看人家再看看自己

``` javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    return [...s1].sort().join("") === [...s2].sort().join("");
}
```