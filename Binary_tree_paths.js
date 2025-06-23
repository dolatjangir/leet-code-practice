const tree = {
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

function binaryTreePath(root){
const paths = [];
if(!root){
    return paths;
}

//healper function for find all recursively
function allPaths(node, path) {
    if (!node.left && !node.right) {
        paths.push(path);
    }
    if (node.left) {
        allPaths(node.left, path + '->' + node.left.val);
    };
   if (node.right) {
        allPaths(node.right, path + '->' + node.right.val);
    };
};
allPaths(root, String(root.val));
return paths;
}

console.log(binaryTreePath(tree));