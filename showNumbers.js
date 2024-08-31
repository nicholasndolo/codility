// method 1
function showNumbers(limit){
  for(let i = 0; i <= limit; i++){
    const message = (i % 2 === 0) ? "EVEN": "ODD"
    console.log(i, message)
  }
}

// Method 2

function printNumbers(limit){
   for(let i = 0; i <= limit; i++){
    if(i % 2 === 0) console.log(i, "EVEN")
    else console.log(i, "ODD")
   }
}

printNumbers(20)