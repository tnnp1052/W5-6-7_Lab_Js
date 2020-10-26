//LAB WEEK 5

//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let jobTitle = `astrophysicist`
let geographicLocation = `California`
let annualSalary = `120,000`
let companyName = `NASA`

console.log(`You will be a ${jobTitle} in ${geographicLocation}, making $${annualSalary} for ${companyName}`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

let currentYear = 2020
let birthYear = 2000
let currentAge2 = currentYear - birthYear

console.log(`They are ${currentAge2} years old.`)

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let currentAge3 = 20
let maxAge = 100
let estimatedAmount = 2
let totalEat = ((maxAge - currentAge3)/365) * 2

console.log(`You will need ${totalEat} to last you until the ripe old age of ${maxAge}`)

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN"

let radiusCircle = 20
let pi = Math.PI
let circumferenceCircle = radiusCircle * 2 * pi
let areaCircle = radiusCircle ** 2 * pi

console.log(`The circumference is ${circumferenceCircle}`)
console.log(`The area is ${areaCircle}`)

// EXERCISE 5: The Temperature Converter
// It's hot out! Let's make a converter based on the steps here. Store a celcius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F". Now store a fahrenheit temperature into a variable. Convert it to celcius and output "NN°F is NN°C".

let temperatureCelcius = 20
let celciusToFahrenheit = temperatureCelcius * 1.8  +32
let temperatureFahrenheit = 86
let fahrenheitToCelcius = ((temperatureFahrenheit - 32) *5)/9

console.log(`${temperatureCelcius}°C is ${celciusToFahrenheit}°F`)
console.log(`${temperatureFahrenheit}°F is ${fahrenheitToCelcius}°C`)





//LAB WEEK 6
/*Instructions
For each exercise, follow the instructions to create a function that either outputs the result to the console using console.log directly in the function, or has a return with the necessary value and is then output to the console from where the function was called.

Ideally, try both methods to get comfortalbe with the role of a function*/


// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num) {
    return num ** 2
}

let numToSquare = 3

console.log(`The result of squaring the number ${numToSquare} is ${squareNumber(numToSquare)}`)

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(num) {
    return num / 2
}

let numToHalf = 5

console.log(`Half of ${numToHalf} is ${halfNumber(numToHalf)}`)

// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf (a,b) {
    return (a / b) * 100
}

let num1 = 2
let num2 = 4

percentOf(num1,num2)

console.log(`${num1} is ${percentOf(num1,num2)}% os ${num2}`)

// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(a) {
    let pi = Math.PI
    return (pi * (a ** 2))
}

let numToArea = 2
let result = areaOfCircle(numToArea)
let roundResult = result.toFixed(2)

console.log(`The area for a circle with radius ${numToArea} is ${roundResult}`)

// EXERCISE 5
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area is of the squared result (#3).

function finalNum(a) {
    let stepOne = halfNumber(a)
    let stepTwo = squareNumber(stepOne)
    let stepThree = areaOfCircle(stepTwo)
    return stepFour = percentOf(stepThree,stepTwo)
}

let numToResult = 5

console.log(`The final result for exercise 5 is ${finalNum(numToResult)}`)



//Write in HTML
document.getElementById("ex1").innerHTML = `You will be a ${jobTitle} in ${geographicLocation}, making $${annualSalary} for ${companyName}`

document.getElementById("ex2").innerHTML = `They are ${currentAge2} years old.`

document.getElementById("ex3").innerHTML = `You will need ${totalEat} to last you until the ripe old age of ${maxAge}`

document.getElementById("ex4").innerHTML = `The circumference is ${circumferenceCircle} and the area is ${areaCircle}`

document.getElementById("ex5").innerHTML = `${temperatureCelcius}°C is ${celciusToFahrenheit}°F and ${temperatureFahrenheit}°F is ${fahrenheitToCelcius}°C`

document.getElementById("ex6").innerHTML = `The result of squaring the number ${numToSquare} is ${squareNumber(numToSquare)}`

document.getElementById("ex7").innerHTML = `Half of ${numToHalf} is ${halfNumber(numToHalf)}`

document.getElementById("ex8").innerHTML = `${num1} is ${percentOf(num1,num2)}% os ${num2}`

document.getElementById("ex9").innerHTML = `The area for a circle with radius ${numToArea} is ${roundResult}`

document.getElementById("ex10").innerHTML = `The final result for exercise 5 is ${finalNum(numToResult)}`