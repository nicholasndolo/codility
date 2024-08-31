// Divisible by 3  => Fizz
// Divisible by 5  => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// If input is not a number => Not a number

function fizzBuzz(input){
if( typeof input !== "number") return "Not a number"

  // if((input % 3 === 0) && (input % 5 === 0)) return "FizzBuzz"
  // if(input % 3 === 0 )return "Fizz"
  // if(input % 5 === 0 )return "Buzz"

  // return input
 return ((input % 3 === 0) && (input % 5 === 0))? "FizzBuzz" : 
    (input % 3 === 0) ? "Fizz" :
     (input % 5 === 0 )? "Buzz" : input
}
let result = fizzBuzz(1)
console.log(result)