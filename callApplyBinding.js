const person = {
  name: 'Jenny',
  age: 30,
  country: "United States"
}

const addToThis = function(num1, num2, num3 ){
//  return this.age += num1 + num2 + num3
console.log(this)
}

// call
console.log(addToThis.call(person, 3, 4, 5))


// apply
let arr = [3, 6, 9, 7]

console.log(addToThis.apply(person, arr))

// bind

const bound = addToThis.bind(person)
console.dir(bound)


// Function.prototype.apply()

// The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);
console.log(max)

const min = Math.min.apply(null, numbers);
console.log(min)


