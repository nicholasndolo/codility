function missingNumbers(arr){
  
  const sortedArray = arr.sort((a, b) => a -b)

  let missingNumber = sortedArray[0];

  for(let i = 0; i < sortedArray.length + 1; i++){
    if((sortedArray[i + 1] - sortedArray[i]) !== 1)
      return missingNumber = sortedArray[i + 1] - 1
   }  
 
 }

console.log(missingNumbers([3, 0, 1, 4, 6, 2]))