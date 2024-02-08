class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Returns a boolean indicating whether the binary tree is a valid binary search tree (BST).
 * @param {Node} root - The root node of the binary tree.
 * @param {number} min - The minimum value of the valid range for the current node's value.
 * @param {number} max - The maximum value of the valid range for the current node's value.
 * @returns {boolean} - A boolean indicating whether the binary tree is a valid binary search tree (BST).
 */
function isValidBST(root) {
  function isValidSubtree(node, min, max) {
    if (!node) {
      return true;
    }

    if (
      (min !== null && node.value <= min) ||
      (max !== null && node.value >= max)
    ) {
      return false;
    }
    return (
      isValidSubtree(node.left, min, node.value) &&
      isValidSubtree(node.right, node.value, max)
    );
  }

  return isValidSubtree(root, null, null);
}

module.exports = { Node, isValidBST };
