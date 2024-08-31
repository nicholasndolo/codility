function stringTitle(title){
  const strArr =  title.split(" ")

  return  strArr.every(el => el[0] === el[0].toUpperCase())
}

console.log(stringTitle("This is A Test Title"))