const Stack = require('./stack');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function depthFirstTraversal(root) {
  if (!root) return [];
  const resultArray = [];
  // const stack = [];
  const stack = new Stack();

  stack.push(root);

  while (!stack.isEmpty()) {
    const current = stack.pop();
    resultArray.push(current.data);

    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }

  return resultArray;
}

module.exports = {
  Node,
  depthFirstTraversal,
};
