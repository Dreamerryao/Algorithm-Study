

//12. 整数转罗马数字
// const intToRoman = num =>{
//   //罗马数字的形式很特别
//   //js用dic好坑，for in key时候会按照ascii排序
//   //   const mmap = {1000:'M',900:'CM',500:'D',400:'CD',100:'C',90:'XC',50:'L',40:'XL',10:'X',9:'IX',5:'V',4:'IV',1:'I'};
//   const arr = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
//   const chars =['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

//   let tmp = num;
//   let nowIndex = 0;
//   let res = ""
//   while(tmp!==0){
//     let hh = Math.floor(tmp/arr[nowIndex]);
//     for(let i = 0;i<hh;i++){
//         res +=chars[nowIndex];
//     }
//     tmp -= hh*arr[nowIndex];
//     nowIndex ++;
//   }
// //   console.log(res)
//   return res;
// }

// intToRoman(111);
//9.回文数 数字法
// const isPalindrome = x=>{
//     if(x<0) return false;
//     let now = 0;
//     let hh = x;
//     while(hh!==0){
//         now = now*10 + hh%10;
//         hh = Math.floor(hh/10);
//     }
//     return now === x;
// }

//8.atoi
// var myAtoi = function(s) {
//     let sign = 1;
//     let res =0;
//     shouldNum = 0;
//     for(let i = 0;i<s.length;i++){
//         let chr = s[i];
//         if(chr===' '&&!shouldNum)continue;
//         if(chr==='-'&&!shouldNum){
//             sign =-1;
//             shouldNum = 1;
//             continue;
//         }
//         if(chr==='+'&&!shouldNum){
//             shouldNum = 1;
//             continue;
//         }
//         if(chr>='0'&&chr<='9'){
//             shouldNum = 1;
//             res = res*10+parseInt(chr);
//             continue;
//         }
//         break;
//     }
//     console.log('res',res);
//     res = sign>0?res<2**31?res:2**31-1:res<=2**31?res:2**31;
//     return sign*res;
// };
// console.log(myAtoi('-123'))

//7.整数反转
// const reverse =x=>{
//     let hh = Math.abs(x);
//     console.log(hh)
//     let res = 0;
//     while(hh!==0){
//         res = res*10+hh%10;
//         hh = Math.floor(hh/10);
//         console.log(hh)
//     }
//     console.log(Math.sign(x));
//     return Math.sign(x)>0?(res<2**31?res:0):(res<=2**31?-res:0);
// }


// var reverse = function(x) {
//     let s = x.toString();
//     let res = '';
//     let neg = s[0]==='-'?1:0;
//     if(neg) res='-';
//     let isLastZero = true;
//     for(let i =s.length-1;i>=neg;i--){
//         if(s[i]!=='0')isLastZero = false;
//         if(isLastZero)continue;
//         res+=s[i];
//     }
//     if(isLastZero) res+='0';
//     console.log(parseInt(s));
//     console.log(Math.pow(2,31)-1);
//     if(parseInt(res)>Math.pow(2,31)-1 || parseInt(res)<Math.pow(2,31)*(-1))res = '0';
//     return res;
// };
// console.log(reverse(-123));

// 测试this
// function pp(){
//     console.log(this);
// }
// let obj = {}
// pp.call(obj);

//5. 最长回文子串
// 状态转移还比较好想 dp[i][j] = dp[i+1][j-1] &&s[i] === s[j]
//
// let s = 'abbcba'
// const longestPalindrome = s=>{
//     let ans = ''
//     let n = s.length;
//     let dp = Array.from(new Array(n),()=>new Array(n).fill(0));
//     for(let i = n-1;i>=0;i--){
//         for (let j = 0;j<n;j++){
//             if(j<i){
//                 dp[i][j] = 1;
//                 continue;
//             }
//             if(i==j) dp[i][j] = 1;
//             else{
//                 dp[i][j] = s[i]===s[j]&& dp[i+1][j-1];
//             }
//             if(dp[i][j] && j - i + 1> ans.length) ans = s.substr(i,j-i+1);
//         }
//     }
//     return ans;
// }
// console.log(longestPalindrome(s));

// 动态规划 迎硬币组成  
// 有1.2.5三种，找11的最小硬币组成方法
// let arr = [2,5,7];
// let num = 27;
// const solution = (arr,num) =>{
//     let arrs = new Array(num+1).fill(Infinity);
//     arrs[0] = 0;
//     let n = arr.length;
//     for(let i = 0;i<=num;i++){
//         for(let j = 0;j<n;j++){
//             if(i>=arr[j]&&arrs[i-arr[j]]!==Infinity)
//             arrs[i] = Math.min(arrs[i-arr[j]]+1,arrs[i]);
//         }
//     }
//     if(arrs[num] === Infinity){
//         arrs[num] = -1;
//     }
//     return arrs[num]
// }
// console.log(solution(arr,num))

//3 无重复字符的最长子串
// /**
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLongestSubstring = s => {
//     let tmpString = "";
//     let res = 0;
//     for(let i = 0;i<s.length;i++){
//         if(tmpString.indexOf(s[i])===-1){
//             tmpString = tmpString + s[i];
//         }
//         else{
//             res = Math.max(res,tmpString.length);
//             let items = tmpString.split(s[i]);
//             tmpString = items[items.length-1] + s[i];
//         }
//     }
//     return Math.max(res,tmpString.length);
// };




// //2 两数相加
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
//  const addTwoNumbers = (l1,l2) =>{
//      let carry = 0;
//      let sumOne;
//      let res = new ListNode(-1);
//      let head = res;
//      while(l1||l2||carry){
//         let v1 = l1===null?0:l1.val;
//         let v2 = l2===null?0:l2.val;
//         sumOne = v1 + v2 + carry;
//         carry = sumOne >=10? 1:0;
//         let tmp = new ListNode(sumOne%10,null);
//         res.next = tmp;
//         res = res.next;
//         if(l1!==null)l1 = l1.next;
//         if(l2!==null)l2 = l2.next;
//      }
//      return head.next;
//  }
//  addTwoNumbers(null,null);