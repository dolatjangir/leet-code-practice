const binaryTree = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 9,
      left: null,
      right: null
    }
  }
};


function invertBinaryTree(root) {
    if (root === null) {
        return null;
    };

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertBinaryTree(root.left);
    invertBinaryTree(root.right);
    console.log(root.val);
    return root;
}
console.log(invertBinaryTree(binaryTree));