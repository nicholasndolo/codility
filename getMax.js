function getMax(array){
 if(!array.length) return 

//  let max = array[0]
//  for(let num of array){
//    if(num > max) max = num
//  }
//  return max
return array.reduce((acc, curr) => (curr > acc) ? curr : acc)
}

console.log(getMax([1,2,3, 5, 6, 7, 8]))
