// Depth First Search

// Example Data

/*  
Create Graph With Dummy Nodes
All Vertex with edges
{
    a:[b,c],
    b:[a,d],
    c:[a,e],
    d:[b,e,f],
    e:[c,d,f],
    f:[d,e]
}
Visited 
{
    a:true,
    b:true,
    d:true,
    e:true,
    c:true,
    f:true
}
Create Nodes
a.addVertex(a)
a.addVertex(b)
a.addVertex(c)
a.addVertex(d)
a.addVertex(e)
a.addVertex(f)

Create Edges
a.addEdge(a,b)
a.addEdge(a,c)
a.addEdge(b,d)
a.addEdge(c,e)
a.addEdge(d,f)
a.addEdge(d,f)
a.addEdge(e,f)
*/

// PsudoCode- Recursive
//  DFS(vertex):
//      if vertex is empty
//          return (this is base case)
//      Add vertex to return list
//      Mark vertex as visited
//      For each neibhor in vertex's neighbors:
//          if neighbor is not visited:
//              recursively call DFS on neighbor

// PsudoCode - Recursive
//  -   The function should accept a starting node
//  -   Create a list to store the end result, to be retured at the very end
//  -   Create a object to store visted vertex
//      -   The helper function should place the vertex into the result array
//      -   The helper function should place the vertex it accepts into the
//              visited object and push the vertex into the result array
//      -   Loop over all of the values in the adacencyList for the vertex
//      -   If any of those values have not been visted, recursively invoke
//              the helper function with the vertex
//      -   Invoke the helper function with the starting vertex
//      -   Return the result array


// Psudocode - Iterative
//  DFS_Interative(start);
//      let s be a stack
//      s.push(start)
//      while s in not empty
//          vertex = s.pop();
//          if vertex is not labeled as discovered/visited;
//              visit vertex (add to result list)
//              label vertex as discovered
//              forEach of vertexs neighbors, n do
//                  s.push(n);

// PsudoCode - Iterative
//  -   The function should accept a starting node
//  -   Create a stack to help use keep track of vertices(using array)
//  -   Create a array to store the end result, to be retured at the very end
//  -   Create an object to store visited verticles
//  -   Add the starting vertex to the start, and mark it visited
//  -   While the start has something in it
//      -   Pop the next vertex from the start
//      -   If that vertex hasnt been visited yet
//          -   Mark it as visited
//          -   Add it to the result list
//          -   Push all of its neighbors into the stack
//  -   Retrun the result array