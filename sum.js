function sum(limit){
let sum = 0;
  for(let i = 1; i <= limit;i++){
    if(i % 3 === 0 ) sum += i
    if(i % 5 === 0 ) sum += i
  }
  
  // return sum
  // for(let i = 0; i <= limit; i++){

  //   if(i % 3 === 0 || i % 5 === 0) sum += i

  // }
  return sum
  
}

console.log(sum(10))

// create a function that takes a varying number of arguments and returns their sum
function sumArgs(...args) {
  // return Array.isArray(args[0])
  // ? args[0].reduce((acc, curr) => acc + curr)
  // : args.reduce((acc, curr) => acc + curr)

  if(args.length === 1 && Array.isArray(args[0])) 
    args = [...args[0]]

  return args.reduce((acc, curr) => acc + curr)
}

console.log(sumArgs([1, 3, 4, 5, 8]))