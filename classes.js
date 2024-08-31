class Birds {
   constructor(name, breed, age) {
    this.name = name
    this.breed = breed
    this.age = age
    this.favFoods = []
   }

   introduce() {
       return `Hi, my name is ${this.name}`
   }

   addFood = food => this.favFoods.push(food)

   loopThroughFoods = () => {
       this.favFoods.forEach(this.logFoods)
   }

   logFoods = (food) => {
    console.log(`Hi my name is ${this.name} and my favorite is ${food}`)
   }
   
}

let rose = new Birds("rose", "domestic longhair", 9);
let cate = new Birds("cate", "domestic shorthair", 3);

rose.addFood("Fish");
rose.addFood("Beef");
rose.addFood("Milk");
rose.addFood("Soup");
rose.addFood("Rice");



class Fish{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

const redFish = new Fish("red", 5)

class Transaction {
    // declare private fields
    #amount;
    #date;
    #memo;
    constructor(amount, date, memo) {
      // assign values to private fields
      this.#amount = amount;
      this.#date = date;
      this.#memo = memo;
    }
  }

const transaction = new Transaction(2500, "Jan/15/2023", "French Beans");

class Cat {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    
    speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak() {
        if(this.sex === "male") return `It's me! ${this.name}, the parrot!`

        return `${this.name} says squawk!`
       
    }
}

const dog1 = new Dog("simba", "male");
const dog2 = new Dog("cate", "female");

const cat1 = new Cat("rose", "female");
const cat2 = new Cat("bully", "male");

const bird1 = new Bird("squishy", "female");
const bird2 = new Bird("bobo", "male");


//static methods

//Static methods are class level methods - they are not callable on instances of a class, only the class itself.
// These are often used in 'utility' classes - classes that encapsulate a set of related methods but don't need to be made into instances.
 //For example, we could write a CommonMath class that stores a series of math related methods:

class CommonMath {
    static tripple(num) {
        return num ** 3;
    }

    static findHypotenuse(a, b) {
        return Math.floor(Math.sqrt(a ** 2 + b ** 2));
    }

    static findSqrt(num){
       return Math.sqrt(num);
    }
}

let num = CommonMath.tripple(3);
let hyp = CommonMath.findHypotenuse(5, 5);
let sqrt = CommonMath.findSqrt(25);

//Define get Keyword in JavaScript Class Context

//The get keyword turns a method into a 'pseudo-property', that is - it allows us to write a method that interacts like a property. To use get, 
//write a class method like normal, preceded by get:

class Square {
    constructor(height) {
        this.height = height;
    }

    get area() {
        return this.height ** 2;
    }
}

//As a result of this, area will now be available as though it is a property just like height:
//The main benefit to using get is that your area calculation isn't actually run until it is accessed



const square = new Square(5);

//Define set Keyword in JavaScript Class Context;

//The set keyword allows us to write a method that interacts like a property being assigned a value.
//By adding it in conjunction with a get, we can create a 'reassignable' pseudo-property.
//We can assign area a new value, making area fully act like a real property, we create both get and set methods for it:

class AnotherSquare {
    constructor(height) {
      this.height = height;
    }
  
    get area() {
      return this.height * this.height;
    }
  
    set area(newArea) {
      this.height = Math.sqrt(newArea);
    }
  }

  const anotherSquare = new AnotherSquare(5);
  
  anotherSquare.area = 100;

  

  //Using get and set with Private Fields

  class Rectangle {
    #height;
    constructor(height) {
        if(height > 0) {
            this.#height = height;
        } else {
            throw new Error("Height must be greater than 0");
        }
    }
  
    get height() {
       this.#height;
    }
  
    set height(height) {
        if(height > 0) {
            this.#height = height;
        } else {
            throw new Error("Height must be greater than zero");
        }
    }
  }

  const rectangle = new Rectangle(4);
  //sqr.height = 10;


  //console.log(rectangle.height);

//   class Student {
//       #firstName
//       #lastName
//       constructor(firstName, lastName) {
//         this.#firstName  = this.sanitize(firstName);
//         this.#lastName = this.sanitize(lastName);
//       }

//       get firstName() {
//           return this.capitalize(this.#firstName);
//       }

//       set firstName(firstName) {
//           this.#firstName = this.sinitize(firstName);
//       }

//       capitaize(string) {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//       }

//       sanitize(string) {
//           return string.replace(/[^A-Za-z0-9-']+/g, "");
//       }
//   }

//   let student = new Student("Carr@ol-Ann", ")Freel*ing");
//   console.log(student);

class Student {
    #firstName;
    #lastName;
  
    constructor(firstName, lastName) {
      this.#firstName = this.sanitize(firstName);
      this.#lastName = this.sanitize(lastName);
    }
  
    get firstName() {
      return this.capitalize(this.#firstName);
    }
  
    set firstName(firstName) {
      this.#firstName = this.sanitize(firstName);
    }
  
    capitalize(string) {
      // capitalizes first letter
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    sanitize(string) {
      // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
      return string.replace(/[^A-Za-z0-9-']+/g, "");
    }
  }
  
  let student = new Student("Carr@ol-Ann", ")Freel*ing");
  student; // => Student { #firstName: 'Carrol-Ann', #lastName: 'Freeling' }
  
  student.firstName = "Hea@)@(!$)ther";
  console.log(student)
  student.firstName; // => 'Heather'


  class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get circumfrence() {
        return Math.PI * this.diameter;
    }

    set circumfrence(circumference) {
        this.radius = circumference / (Math.PI * 2);
    }

    get area() {
        return Math.PI
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }
  }

  const circle = new Circle(14);
  
  class Polygon {
      constructor(array) {
        this.array = array;
      }

      get countSides() {
        return this.array.length;
      }

      get perimeter() {
          return this.array.reduce((curr, acc) => curr + acc, 0)
      }
  }


  class Triangle extends Polygon {
      get isValid() {
        if(this.countSides !== 3) return false;

        let side1 = this.array[0];
        let side2 = this.array[1];
        let side3 = this.array[2];

        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        
      }
  }

 class Squar extends Polygon {

    get isValid() {
        if (this.countSides !== 4) return false;

        let side1  = this.array[0];
        let side2 = this.array[1];
        let side3  = this.array[2];
        let side4  = this.array[3];

        return ((side1 === side2) && (side2 === side3) && (side3 === side4))
    }

    get area() {
        if(this.isValid) return this.array[0] ** 2;

        return "Provide a valid square."
    }
 }

 const squar = new Squar([5, 4, 4, 4]);

 console.log(squar.area)

 class Pet{
     constructor(name) {
         this.name = name;
         this.owner = null;
     }

     speak() {
         return `${this.name} speaks`
     }
 }

 class Cow extends Pet {
     constructor(name,breed){
         super(name, breed)
         this.breed = breed;
     }
 }

 const dog = new Cow("simba", "Mwanga");
 dog.owner = "Ndolo"


class Tree {
    constructor(spieces) {
        this.spieces = spieces;
    }

    static definition() {
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }
}


class Deciduous extends Tree {
    constructor(name, spieces) {
        super(spieces)
        this.name = name
    }

    static definition() {
        return (
            super.definition() + `${this.name} trees shed their leaves annually`
        )
    }
}

//const deciduous = new Deciduous("mango" , "species");
console.log(Deciduous.definition())
console.log(Deciduous.name)