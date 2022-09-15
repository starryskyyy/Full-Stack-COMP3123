/*************  Question 1 *************/

// Write a JavaScript program to capitalize the first letter of each word of a given string.

function capitalizeFirstLetter(str) {
    // split string to an array of strings
    let arr = str.split(" ")
    // loop through each word
    for (let i = 0; i < arr.length; i++) {
        // convert first letter to upper case and append the rest
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1)
    }
    // conver array back to a string
    str = arr.join(" ")
    // print the result
    return str
}
console.log("****** Question 1 ******\n")
// call the function 
console.log(capitalizeFirstLetter("the quick brown fox"))


/*************  Question 2 *************/

// Write a JavaScript program to find the largest of three given integers.

function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3) // prints largest integer
}
console.log("\n****** Question 2 ******\n")
console.log(findMax(1, 0, 1))
console.log(findMax(0, -10, -20))
console.log(findMax(1000, 510, 440))


/*************  Question 3 *************/

// Write a JavaScript program to move last three character to the start of a given string. 
// The string length must be greater or equal to three.

function move(str) {
    let result = ""
    // split string to an array of strings
    let arr = str.split(" ")
    for (let i = arr.length - 1; i >= 0; i--) {
        // if string has at least 3 characters then we need to split
        if (arr[i].length >= 3) {
            // substring last 3 chars and add rest to the end of the string
            arr[i] = arr[i].substring(arr[i].length - 3) + arr[i].substring(0, arr[i].length - 3)
            result = arr[i] // prints result
        }
        else {
            result = arr[i]// prints result
        }
    }
    return result
}
console.log("\n****** Question 3 ******\n")
console.log(move("Python"))
console.log(move("JavaScript"))
console.log(move("Hi"))


/*************  Question 4 *************/

// Write a JavaScript program to find the types of a given angle.
// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function angleType(angle) {
    // check number and print the angle type based on right conditions
    if (angle >= 0 && angle < 90) {
        return "Acute angle"
    }
    else if (angle === 90) {
        return "Right angle"
    }
    else if (angle > 90 && angle < 180) {
        return "Obtuse angle"
    }
    else if (angle === 180) {
        return "Straight angle"
    }
}
console.log("\n****** Question 4 ******\n")
console.log(angleType(47))
console.log(angleType(90))
console.log(angleType(145))
console.log(angleType(180))


/*************  Question 5 *************/

// Write a JavaScript program to find the maximum 
// possible sum of some of its k consecutive numbers (numbers that follow each other in order.) 
// of a given array of positive integers.

function maxPossibleSum(arr, k) {
    let result = 0;
    let temp = 0;

    for (let i = 0; i <= arr.length - k; i++) {
        // loop through the number of consecutive numbers 
        for (let j = i; j < i + k; j++) {
            // sum consecutive numbers 
            temp += arr[j]
            // find max number by comparing them
            if (temp > result) {
                result = temp
            }
        }
        temp = 0;
    }
    return result;
}

console.log("\n****** Question 5 ******\n")
console.log(maxPossibleSum([1, 2, 3, 14, 5], 2))
console.log(maxPossibleSum([2, 3, 5, 1, 6], 3))
console.log(maxPossibleSum([9, 3, 5, 1, 7], 2))