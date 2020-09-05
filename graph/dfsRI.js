// DFS recursive

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add nodes
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Add edges in  Both direction
  addEdges(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  //removing a edge
  // remove reges from both the side
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v != vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v != vertex1
    );
  }

  // remove a node from adjacency list
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }

  //depth first search recursively
  depthFirstSearchRecursive(startVertex) {
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      // check if no vertex available
      if (!vertex) {
        return undefined;
      }
      vsisted[vertex] = true;
      results.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return results;
  }

  depthFirstSearchIrerrative(start) {
    const visted = {};
    const stack = [start];
    const result = [];
    let currentVertex;

    visted[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visted[neighbor]) {
          vsisted[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}
