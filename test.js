//https://www.youtube.com/watch?v=KoeSseqKKro

const person = {
    name: "Nick",
    age: 34,
    country: "Kenya",
    wives: ["Mary", "cate"],
    vehicle: [
        {
            name: "Range",
            model: "toyota"
        },
        {
            name: "Tesla",
            model: "xxx"
        },
        {
            name: "BMW",
            model: "YYY"
        },
    ]
}


//console.log(person.vehicle[0])
//console.log(person.vehicle[1])
console.log(person.vehicle[2]["model"])


// for( [key, value] of Object.entries(person)) {
//  console.log(`Key => ${key} | Value => ${value}`)
// }

// let arr = Object.entries(person).flat()
// console.log(arr)
 

// const englishMusicByCity = {
//     manchester: [
//         {
//             bandName: "The Smiths",
//             memberNames: ["Morrissey", "Jonney", "Andey", "Mike"]
//         },

//         {
//             bandName: "Joy Division",
//             memberNames: ["Morrissey", "Stephen", "Bernard", "Ian"]
//         },
        
//     ]
// }

// console.log(englishMusicByCity)



// const likedNumbers = {
    
// }


const myPromise = new Promise((resolve, reject) => {
    const error = false;

    if(!error) {
        resolve("Yes! resolved the promise")
    } else {
        reject("No! rejected the promise")
    }
})
const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Ok! resolved the promise")
    }, 3000)
})



const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrLimit: "20"
})

const results = [
    {
        name: "Nick",
        age: 34,
        nationality: "Kenyan"
    },
    {
        name: "Jenny",
        age: 26,
        nationality: "American"
    },
    {
        name: "Mwende",
        age: 27,
        nationality: "Englandan"
    }
]

const { notStrictEqual } = require("assert");
const os = require("os")
const path = require("path")


// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// dengerouslySetInnerHTML
// URLSearchParams
// const { searchParams } = new URL(request.url)
// Object.fromEntries(searchParams.entries())
// lastIndexOf
//useUnifiedTopology
//useNewUrlParser

let str = "The last man standing man"
str.lastIndexOf("hello")

let arr = ["Mwende", "Jenny", "Nick"]
console.log(str.startsWith("The  "))

///https://www.youtube.com/watch?v=N5R6NL3UE7I
//https://www.youtube.com/watch?v=_vwCKV7f_eA
//https://www.youtube.com/watch?v=LlvBzyy-558

console.log(1)

function fooBar(n=100) {
    for (let i = 1; i <= n; i++) {
        
      if (i % 4 === 0 && i % 5 === 0) {
            console.log(`${i} FooBar`)
      }
    
  
  
      if (i % 4 === 0 && i % 5 !== 0) {
        console.log(`${i} Foo`);
      }
  
      if (i % 5 === 0 && i % 4 !== 0) {
          console.log(`${i} Bar`);
      }

      
  }
  return
}

function number(num) {
    if (typeof num === 'number') {
        return "is Number"
    } else {
        return "is not Number"
    }
}


      