class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Returns the maximum depth of the binary tree.
 * @param {Node} root - The root node of the binary tree.
 * @returns {number} - The maximum depth of the binary tree.
 */
function maxDepth(root) {
  if (!root) {
    return 0;
  }
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

module.exports = {
  maxDepth,
  Node,
};
