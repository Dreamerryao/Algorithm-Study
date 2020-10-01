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