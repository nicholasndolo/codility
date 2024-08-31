// Solution 1
let binaryArr = []
function decimalToBinary(number){
  const rem = number % 2
  const result = Math.floor(number / 2)
  binaryArr.unshift(rem)
  
  if(result === 0) 
    return binaryArr.join('')
  
  return decimalToBinary(result) 
}

// solution 2
function decToBinary(number){
  // let binaryNum = Array.from({ length: 32})
  let binaryNum = []

  for(let i = 0; number > 0; i++){
    binaryNum[i] = number % 2
    number = Math.floor(number / 2)
  }
  
  return binaryNum.reverse().join('')

}

console.log(decToBinary(339))

