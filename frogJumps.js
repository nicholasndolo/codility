function minimumJumps(x, y, D){
  return Math.ceil((y - x) / D)
}

console.log(minimumJumps(10, 85, 30))