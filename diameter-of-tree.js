let UID = 0;
class Node {
  constructor(data) {
    this.data = data || ++UID;
    this.left = this.right = null;
  }
}

function getHeight(node) {
  if (!node) {
    return 0;
  }

  return 1 + Math.max(getHeight(node.left), getHeight(node.right)); // 1 + highest child (1 per level)
}

function getDiameter(node) {
  if (!node) {
    return 0;
  }

  // return 1 + getHeight(node.left) + getHeight(node.right); // going through root
  return Math.max(
    1 + getHeight(node.left) + getHeight(node.right), // always return at least 1 (+ heights on both sides)
    Math.max(
      getDiameter(node.left),
      getDiameter(node.right)
    )
  )
}

function initialize(total, input) {
  const map = {}; // id -> node
  const data = input.split(' ');
  let root = null;

  function addNode(id, parentID, dir) {
    map[parentID] = map[parentID] || new Node(parentID);
    if (!root) {
      root = map[parentID]; // forgive me, i'm in a hurry ;)
    }
    const parent = map[parentID];
    const child = new Node(id);
    parent[dir === 'L' ? 'left' : 'right'] = child;
    map[id] = child;

    return child;
  }

  for (let i = 0; i < total; i++) {
    const parentID = data[i * 3];
    const id = data[i * 3 + 1];
    const dir = data[i * 3 + 2];

    addNode(id, parentID, dir);
  }

  return root;
}

// console.log(getDiameter(initialize(12, '1 2 L 1 3 R 2 4 L 2 5 R 3 8 R 5 6 L 5 7 R 8 9 R 9 11 L 9 12 R 11 13 L 11 14 R')));
console.log(getDiameter(initialize(14, '1 2 R 2 3 R 1 4 L 4 5 L 5 6 L 5 7 R 7 8 L 8 9 L 8 10 R 4 11 R 11 12 R 12 13 L 12 14 R 14 15 R')));