const personObject = {
  name: "Nick",
  age: 33,
  occupation: "Software Engineer",
  country: "Kenya",
}
// copying objects
const anotherObject = Object.assign({}, personObject)
console.log("anotherObject", anotherObject)

// creating a map from an object 
const fromObj = new Map(Object.entries(personObject))
console.log("fromObj", fromObj)

// deleting a property from an object
delete personObject["country"]
console.log("deleted property", personObject)

const personMap = new Map();
personMap.set("name", "Jennifer");
personMap.set("age", 28);
personMap.set("occupation", "Medic");


// console.log(personMap);
// copying a map
const mapCopy = new Map(personMap);
const deepCloned = structuredClone(mapCopy);

console.log("copy", mapCopy);
console.log("deepCloned", deepCloned);

// converting a map to an object
const obj = Object.fromEntries(personMap)
console.log("obj", obj);

// iterating through a map

for (const [key, value] of personMap){
  // console.log(`${key} => ${value}`)
}

// delete key value pair from map
personMap.delete("occupation")
console.log(personMap)

// setting key value pair in map
personMap.set("firstName", "Mwende")
personMap.set("lastName", "Jenny")

// accessing values from map
const occupation = personMap.get("age")
console.log(occupation)

// grab the first key and value pair from map

const [[firstKey, firstValue]] = personMap
console.log(personMap)