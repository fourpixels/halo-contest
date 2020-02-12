let UID = 0;
class Node {
  constructor(data) {
    this.data = data || ++UID;
    this.left = this.right = null;
  }
}

function getLeavesCount(node) {
  if (!node) {
    return 0;
  }

  if (!node.left && !node.right) { // leaf (no child nodes)
    return 1;
  } else {
    return getLeavesCount(node.left) + getLeavesCount(node.right);
  }
}

// initialize
const root = new Node(1);
root.left = new Node(10);
root.left.left = new Node(5);
root.right = new Node(39);

console.log(getLeavesCount(root));