### URL化

> nt题 高兴

URL化。编写一种方法，将字符串中的空格全部替换为%20。假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。（注：用Java实现的话，请使用字符数组实现，以便直接在数组上操作。）

**例1:**
```
 输入："Mr John Smith    ", 13
 输出："Mr%20John%20Smith"
 ```
**示例2:**
```
 输入："               ", 5
 输出："%20%20%20%20%20"
 ```
**提示：**

字符串长度在[0, 500000]范围内。


### 题解

终于碰到一道nt题了 不容易 replaceAll,注意length

``` javascript
/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function(S, length) {
    S = S.slice(0,length);
    return S.replaceAll(" ","%20");
};
```

> 解法二 正则，是我不会的东西了

``` javascript
var replaceSpaces = function(S, length) {
  return S.substr(0, length).replace(/\s/g, '%20')
};
```