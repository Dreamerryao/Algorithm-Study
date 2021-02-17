//数一共几个搜索树 dp
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = new Array(n+1).fill(0);
    dp[0] = dp[1] = 1;
    for(let i=2;i<=n;i++){
        for(let j = 0;j<i;j++){
            dp[i]+=(dp[i-j-1]*dp[j]);
        }
    }
    return dp[n];
};
//二叉树中序遍历
//1.递归
const inorderTraversal = root=>{
    let res = [];
    const inOrder = root=>{
        if(!root)return;
        inOrder(root.left);
        res.push(root.val);
        inOrder(root.right);
    }
    inOrder(root);
    return res;
}
//2.非递归
const inorderTraversal_rec = root =>{
    let res = [];
    let stack = [];
    while(root!==null||stack.length>0){
        while(root!==null){
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        // if(root.right!==null) 这样会导致无限递归
        root = root.right;
    }
    return res;
}

//单词搜索 dfs
var exist = function(board, word) {

    let m = board.length;
    let n = board[0].length;
    let used = Array.from(new Array(m),()=>new Array(n).fill(0));

    let dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    const check = (i,j,num)=>{
        if(num>=word.length)return false;
        
        if(num===word.length-1&&word[num]===board[i][j])return true;
        if(word[num]!==board[i][j])return false;
        for(let h = 0;h<dirs.length;h++){
            let [dx,dy] = [i+dirs[h][0],j+dirs[h][1]];
            let flag = false;
            if(!(dx<0||dx>=m||dy<0||dy>=n)&&!used[dx][dy]){
                used[dx][dy] = 1;
                flag = check(dx,dy,num+1);
                used[dx][dy] = 0;
            }
            if(flag) return true;
        }
        return false;
    }
    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            used[i][j] = 1;
            if(check(i,j,0))return true;
            used[i][j] = 0;
        }
    }
    return false;
};

//不同路径! 动态规划hhh
const uniquePaths = (m,n)=>{
    //dp[m][n] = dp[m][n-1]+dp[m-1][n]
    let dp = Array.from(new Array(m+1),()=>new Array(n+1).fill(0));
    dp[0][1] = 1;
    for(let i = 1;i<=m;i++){
        for(let j = 1;j<=n;j++){
            dp[i][j] = dp[i-1][j]+dp[i][j-1];
        }
    }
    return dp[m][n];
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = intervals =>{
    intervals.sort((a,b)=>a[0]-b[0]);
    let ans = [intervals[0]];
    for(let i= 1;i<intervals.length;i++){
        let len = ans.length;
        if(intervals[i][0]<=ans[len-1][1])ans[len-1][1] = Math.max(intervals[i][1],ans[len-1][1]);
        else ans.push(intervals[i]);
    }
    return ans;
}
//跳跃游戏 非动态规划
const canJump_ans = nums=>{
    let max = 0;
    for(let i = 0;i<nums.length;i++){
        if(max<i)return false;
        max = Math.max(max,i+nums[i]);
        if(max>=nums.length-1)return true;
    }
    return false;
}
var canJump = function(nums) {
    let canArr = new Array(nums.length).fill(0);
    canArr[0] = 1;
    for(let i = 0;i<nums.length;i++){
        if(canArr[i]){
            if(nums[i]+i>=nums.length-1)return true;
            for(let j = i+1;j<=i+nums[i];j++){
                canArr[j] = true;
            }
        }
        else{
        break;
        }
    }
    return false;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let arr = new Array(strs.length).fill(0);
    let mmap = {};
    let res = [];
    for(let i = 0;i<strs.length;i++){
        let str = strs[i].split('').sort().join('');
        // let ssum = 0;
        // for(let chr of str){
        //     ssum+=chr.charCodeAt();
        // }
        mmap[str]===undefined?mmap[str] = [strs[i]]:mmap[str].push(strs[i]);
    }
    return Object.values(mmap)
};
//旋转图像
const rotate = matrix=>{
    for(let i = 0;i<matrix.length;i++){
        for(let j = i+1;j<matrix.length;j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]];
        }
    }
    for(let row of matrix){
        row.reverse();
    }
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//搜寻边界: 二分法+中心扩散
const searchRange = (nums,target) =>{
    const binarySearch = (nums,target)=>{
        let left = 0,right = nums.length-1;
        while(left<=right){
            let mid = Math.floor((left+right)/2);
            if(target===nums[mid])return mid;
            target>nums[mid]?left=mid+1:right=mid-1;
        }
        return -1;
    }
    let ans = [-1,-1];
    let qivot = binarySearch(nums,target);
    // console.log(qivot);
    if(qivot<0)return ans;
    let l=qivot,r = qivot;
    while(1){
        flag = 2;
        l>0&&nums[l-1]===target?l--:flag--;
        r<nums.length&&nums[r+1]===target?r++:flag--;
        if(flag===0){
            ans = [l,r];
            break;
        }
    }
    return ans;
};
//nums.reduce((h, v, i) => (h[v] ? h[v][1] = i : h[v] = [i, i], h), Object.create(null))[target] || [-1, -1]

