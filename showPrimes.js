function showPrimes(limit){
  
  for(let number = 2; number <= limit; number++)
   if(isPrimeNumber(number)) 
    console.log(number)
}

showPrimes(50)

function isPrimeNumber(number){
  for(let factor = 2; factor < number; factor++)
    if(number % factor === 0)
      return false
  return true
}