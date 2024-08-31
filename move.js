function move(array, index, offset){

  const offsetPosition = index + offset;
  if(offsetPosition < 0 || offsetPosition >= array.length){
    console.error("Invalid offset")
    return 
  }

  const arrayCopy = [...array]
  const elementToMove = arrayCopy.splice(index, 1)[0]
 arrayCopy.splice(offsetPosition, 0, elementToMove)

  return arrayCopy
  
// 
}

console.log(move([1, 2, 3, 4], 0, 3) )
// [1, 6, 10, 9, 5, 8]