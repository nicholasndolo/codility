function showStars(rows){
  let message = ""

 for(let i = 0; i < rows; i++){
  message += "*"
  console.log(message)  
 }
}

console.log(showStars(10));