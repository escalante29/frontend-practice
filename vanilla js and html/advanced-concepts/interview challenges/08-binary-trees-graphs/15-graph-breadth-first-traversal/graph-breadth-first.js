const Queue = require('./queue');

/**
 * Performs a Breadth First Traversal of a graph.
 * @param {Graph} graph - The graph to traverse.
 * @param {string} startingVertex - The vertex to start the traversal from.
 * @returns {string[]} - The vertices visited in the order they were traversed.
 */
function breadthFirstTraversal(graph, startingVertex) {
  const visited = new Set();
  const result = [];
  const queue = new Queue();

  queue.enqueue(startingVertex);
  visited.add(startingVertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    result.push(currentVertex);

    for (const neigbor of graph.adjacencyList[currentVertex]) {
      if (!visited.has(neigbor)) {
        queue.enqueue(neigbor);
        visited.add(neigbor);
      }
    }
  }
  return result;
}

module.exports = breadthFirstTraversal;
