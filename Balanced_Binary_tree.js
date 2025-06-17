const tree = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
};
function isBalanced(root){
    return checkHeight(root) !== -1;   
}

function checkHeight(node){
    if(node === null) return 0;

    const leftHeight = checkHeight(node.left);
    if(leftHeight === -1) return -1;
    const rightHeight = checkHeight(node.right);
    if(rightHeight === -1) return -1;

    if(Math.abs(leftHeight - rightHeight) > 1){
        return -1; // Not balanced
    }

    return Math.max(leftHeight, rightHeight) + 1; // Height of the current node
}

console.log(isBalanced(tree)); // Output: true