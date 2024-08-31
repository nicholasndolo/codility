function includes(array, searchElement){
  for(let item of array)
    if(item === searchElement) return true;

  return false;
  // const filtered = array.filter(item => item === searchElement);
  // return filtered.length? "true" : "false";


}

function arrayFromRange(min, max) {
  const rangeArray = [];

  for(let i = min; i <= max; i++)
    rangeArray.push(i)
    
  return rangeArray
}

function except(array, excluded){
  const output = []
  
  for(let item of array)
    if(!excluded.includes(item))
      output.push(item)
    
  return output
}


