//二叉树最大深度
//1.深度优先
var maxDepth = function(root) {
    if(root===null)return 0;
    if(root.left===null&&root.right===null)return 1;//leaf
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
};
//2.广度优先
const maxDepth = root =>{
    let queue = [];
    let ans = 0;
    if(root===null) return ans;
    queue.push(root);
    while(queue.length>0){
        let len = queue.length;
        for(let i = 0;i<len;i++){
            let tmp = queue.shift();
            if(tmp.left!==null)queue.push(tmp.left);
            if(tmp.right!==null)queue.push(tmp.right);
        }        
        ans++;
    }
    return ans;
}