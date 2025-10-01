const root = {
    val: 1,
    left:{
        val:2
    },
    right:{
        val:3,
        left:{
            val:4
        }
    }
};


var findTilt = function(root) {
    let total = 0;
    dfs(root);
    return total;
    function dfs(root){
        if(!root){
            return 0;
        }
        let left = dfs(root.left);
        let right = dfs(root.right);
        let tilt = Math.abs(left- right);
        total += tilt;
        return root.val + left + right
    }
};

console.log(findTilt(root));