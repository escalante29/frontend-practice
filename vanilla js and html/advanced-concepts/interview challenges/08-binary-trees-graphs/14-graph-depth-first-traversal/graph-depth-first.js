const Stack = require('./stack');

/**
 * Returns an array containing the vertices visited in the order they were traversed.
 * @param {Graph} graph - The graph to traverse.
 * @param {string} startingVertex - The vertex to start the traversal from.
 * @returns {string[]} - The vertices visited in the order they were traversed.
 */
function depthFirstTraversal(graph, startingVertex) {
  if (!graph.adjacencyList[startingVertex]) {
    return [];
  }

  const visited = {};
  const stack = new Stack();
  const result = [];

  stack.push(startingVertex);
  visited[startingVertex] = true;
  while (!stack.isEmpty()) {
    const currentVertex = stack.pop();
    result.push(currentVertex);

    graph.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }
  return result;
}

module.exports = depthFirstTraversal;
