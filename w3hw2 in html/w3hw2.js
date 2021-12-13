let prom = require('prompt-sync')();

// 1. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

// const num = [2,5,14,20]
// const largest = num.reduce((a,b) => a > b ? a : b);
// console.log(largest);

// 2a. Create a function called celsiusToFahrenheit:
// - Take a Celsius temperature from the user and convert it to Fahrenheit
// - Return string as output: "SOMETHING degrees Celsius is Something degrees Fahrenheit"

// let celsius = 10

// const fahrenheit = (a) => (a * 9/5) + 32
// console.log(fahrenheit(celsius));

// 2b. Create a function called fahrenheitToCelsius:
// - Now take a Fahrenheit temperature from the user and convert it to Celsius
// - Return string as output: "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"

// let fah = 100
// const cel = (a) => (a - 32) * 5/9
// console.log(cel(fah));

// 3. Create an array of at least five Student objects with the following properties: name, activity, gender
// - Filter all those students who are into swimming
// - Filter all those students who are in the activity entered by the user. For example, 
// if the user enters "Basketball" display only students with basketball as their activity 


const students = [{
    name : "A",
    activity : "Swimming",
    gender : "Male",
},
{
    name : "B",
    activity : "Soccer",
    gender : "Female",
},
{
    name : "C",
    activity : "Swimming",
    gender : "Male",
},
{
    name : "D",
    activity : "Gaming",
    gender : "Female"
},
{
    name : "E",
    activity : "Hand Ball",
    gender : "Female",
}
]


const filterStudents = students.filter(a => a.activity === "Swimming" ? a : false)
console.log(filterStudents);










// 4. Traverse through an array (either number or string array) 
// and display each value with their index position using Array.map method

const array = [2,"Yoo",5]

const farray = array.map((x,index) => `${x} is at index position ${index}` )
console.log(farray);