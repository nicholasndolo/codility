function addEdge(mat, i, j) {
  // Graph is undirected
  mat[i][j] = 1;
  mat[j][i] = 1;
}

function displayMatrix(mat){
  // Display the adjacency matrix
  for(const row of mat){
    console.log(row.join(" "));
  }
}

// Main function to run the program

// number of vertices
const V = 4;

// initialize a matrix
let mat = Array.from({length: V}, () => Array(V).fill(0))
// console.log(mat[0][0])
// displayMatrix(mat)

// Add edges to the graph
addEdge(mat, 0, 1)
addEdge(mat, 0, 2)
addEdge(mat, 1, 2)
addEdge(mat, 2, 3)
addEdge(mat, 2, 4)

displayMatrix(mat)