//33.搜索旋转排序数组
//有序 就二分 局部有序 就想办法二分
const search = (nums,target)=>{
    let l = 0,r = nums.length-1;
    while(l<r){
        let mid = Math.floor((l+r)/2);
        // console.log(mid);
        if(mid === l)break;
        // console.log('l',l,'r',r);
        if(nums[mid]>=nums[l]){//左侧是有序的
            if(target<nums[l]||target>nums[mid]){
                l = mid;
            }
            else{
                r = mid;
            }
        }
        else{//右侧是有序的
            if(target<nums[mid]||target>nums[r]){ 
                r = mid;
            }
            else{
                l = mid;
            }
        }
    }
    if(target===nums[l])return l;
    if(target===nums[r])return r;
    return -1;
}
// console.log(search([4,5,6,7,0,1,2],0))
//突然就想写个快排
const quickSort = arr =>{
    if(arr.length<2) return arr;
    let pivot = arr[0];
    let left_arr = [],right_arr = [];
    for(let i = 1; i < arr.length; ++i){
        pivot<arr[i]?right_arr.push(arr[i]):left_arr.push(arr[i]);
    }
    return quickSort(left_arr).concat(pivot).concat(quickSort(right_arr))
}
// console.log(quickSort([0,123,214125,3523,4213213,124,3,42]))

//32.最长有效括号
//输出最长的有效括号子串
/**
 * @param {string} s
 * @return {number}
 */
//来个害怕版的
const longestValidParentheses_stack = s =>{
    let arr = new Array(s.length).fill(0);
    let stack = [];
    let res = 0;
    for(let i = 0;i<s.length;i++){
        if(s[i]==='('){
            stack.push(i);
        }
        if(s[i]===')'&&stack.length>0){
            arr[i] = 1;
            arr[stack.pop()] = 1;
        }
    }
    let cnt = 0;
    for(let i = 0;i<arr.length;i++){
        arr[i]&&cnt++;
        arr[i]||(cnt = 0);
        cnt>res &&(res = cnt);
    }
    return res;
}
const longestValidParentheses = s=> {
    let left = 0,right = 0;
    let res = 0;
    //(()这种情况考虑不到
    for(let i = 0;i<s.length;i++){
        s[i]==='('?left++:right++;
        if(left===right){
            res = Math.max(res,2*right);
        }
        if(right>left) left = right = 0;
    }
    left = right = 0;
    for(let i = s.length-1;i>=0;i--){
        s[i]==='('?left++:right++;
        if(left===right){
            res = Math.max(res,2*left);
        }
        if(left>right) left = right = 0;
    }
    return res;
};
// console.log(longestValidParentheses('(()'))

//31.下一个序列
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (nums)=>{
    if(nums.length === 1) return;
    let index = nums.length-2;
    while(index >=0){
        if(nums[index]<nums[index+1]){
            let tmp = nums.length -1;
            while(tmp>index){
                if(nums[tmp]>nums[index]){
                    let t = nums[tmp];
                    nums[tmp] = nums[index];
                    nums[index] = t;
                    break;
                }
                tmp--;
            }
            break;
        }
        index--;
    }
    let begin = index +1;
    let end = nums.length  -1;
    while(begin<end){
        let t = nums[begin];
        nums[begin] = nums[end];
        nums[end] = t;
        begin++;
        end--;
    }
}