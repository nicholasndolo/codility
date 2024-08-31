
const myArray = [1,2,3,4,1,2,3]

function findEvenIndex(arr) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    let start = arr.slice(0, i+1).reduce((a, b) => a + b, 0);
    let end = arr.slice(i).reduce((a, b) => a + b, 0)
    if (start === end) {
      index = i
    }
  }
  return index;
}

findEvenIndex(myArray) 