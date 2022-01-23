// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("objConcat", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(objConcat(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.
// use .map() to map over an array of objects to
// use string interpolation to return ${array.name.toUpper()} is a ${array.occupation}

const objConcat = (array) => {
   return array.map(value =>{
    //  set newer = object key
    const objValue1 = value[(Object.keys(value)[0])].split(' ')
    const objValue2 = value[(Object.keys(value)[1])]
    // console.log(`Name: ${value.name}, occupation: ${value.occupation} `)
    // return console.log(array[objKey])
    // console.log(objKey[0].charAt(0).toUpperCase())
    let objValue = [objValue1[0].charAt(0).toUpperCase() + objValue1[0].substring(1), objValue1[1].charAt(0).toUpperCase() + objValue1[1].substring(1)].join(' ')
    return `${objValue} is ${objValue2}.`
  })

}

console.log(objConcat(people))
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("numSortDiv", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(numSortDiv(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(numSortDiv(hodgepodge2)).toEqual([ 2, 1, -1])
  })
})
const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.

const numSortDiv = (array) => {

  return array.filter(value => typeof(value) === "number" ).map(value => value % 3)

}



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubeSum", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("function that takes in an array of numbers and returns the sum of all the numbers cubed.", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(cubeSum(cubeAndSum1)).toEqual(99)
    expect(cubeSum(cubeAndSum2)).toEqual(1125)
  })
})

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.
const cubeSum = (array) => {

  let newArr = array.map(value => value**3)
  return newArr.reduce((a,b) => a + b)
}

// console.log(cubeSum(cubeAndSum2))