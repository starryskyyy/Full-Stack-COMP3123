/************** Exercise 1 **************/

//Rewrite the following code block using ES6 syntax, ie. const, 
//let, arrow function, template literals and for..of

// arrow function
const gretter = (myArray, counter) => {
    //for..of + let
    for(let name of myArray) {
        // const + template literal
        const greetText = `Hello ${name}`
        console.log(greetText)
    }
}
console.log("**** Exercise 1 ****\n")
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3)

/************** Exercise 2 **************/

//Using destructuring assignment syntax and the spread operator, 
//write a function will capitalize the first letter of a string

function capitalize(str){
   
    const [firstChar, ...afterPart] = str;
    return firstChar.toUpperCase() + afterPart.join('').toLowerCase();


}
console.log("\n**** Exercise 2 ****\n")
console.log(capitalize('fooBar'))
console.log(capitalize('nodeJs'))

/************** Exercise 3 **************/

//Using array.proto.map create function to use the capitalize method in 
//Exercise 2 to upper case the first character of each Color in the following array

const colors = ['red', 'green', 'blue']
const capitalizeColor = () => colors.map((str) => {
    return capitalize(str)} );

console.log("\n**** Exercise 3 ****\n")
console.log(capitalizeColor())

/************** Exercise 4 **************/

//Using array.proto.filter create a function that will filter out 
//all the values of the array that are less than twenty.
