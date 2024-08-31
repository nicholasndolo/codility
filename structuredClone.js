// Create an object with a value and a circular reference to itself.
const original = {name: "MDN"}
original.itself = original

// clone it
const clone = structuredClone(original)

console.log(clone !== original)  // the objects are not the same (not same identity)
console.log(clone.name)  // they do have the same values
console.log(clone.itself === clone)