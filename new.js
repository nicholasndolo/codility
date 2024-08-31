  // 0,     1,    2
// A[0], A[1], A[2]
// B[0], B[1], B[2] 
let A = [1, 1, 1, 1]
let B = [3, 2, 3, 4]
function solution(A, B) {
 let count = 0
 let length = A.length
// O(n)
  function isSatisfied(A, B) {
  for(let i = 0; i < length; i++){
    if(A[i] === B[i])
      return false
  }
  return true;
}

function rotateTable(B){
  // O(1) 
  let last = B.pop();
  // O(n) 
  B.unshift(last)
  return B
}

for(let i = 0; i < length; i++) {
  if(isSatisfied(A, B)) {
    return count;
} else {
  rotateTable(B)
  count++
}

}

return -1
}

console.log(solution(A, B))

