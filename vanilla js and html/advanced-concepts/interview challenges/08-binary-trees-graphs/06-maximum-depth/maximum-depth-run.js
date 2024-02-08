const { Node, maxDepth } = require('./maximum-depth');

// Create the binary tree:    3
//                           / \
//                          9  20
//                             / \
//                            15  7

const root = new Node(3);
const node9 = new Node(9);
const node20 = new Node(20);
const node15 = new Node(15);
const node7 = new Node(7);
const node21 = new Node(21);
const node22 = new Node(22);

root.left = node9;
root.right = node20;

node20.left = node15;
node20.right = node7;

node7.right = node21;

node21.right = node22;

console.log(maxDepth(root));