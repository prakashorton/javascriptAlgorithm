var distanceK = function (root, target, K) {
  const adjacencyList = {};

  function createGraph(node, parent) {
    if (!node) return;
    const neighbor = [];

    if (node.left) {
      neighbor.push(node.left.value);
      createGraph(node.left, node.value);
    }
    if (node.right) {
      neighbor.push(node.right.value);
      createGraph(node.right, node.value);
    }
    if (parent !== null) neighbor.push(parent);
    adjacencyList[node.value] = neighbor;
  }

  console.log(createGraph(root, null));

  const queue = [[target.value, 0]];
  const visited = new Set();
  const result = [];

  while (queue.length) {
    const [node, gen] = queue.shift();
    if (visited.has(node)) continue;
    if (gen === K) result.push(node);
    if (gen > K) return result;

    for (let n of adjacencyList[node]) {
      queue.push([n, gen + 1]);
    }
    visited.add(node);
  }
  return result;
};
