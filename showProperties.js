function ShowProperties(obj){
  for(let prop in obj)
    if(typeof obj[prop]=== "string")
      console.log(prop, obj[prop])
  
}

const person = {
  name: "John",
  age: 30,
  nationality: "Kenya",
}

ShowProperties(person)