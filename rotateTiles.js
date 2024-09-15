function solution(A){
 for(i = 0; i < A.length; i++){
  if(A[i][1] === A[i  + 1][3])
    continue;

  let index = A[i+1].indexOf(A[i][1])
  if(index === 0){
    // rotate A[i + 1] anticlockwise
  }

  if(index === 2){
    // rotate A[i + 1] clockwise
  }

  if(index === 1){
    // rotate A[i + 1] clockwise
  }
 }
}