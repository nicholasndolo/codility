function countTruthy(array){
 let count = 0;
 for(let item of array)
  if(item) count++;
 return count;
}

console.log(countTruthy([1,2,3, null, "hELLO"]))