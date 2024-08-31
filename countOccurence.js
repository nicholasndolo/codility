console.log(countOccurence([6, 1, 2, 2, 2, 1], 1))
function countOccurence(array, searchElement){
  // method 1
  // let count = 0

  // for(let element of array){
  //  if(elemrnt === searchElement)
  //   count++;

  // return count

  // method 2

  return array.reduce((acc, curr) => {
    // overwrite the value of curr
    curr = curr === searchElement? 1 : 0
    // return the new value of acc
    return curr + acc

  },0)


  

}
