p = [1,2,3], q = [1,2,3]
var isSameTree = function(p, q) {
    if(p==null && q==null){
        return true
    };
    if(p==null || q == null){
        return false
    };
    return(p.val == q.val) && isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};

console.log(isSameTree(p,q));